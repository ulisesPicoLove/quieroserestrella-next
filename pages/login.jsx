import React from 'react'
import styles from '../styles/landings/login.module.scss'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useRouter } from 'next/router'
import Swal from 'sweetalert'

export default function login() {
    const router = useRouter();
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: Yup.object({
            email: Yup.string().email("Debes de ingresar un email valido."),
            password: Yup.string().required("Debes de ingresar tu contraseña."),
        }),
        onSubmit: async (values) => {
            const response = await fetch("/api/auth/login",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: values.email,
                    password: values.password
                })
            });

            const data = await response.json();
            if (response.status === 200) {
                router.push("/admin")
            } 
            else if (response.status === 401) {
                swal("", "Error en las credenciales de inicio de sesion.", "error")
            }
        }
    })
    return (
        <main className={styles['login-container']}>
            <div className={styles['card-login']}>
                <div>
                    <img src="https://blog.provident.com.mx/wp-content/uploads/2022/01/logo-estrellas.png" alt="Quiero ser estrella logo" />
                </div>
                <h1>Iniciar sesion</h1>
                <form onSubmit={formik.handleSubmit}>
                    <div className={styles['labels-container']}>
                        <label htmlFor="">Correo</label>
                        {formik.touched.email && formik.errors.email ? (
                            <div className={` ${styles['w-full']} ${styles['rounded-sm']} ${styles['bg-red-200']} ${styles['px-2']} ${styles['py-2']} ${styles['text-sm']} ${styles['text-red-500']} ${styles['my-2']} ${styles['text-left']} `}>
                                {formik.errors.email}
                            </div>
                        ) : null}
                        <input name='email' id='email' value={formik.email} onChange={formik.handleChange} type="text" />
                    </div>
                    <div className={styles['labels-container']}>
                        <label htmlFor="">Contraseña</label>
                        {formik.touched.password && formik.errors.password ? (
                            <div className={`${styles['w-full']} ${styles['rounded-sm']} ${styles['bg-red-200']} ${styles['px-2']} ${styles['py-2']} ${styles['text-sm']} ${styles['text-red-500']} ${styles['my-2']} ${styles['text-left']} `}>
                                {formik.errors.password}
                            </div>
                        ) : null}
                        <input name='password' id='password' value={formik.password} onChange={formik.handleChange} type="password" />
                    </div>
                    <div className={styles['cta-container'] }>
                        <button type='submit'>Iniciar Sesion</button>
                    </div>
                </form>
            </div>
        </main>
    )
}
