import styles from '../styles/landings/comisionista.module.scss'

export default function Steps() {
  return (
    <div id={styles["que-es"]}>
                    <div className={styles["star-bg"]}>
                        <img
                            className={styles["star-01"]}
                            src="https://blog.provident.com.mx/wp-content/uploads/2021/12/star.png"
                        />
                        <img
                            className={styles["star-02"]}
                            src="https://blog.provident.com.mx/wp-content/uploads/2021/12/star.png"
                        />
                    </div>
                    <img
                        alt="¿Qué es un Agente Comisionista Independiente?"
                        className={styles["title"]}
                        src="https://blog.provident.com.mx/wp-content/uploads/2021/12/que-es-una-estrella.png"
                    />
                    <h3>
                        Una Estrella es un(a) Agente&nbsp;comisionista independiente que presenta
                        nuestros&nbsp;productos y&nbsp;servicios a nuestros&nbsp;clientes.
                        Queremos que formes&nbsp;parte de este grupo&nbsp;de&nbsp;Estrellas y
                        hagas&nbsp;crecer tu negocio&nbsp;independiente
                    </h3>
                    <div className={styles["row"]}>
                        <div className={styles["item"]}>
                            <div className={styles["number"]}>
                                <img src="https://blog.provident.com.mx/wp-content/uploads/2021/12/star.png" />
                                1
                            </div>
                            <h4>La actividad</h4>
                            <span>Te diremos qué hacer y cómo generar&nbsp;comisiones</span>
                        </div>
                        <div className={styles["item"]}>
                            <div className={styles["number"]}>
                                <img src="https://blog.provident.com.mx/wp-content/uploads/2021/12/star.png" />
                                2
                            </div>
                            <h4>El inicio</h4>
                            <span>Conocer tu propio negocio</span>
                        </div>
                        <div className={styles["item"]}>
                            <div className={styles["number"]}>
                                <img src="https://blog.provident.com.mx/wp-content/uploads/2021/12/star.png" />
                                3
                            </div>
                            <h4>El día a día</h4>
                            <span>Puedes crecer y obtener más&nbsp;comisiones</span>
                        </div>
                        <div className={styles["item"]}>
                            <div className={styles["number"]}>
                                <img src="https://blog.provident.com.mx/wp-content/uploads/2021/12/star.png" />
                                4
                            </div>
                            <h4>El nivel</h4>
                            <span>
                                Puedes obtener mejor nivel a&nbsp;medida que crece tu&nbsp;negocio
                            </span>
                        </div>
                        <div className={styles["item"]}>
                            <div className={styles["number"]}>
                                <img src="https://blog.provident.com.mx/wp-content/uploads/2021/12/star.png" />
                                5
                            </div>
                            <h4>Reconocimiento</h4>
                            <span>Eres importante y valoramos tu&nbsp;esfuerzo</span>
                        </div>
                        <div className={styles["item"]}>
                            <div className={styles["number"]}>
                                <img src="https://blog.provident.com.mx/wp-content/uploads/2021/12/star.png" />
                                6
                            </div>
                            <h4>
                                Desarrollo <br />
                                personal
                            </h4>
                            <span>Podrás crecer, aprender y conocer lo mejor&nbsp;de&nbsp;ti</span>
                        </div>
                    </div>
                </div>
  )
}
