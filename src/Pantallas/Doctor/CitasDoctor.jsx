import React from "react";
import DoctorEncabezado from "../../Components/Doctor/DoctorEncabezado";
import ListaCitasDoctor from "../../Components/Doctor/ListaCitasDoctor";

export default function CitasDoctor(){
    const nombre = localStorage.getItem('nombre');
    return(
        <div className="fondoSistema">
            <div className="cuadro">
                <DoctorEncabezado />
                <div className="navigation">
                    <ul className="ulNavegacion">
                        <li className="liNavegacion">
                            <a className="aNavegacion" href="/iniciodoctor"><i className="fa fa-home"></i><br/>Inicio</a>
                        </li>
                        <li>
                            <a className="menuClickeado aNavegacion" href="/citasdoctor"><i className="fa fa-calendar-check-o"></i><br/>Citas</a>
                        </li>
                        <li>
                            <a className="aNavegacion" href="/historialmedicodoctor"><i className="fa fa-paste"></i><br/>Historial Médico</a>
                        </li>
                    </ul>
                </div>
                <div className="contenido">
                    <h1>{nombre} estas son tus próximas citas:</h1>
                </div>
                <div>
                    <ListaCitasDoctor/>
                </div>
            </div>
        </div>
    );
}