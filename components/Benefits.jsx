import styles from '../styles/landings/comisionista.module.scss'

export default function Benefits() {
    return (
        <div id={styles["beneficios"]}>
            <div className={`${styles["col"]} ${styles["col-left"]}`}>
                <img src="https://blog.provident.com.mx/wp-content/uploads/2021/12/d-01.png" alt='Money'/>
            </div>
            <div className={`${styles["col"]} ${styles["col-right"]}`}>
                <h2>
                    ¿qué recibe <br />
                    una Estrella?
                </h2>
                <ul>
                    <li>Comisiones atractivas semanales</li>
                    <li>Apoyo semanal de saldo a tu celular</li>
                    <li>Promociones que te motivarán a alcanzar tus logros personales</li>
                    <li>
                        Puntos que pueden ser canjeados por increíbles premios en
                        www.soyestrella.com
                    </li>
                    <li>Seguro COVID-19</li>
                    <li>
                        Posibilidad de obtener una Cobertura&nbsp;Integral:
                        Seguro&nbsp;de&nbsp;vida, apoyo&nbsp;funerario, consultas&nbsp;médicas
                        y&nbsp;mucho&nbsp;más
                    </li>
                </ul>
            </div>
        </div>
    )
}

