import React from 'react'
import { json2csv } from 'json-2-csv';
import styles from '../styles/landings/admin.module.scss'

export default function TableResponses({ response }) {

    const filteredData = response.map(obj => {
        const { _id, __v, fecha_creacion, ...rest } = obj; // Desestructuración y operador rest/spread
        const date = new Date(fecha_creacion);
        const formattedFechaCreacion = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

        return {
            ...rest, // Propiedades restantes
            fecha_creacion: formattedFechaCreacion, // Añadir fecha_creacion en formato dd/mm/yyyy
        };
    });

    const convertJsonToCsv = async (data) => {
        try {
            const csv = await json2csv(data);
            // Crear un Blob con el contenido CSV
            const blob = new Blob([csv], { type: 'text/csv' });

            // Crear un objeto URL a partir del Blob
            const csvURL = window.URL.createObjectURL(blob);

            // Crear un enlace (link) invisible para descargar el archivo
            const link = document.createElement('a');
            link.href = csvURL;
            const date = new Date();
            link.setAttribute(
                'download',
                `fomulario_quiero_ser_estrella_${date.getDate()}_${date.getMonth() + 1}_${date.getFullYear()}.csv`
            );
            document.body.appendChild(link);

            // Simular clic en el enlace para descargar el archivo
            link.click();

            // Eliminar el enlace del DOM
            document.body.removeChild(link);
        } catch (error) {
            console.error('Error al convertir a CSV:', error);
        }
    }

    return (
        <main className={styles['table-container']}>
            <h1 className={styles['title']}>Respuestas del formulario.</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Telefono</th>
                            <th>Ciudad</th>
                            <th>Localidad</th>
                            <th>Colonia</th>
                            <th>Codigo Postal</th>
                            <th>Fecha de registro</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.phone}</td>
                                <td>{item.city}</td>
                                <td>{item.location}</td>
                                <td>{item.colonia}</td>
                                <td>{item.codigoPostal}</td>
                                <td>{item.fecha_creacion}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className={ styles['download-button'] }>
                <button onClick={() => convertJsonToCsv(filteredData)}>Descargar CSV</button>
            </div>
        </main>

    )
}