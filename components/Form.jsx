import styles from '../styles/landings/form.module.scss'
import Image from 'next/image';

export default function Form() {
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
            <form className={styles["form"]}>

                <p><em>* Obligatorio </em></p>

                <div className={styles["field"]}>
                    <label for="nombre" className={styles["label"]}>1. Nombre Completo <sup>*</sup></label>
                    <input type="text" id="nombre" name="nombre" placeholder="Escribe tu nombre completo" required />
                </div>

                 <div className={styles["field"]}>
                    <label for="telefono">2. Teléfono <sup>*</sup></label>
                    <input type="tel" id="telefono" name="telefono" pattern="[0-9]{10}" placeholder="Ej. 1234567890" minlength="10" maxlength="10" required />
                </div>

                <div className={styles["field"]}>
                    <label for="localidad">3. Ciudad <sup>*</sup></label>
                        <select id="ciudad" name="ciudad" class="w-full border p-2 rounded-md" required>
                            <option value="seleccionar">Seleccionar Ciudad</option>
                            <option value="ciudad1">Ciudad 1</option>
                            <option value="ciudad2">Ciudad 2</option>
                        </select>
                </div>

                <div className={styles["field"]}>
                    <label for="localidad">4. Localidad <sup>*</sup></label>
                    <input type="text" id="localidad" name="localidad" placeholder="Nombre de tu localidad" required />
                </div>

                <div className={styles["field"]}>
                    <label for="colonia">5. Colonia <sup>*</sup></label>
                    <input type="text" id="colonia" name="colonia" placeholder="Escribe el nombre de tu colonia" required />
                </div>

                 <div className={styles["field"]}>
                    <label for="codigo_postal">6. Código Postal <sup>*</sup></label>
                    <input type="text" id="codigo_postal" name="codigo_postal" required placeholder="00000" />
                </div>
              
                  <p>7. Operadora Regiomontana de Estrategias Integrales, S.A. de C.V. (“REGIOMONTANA”) fungirá como responsable de tus datos personales, con domicilio en Avenida Industriales No. 101, interior 201-B, fraccionamiento Julián de Obregón de la ciudad de León, Guanajuato, C.P. 37290,.</p>
                  <p>El solicitante expresa su consentimiento para que  la REGIOMONTANA, sus empresas controladas, controladoras, filiales y/o subsidiarias, puedan captar, transferir y en general tratar los datos personales, y/o financieros para la validación, seguimiento y trámite de su solicitud de como comisionista mercantil independiente.</p>

                <div className={styles["aviso-privacidad"]}>
                    <input type="checkbox" id="acepto_privacidad" name="acepto_privacidad" required />
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