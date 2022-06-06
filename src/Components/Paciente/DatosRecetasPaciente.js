import React from 'react';
import Swal from 'sweetalert';
import axios from 'axios';

const DatosRecetasPaciente = ({Cita}) => {

  function verReceta(){
    const uri = "https://doctorfastapi.herokuapp.com/doctor/cita/receta/";
    let id = Cita.id_cita;

    var config = {
      method: 'get',
      url: uri+id,
      headers: { }
    };
    
    axios(config)
    .then(function (response) {
      let info = response.data.descripcion;
      if(info!=undefined){
        Swal({
          text: response.data.descripcion
        });
      }else{
        Swal({
          text: "Receta médica no escrita"
        });
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  return (
    <div className='Contenedor-Doctor'>
            <div className='Contenedor-texto-Calificacion'>
                <p><strong>Doctor: </strong> {Cita.nombre} {Cita.apellido}</p>
                    <p><strong>Fecha: </strong> {Cita.fecha}</p>
                    <p><strong>Hora: </strong> {Cita.hora}</p>
                    <button 
                        className="btn btn-outline-info"
                        onClick={verReceta}
                    >
                        Ver Receta Médica
                    </button>
            </div>
        </div>
  )
}
export default DatosRecetasPaciente;