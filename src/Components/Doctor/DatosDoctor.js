import React, {useState, useEffect} from 'react';
import axios from 'axios';

const DatosDoctor = () => {

    const [list, setList] = useState([])

    useEffect(()=>{
        const token = localStorage.getItem('user').replace('"','').replace('"','');
        var config = {
            method: 'get',
            url: 'https://doctorfastapi.herokuapp.com/doctor',
            headers: { 
              'token': token
            }
        };

        axios(config).then((response)=>{
            setList(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    }, [])

    return(
        <div>
            <p className='pInfoDoctor'><strong>Cédula:</strong> {list.id}</p>
            <p className='pInfoDoctor'><strong>Nombre y Apellido:</strong> {list.nombre} {list.apellido}</p>
            <p className='pInfoDoctor'><strong>Especialidad:</strong> {list.especialidad}</p>
            <p className='pInfoDoctor'><strong>Título:</strong> {list.titulo}</p>
            <p className='pInfoDoctor'><strong>Celular:</strong> {list.celular}</p>
            <p className='pInfoDoctor'><strong>Teléfono:</strong> {list.telefono}</p>
        </div>
    );
}
export default DatosDoctor;