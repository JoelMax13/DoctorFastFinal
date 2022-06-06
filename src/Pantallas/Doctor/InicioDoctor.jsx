import React from "react";
import DatosDoctor from "../../Components/Doctor/DatosDoctor";
import DoctorEncabezado from "../../Components/Doctor/DoctorEncabezado";

export default function InicioDoctor(){
    const nombre = localStorage.getItem('nombre');

    return(
        <div className="fondoSistema">
            <div className="cuadro">
                <DoctorEncabezado/>
                <div className="navigation">
                    <ul className="ulNavegacion">
                        <li className="liNavegacion">
                            <a className="menuClickeado aNavegacion" href="/iniciodoctor"><i className="fa fa-home"></i><br/>Inicio</a>
                        </li>
                        <li>
                            <a className="aNavegacion" href="/citasdoctor"><i className="fa fa-calendar-check-o"></i><br/>Citas</a>
                        </li>
                            {/* Crear historial Médico */}
                        <li>
                            <a className="aNavegacion" href="/historialmedicodoctor"><i className="fa fa-paste"></i><br/>Historial Médico</a>
                        </li>
                    </ul>
                </div>
                <div className="contenido">
                    <h1>Hola de nuevo {nombre}</h1>
                </div>
                <div className='Contenedor-Calificacion'> 
                        <div className='Contenedor-texto-Calificacion'>
                            <DatosDoctor/>
                        </div>
                    </div>
            </div>
        </div>
    );
}