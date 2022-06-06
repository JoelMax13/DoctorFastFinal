import React, {useState, useEffect} from "react";
import Modal from "../Paciente/Modal";
import styled from "styled-components";
import Swal from "sweetalert";
import axios from "axios";

const DatosRecetasDoctor = ({Cita}) => {
    const [estadoModal, cambiarEstadoModal] = useState(false);

    function guardarReceta(){
        const descripcion = document.getElementById("descripcion").value;
        if(descripcion.length == ""){
            Swal({
                title: "Error al crear receta!",
                text: "Debe llenar todos los campos",
                icon: "error", 
            });
        }else{
            let id = Cita.id_cita;
            let des = document.getElementById("descripcion").value;
            var data = JSON.stringify({
                "descripcion": des,
                "id_cita": id
              });
              
              var config = {
                method: 'post',
                url: 'https://doctorfastapi.herokuapp.com/doctor/cita/receta',
                headers: { 
                  'Content-Type': 'application/json'
                },
                data : data
              };
              
              axios(config)
              .then(function (response) {
                console.log(JSON.stringify(response.data));
                Swal({
                    title: "Receta creada correctamente!",
                    icon: "success", 
                });
              })
              .catch(function (error) {
                console.log(error);
              });
        }
        cambiarEstadoModal(!estadoModal);
    }

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
                    <div>
                        <button 
                            className="btn btn-outline-info"
                            onClick={()=>cambiarEstadoModal(!estadoModal)}
                        >
                            Crear Receta Médica
                        </button>
                    </div>
                </div>
            </div>
            <Modal
                estado={estadoModal}
                cambiarEstado={cambiarEstadoModal}
            >
                <EncabezadoModal>
                    <h2>Generar Receta Médica</h2>
                </EncabezadoModal>
                <form>
                    <p>Descripción:</p>
                    <textarea id="descripcion" type={"text"} className="form-control" aria-label="With textarea"></textarea>
                    <br/>
                    <button 
                        className="btn btn-outline-success"
                        onClick={guardarReceta}
                    >
                        Guardar Receta
                    </button>
                </form>
            </Modal>
        </div>
    );
}
export default DatosRecetasDoctor;
const EncabezadoModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #E8E8E8;

    h2{
        font-weight: 500;
        font-size: 20px;
        color: #1766DC;
    }
`;