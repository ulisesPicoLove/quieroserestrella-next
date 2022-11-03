import styles from '../styles/landings/comisionista.module.scss'

export default function Goals() {
    return (
        <div id={styles["metas"]}>
            <div className={styles["col-left"]}>
                <h2>Otras actividades para lograr tus metas personales</h2>
                <ul>
                    <li>Completar cursos presenciales y en línea</li>
                    <li>Revisar tus ventas y cobranza</li>
                    <li>Participar en pláticas de orientación</li>
                    <li>Revisar la comunicación recibida en distintos medios</li>
                    <li>Mantener una comunicación cercana con el DM</li>
                </ul>
            </div>
            <div className={styles["col-right"]}>
                <img src="https://blog.provident.com.mx/wp-content/uploads/2021/12/c-01.png" />
            </div>
        </div>
    )
}
