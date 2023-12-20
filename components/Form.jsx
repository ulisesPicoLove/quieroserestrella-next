import styles from '../styles/landings/form.module.scss'
import Image from 'next/image';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import cities from '../json/cities.json'
import Swal from 'sweetalert'
import { useRouter } from 'next/router';

export default function Form() {
    const router = useRouter();
    const formik = useFormik({
        initialValues: {
            name: "",
            phone: "",
            city: "Por favor seleccione una ciudad",
            location: "",
            colonia: "",
            codigoPostal: "",
            confirmed: false
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Debes de proporcionar tu nombre."),
            phone: Yup.string().required("Debes de proporcionar un numero de telefono valido.").max(10, "El numero de telefono debe de ser de 10 digitos"),
            city: Yup.string().required("Debes de proporcionar tu ciudad."),
            location: Yup.string().required("Debes de proporcionar tu localidad."),
            colonia: Yup.string().required("Debes de proporcionar tu colonia."),
            codigoPostal: Yup.string().required("Debes de proporcionar un codigo postal valido.").max(5, "El codigo postal debe de ser de 5 digitos"),
            confirmed: Yup.boolean().required("Debes de estar de aceptar que has leido y comprendido el Aviso de Privacidad.").oneOf([true], "Debes de estar de confirmar que has leído y comprendido el Aviso de Privacidad.")
        }),
        onSubmit: async (values) => {
            try {
                const response = await fetch('/api/form', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name: values.name, 
                        phone: values.phone, 
                        city: values.city, 
                        location: values.location, 
                        colonia: values.colonia, 
                        codigoPostal: values.codigoPostal
                    })
                })

                const data = await response.json()
                if (response.status === 200) {
                    Swal("", "Tu respuesta ha sido recibida.", "success")
                        .then(()=>{
                            router.push("/")
                        })
                }
            } catch (error) {
                Swal("", "Ocurrio un problema", "error");
            }
        }
    })
    return (
        <>
            <div id={styles["intro"]}>
                <div className={styles["form-bg"]}>
                    <header>
                        <img
                            alt="Provident. Únete como Agente Comisionista Independiente"
                            src="https://blog.provident.com.mx/wp-content/uploads/2022/01/logo-estrellas.png"
                            width={200}
                            className={styles["logo"]}
                        />
                        <h1>
                            Solicitud de Candidatas a Estrellas
                        </h1>

                    </header>

                    <main className={styles["formulario"]}>
                        <form onSubmit={formik.handleSubmit} className={styles["form"]}>

                            <p><em>* Obligatorio </em></p>

                            <div className={styles["field"]}>
                                <label for="name" className={styles["label"]}>1. Nombre Completo <sup>*</sup></label>
                                {formik.touched.name && formik.errors.name ? (
                                    <div className={` ${styles['rounded-sm']} ${styles['bg-red-200']} ${styles['px-2']} ${styles['py-2']} ${styles['text-sm']} ${styles['text-red-500']} ${styles['my-2']} ${styles['text-left']} `}>
                                        {formik.errors.name}
                                    </div>
                                ) : null}
                                <input type="text" value={formik.values.name} onChange={formik.handleChange} id="name" name="name" placeholder="Escribe tu nombre completo" />
                            </div>

                            <div className={styles["field"]}>
                                <label for="phone">2. Teléfono <sup>*</sup></label>
                                {formik.touched.phone && formik.errors.phone ? (
                                    <div className={` ${styles['rounded-sm']} ${styles['bg-red-200']} ${styles['px-2']} ${styles['py-2']} ${styles['text-sm']} ${styles['text-red-500']} ${styles['my-2']} ${styles['text-left']} `}>
                                        {formik.errors.phone}
                                    </div>
                                ) : null}
                                <input type="number" value={formik.values.phone} onChange={formik.handleChange} id="phone" name="phone" pattern="[0-9]{10}" placeholder="Ej. 1234567890" minLength={10} maxLength={10} />
                            </div>

                            <div className={styles["field"]}>
                                <label for="city">3. Ciudad <sup>*</sup></label>
                                {formik.touched.city && formik.errors.city ? (
                                    <div className={` ${styles['rounded-sm']} ${styles['bg-red-200']} ${styles['px-2']} ${styles['py-2']} ${styles['text-sm']} ${styles['text-red-500']} ${styles['my-2']} ${styles['text-left']} `}>
                                        {formik.errors.city}
                                    </div>
                                ) : null}
                                <select onChange={(e) => formik.setFieldValue("city", e.target.value)} id="ciudad" name="ciudad" className="w-full border p-2 rounded-md">
                                    <option value="">Seleccionar Ciudad</option>
                                    {cities.map((item, index) => (
                                        <option key={index} value={item.name}>{item.name}</option>
                                    ))}
                                </select>
                            </div>

                            <div className={styles["field"]}>
                                <label for="location">4. Localidad <sup>*</sup></label>
                                {formik.touched.location && formik.errors.location ? (
                                    <div className={` ${styles['rounded-sm']} ${styles['bg-red-200']} ${styles['px-2']} ${styles['py-2']} ${styles['text-sm']} ${styles['text-red-500']} ${styles['my-2']} ${styles['text-left']} `}>
                                        {formik.errors.location}
                                    </div>
                                ) : null}
                                <input type="text" value={formik.values.location} onChange={formik.handleChange} id="location" name="location" placeholder="Nombre de tu localidad" />
                            </div>

                            <div className={styles["field"]}>
                                <label for="colonia">5. Colonia <sup>*</sup></label>
                                {formik.touched.colonia && formik.errors.colonia ? (
                                    <div className={` ${styles['rounded-sm']} ${styles['bg-red-200']} ${styles['px-2']} ${styles['py-2']} ${styles['text-sm']} ${styles['text-red-500']} ${styles['my-2']} ${styles['text-left']} `}>
                                        {formik.errors.colonia}
                                    </div>
                                ) : null}
                                <input type="text" value={formik.values.colonia} onChange={formik.handleChange} id="colonia" name="colonia" placeholder="Escribe el nombre de tu colonia" />
                            </div>

                            <div className={styles["field"]}>
                                <label for="codigoPostal">6. Código Postal <sup>*</sup></label>
                                {formik.touched.codigoPostal && formik.errors.codigoPostal ? (
                                    <div className={` ${styles['rounded-sm']} ${styles['bg-red-200']} ${styles['px-2']} ${styles['py-2']} ${styles['text-sm']} ${styles['text-red-500']} ${styles['my-2']} ${styles['text-left']} `}>
                                        {formik.errors.codigoPostal}
                                    </div>
                                ) : null}
                                <input type="number" value={formik.values.codigoPostal} onChange={formik.handleChange} id="codigoPostal" name="codigoPostal" placeholder="00000" maxLength={5} />
                            </div>

                            <p>7. Operadora Regiomontana de Estrategias Integrales, S.A. de C.V. (“REGIOMONTANA”) fungirá como responsable de tus datos personales, con domicilio en Avenida Industriales No. 101, interior 201-B, fraccionamiento Julián de Obregón de la ciudad de León, Guanajuato, C.P. 37290,.</p>
                            <p>El solicitante expresa su consentimiento para que  la REGIOMONTANA, sus empresas controladas, controladoras, filiales y/o subsidiarias, puedan captar, transferir y en general tratar los datos personales, y/o financieros para la validación, seguimiento y trámite de su solicitud de como comisionista mercantil independiente.</p>

                            {formik.touched.confirmed && formik.errors.confirmed ? (
                                <div className={` ${styles['rounded-sm']} ${styles['bg-red-200']} ${styles['px-2']} ${styles['py-2']} ${styles['text-sm']} ${styles['text-red-500']} ${styles['my-2']} ${styles['text-left']} `}>
                                    {formik.errors.confirmed}
                                </div>
                            ) : null}
                            <div className={styles["aviso-privacidad"]}>
                                <input type="checkbox" id="confirmed" name="confirmed" value={formik.values.confirmed} onChange={() => formik.setFieldValue("confirmed", !formik.values.confirmed)}/>
                                <label for="acepto_privacidad">Por tanto, el solicitante hace constar que ha leído y/o comprendido el Aviso de Privacidad que la Regiomontana ha puesto a su disposición a efecto de cumplir con lo dispuesto en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares. Para la consulta de nuestro Aviso de Privacidad Integral favor de ingresar a <a href="/privacidad">quieroserestrella.mx/privacidad</a>.</label>
                            </div>

                            <button type="submit">Enviar</button>
                        </form>
                    </main>
                </div>
            </div>
        </>
    );
}