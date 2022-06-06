import React from "react";
import PacienteEncabezado from "../../Components/Paciente/PacienteEncabezado";
import ListaRecetas from "../../Components/Paciente/ListaRecetas";

export default function HistorialMedicoPaciente(){
    const nombre = localStorage.getItem('nombre');
    return(
        <div className="fondoSistema">
            <div className="cuadro">
                <PacienteEncabezado/>
                <div className="navigation">
                    <ul className="ulNavegacion">
                        <li className="liNavegacion">
                            <a className="aNavegacion" href="/iniciopaciente"><i className="fa fa-home"></i><br/>Inicio</a>
                        </li>
                        <li>
                            <a className="aNavegacion" href="/citaspaciente"><i className="fa fa-calendar-check-o"></i><br/>Citas</a>
                        </li>
                        <li>
                            <a className="menuClickeado aNavegacion" href="/historialmedicopaciente"><i className="fa fa-paste"></i><br/>Historial Médico</a>
                        </li>
                    </ul>
                </div>
                <div className="contenido">
                    <h1>{nombre} sus citas pasadas son:</h1>
                </div>
                <div>
                    <ListaRecetas/>
                </div>
            </div>
        </div>
    );
}