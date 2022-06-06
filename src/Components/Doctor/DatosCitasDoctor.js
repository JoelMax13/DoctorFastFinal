import React from "react";
const DatosCitasDoctor = ({Cita}) => {

    return(
        <div className="Contenedor-Doctor">
            <div className='Contenedor-texto-Calificacion'>
                <div >
                    <div>
                        <p><strong>Cédula Paciente:</strong> {Cita.id}</p>
                        <p><strong>Nombre y Apellido:</strong> {Cita.nombre} {Cita.apellido}</p>
                        <p><strong>Fecha:</strong> {Cita.fecha}</p>
                        <p><strong>Hora:</strong> {Cita.hora}</p>
                        <p><strong>Dirección:</strong> {Cita.direccion}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default DatosCitasDoctor;