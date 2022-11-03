import styles from '../styles/landings/comisionista.module.scss'

export default function Expectations() {
    return (
        <div id={styles["expectativas"]}>
            <img
                alt="Expectativas Claras"
                className={styles["title"]}
                src="https://blog.provident.com.mx/wp-content/uploads/2021/12/expectativas-claras.png"
            />
            <div className={styles["row"]}>
                <div className={`${styles["col"]} ${styles["expectativas-img"]}`}>
                    <img
                        src="https://blog.provident.com.mx/wp-content/uploads/2022/01/b-01-04.png"
                        alt="¿Qué buscamos en nuestras Agente Comisionista Independiente?"
                    />
                </div>
                <div className={`${styles["col"]} ${styles["info"]}`}>
                    <h2>
                        ¿Qué buscamos <br />
                        en nuestras Estrellas?
                    </h2>
                    <ul>
                        <li>Vivir en el territorio que vas a cubrir</li>
                        <li>Conocer y tener disponibilidad de moverte en la zona asignada</li>
                        <li>Tiempo disponible para desarrollar tus actividades</li>
                        <li>Matemáticas básicas</li>
                        <li>Gusto por las ventas y cobranza</li>
                        <li>Celular inteligente propio</li>
                        <li>Conocimiento de aplicaciones y redes sociales</li>
                        <li>Manejar efectivo</li>
                        <li>Organizado (a), comprometido (a) y responsable</li>
                    </ul>
                </div>
            </div>
            <div className={styles["star-row"]}>
                <img src="https://blog.provident.com.mx/wp-content/uploads/2021/12/star.png" />
                <img src="https://blog.provident.com.mx/wp-content/uploads/2021/12/star.png" />
                <img src="https://blog.provident.com.mx/wp-content/uploads/2021/12/star.png" />
                <img src="https://blog.provident.com.mx/wp-content/uploads/2021/12/star.png" />
                <img src="https://blog.provident.com.mx/wp-content/uploads/2021/12/star.png" />
                <img src="https://blog.provident.com.mx/wp-content/uploads/2021/12/star.png" />
                <img src="https://blog.provident.com.mx/wp-content/uploads/2021/12/star.png" />
            </div>
            <br />
            <h2>¿Cuáles son las actividades como Estrella?</h2>
            <div id={styles["actividades"]} className={styles["row"]}>
                <div className={`${styles["col"]} ${styles["right"]}`}>
                    <div className={styles["actividades"]}>
                        <h4>AL VENDER</h4>
                        <ul>
                            <li>
                                Atraer, construir y mantener&nbsp;tu cartera&nbsp;de&nbsp;clientes
                            </li>
                            <li>
                                Realizar cambaceo, volanteos, posteos&nbsp;físicos,
                                redes&nbsp;sociales, buscar&nbsp;recomendaciones
                            </li>
                            <li>
                                Visitar a tus clientes potenciales en&nbsp;su&nbsp;domicilio
                            </li>
                            <li>Brindar seguimiento, excelente trato&nbsp;y&nbsp;servicio</li>
                            <li>
                                Entregar préstamos directamente a tus clientes cuando se requiera
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={`${styles["col"]} ${styles["left"]}`}>
                    <div className={styles["actividades"]}>
                        <h4>AL COBRAR</h4>
                        <ul>
                            <li>Acordar día y hora de pago con los clientes</li>
                            <li>Organizar una ruta&nbsp;de cobranza&nbsp;eficiente</li>
                            <li>
                                Visitar a todos&nbsp;tus&nbsp;clientes hasta lograr el
                                pago&nbsp;completo
                            </li>
                            <li>
                                Impulsar una relación a largo&nbsp;plazo
                                con&nbsp;tus&nbsp;clientes
                            </li>
                            <li>Mantener una cartera&nbsp;al&nbsp;corriente</li>
                            <li>Registrar en tu teléfono los&nbsp;pagos</li>
                            <li>
                                Realizar depósitos frecuentes en los&nbsp;bancos&nbsp;asignados
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles["star-row"]}>
                <img src="https://blog.provident.com.mx/wp-content/uploads/2021/12/star.png" />
                <img src="https://blog.provident.com.mx/wp-content/uploads/2021/12/star.png" />
                <img src="https://blog.provident.com.mx/wp-content/uploads/2021/12/star.png" />
                <img src="https://blog.provident.com.mx/wp-content/uploads/2021/12/star.png" />
                <img src="https://blog.provident.com.mx/wp-content/uploads/2021/12/star.png" />
                <img src="https://blog.provident.com.mx/wp-content/uploads/2021/12/star.png" />
                <img src="https://blog.provident.com.mx/wp-content/uploads/2021/12/star.png" />
            </div>
        </div>
    )
}
