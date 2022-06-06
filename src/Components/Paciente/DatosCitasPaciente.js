import React from 'react';
import Swal from 'sweetalert';
import axios from 'axios';

const DatosCitasPaciente = ({Cita}) => {
    const mostrarAlerta = ()=>{
        Swal({
            title: "Alerta!",
            text: "¿Desea Borrar esta cita?",
            buttons: ["Cancelar", "Aceptar"]
        }).then(response=>{
            if(response){
                borrarCita();
            }
        })
    }
    function borrarCita(){
        let id = Cita.id_cita;
        let uri = "https://doctorfastapi.herokuapp.com/paciente/cita/"
        //DELETE
        var config = {
            method: 'delete',
            url: uri + id,
            headers: { }
        };
          
        axios(config)
            .then(function (response) {
                window.location.href = window.location.href;
        })
        .catch(function (error) {
            Swal({
                text: "Ocurrió un error vuelve a intentarlo!", 
                icon: "error", 
                showConfirmButton: false, 
                timer:2000
            });
        });
    }
    return (
        <div className='Contenedor-Doctor'>
            <div className='Contenedor-texto-Calificacion'>
                <p><strong>Doctor: </strong> {Cita.nombre} {Cita.apellido}</p>
                <p><strong>Fecha: </strong> {Cita.fecha}</p>
                <p><strong>Hora: </strong> {Cita.hora}</p>
                <button 
                    className="btn btn-outline-danger"
                    onClick={()=>mostrarAlerta()}
                >
                    Borrar
                </button>
            </div>
        </div>
  )
}
export default DatosCitasPaciente;