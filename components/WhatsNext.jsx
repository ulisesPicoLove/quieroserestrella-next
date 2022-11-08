import styles from '../styles/landings/comisionista.module.scss'

export default function WhatsNext() {
  return (
    <div id={styles["que-sigue"]}>
                    <img
                        className={styles["bg"]}
                        src="https://blog.provident.com.mx/wp-content/uploads/2021/12/coins.png"
                        alt='coins'
                    />
                    <img
                        className={styles["title"]}
                        src="https://blog.provident.com.mx/wp-content/uploads/2021/12/y-ahora-que-sigue.png"
                        alt='¿Y ahora que sigue?'
                    />
                    <ul>
                        <li>
                            Primer plática – Se te explicará a detalle las actividades
                            como&nbsp;Estrella ¡No&nbsp;te&nbsp;quedes&nbsp;con&nbsp;dudas!
                        </li>
                        <li>Documentos – INE, RFC, CURP y comprobante de&nbsp;domicilio</li>
                        <li>
                            Visita a domicilio – Tendremos una plática contigo y tus&nbsp;familiares
                            para que conozcan tus&nbsp;actividades
                        </li>
                        <li>
                            Días en campo – Detalle de las actividades&nbsp;a&nbsp;realizar
                            como&nbsp;Estrella
                        </li>
                        <li>
                            Plática de seguimiento – Queremos resolver tus dudas y conocer tu
                            opinión de las actividades
                        </li>
                        <li>Firma – Firmar documentos&nbsp;necesarios</li>
                    </ul>
                    <h2>
                        Si estás interesado en formar parte del equipo de comisionistas haz clic
                        aquí
                    </h2>
                    <a
                        className={`${styles["cta"]} ${styles["cta-dark"]}`}
                        href="https://wa.me/522224847575?text=Vacante+comisionista,+presiona+enviar"
                    >
                        Tu camino empieza aquí
                    </a>
                </div>
  )
}
