import React,{useState, useEffect} from 'react';
import DatosRecetasPaciente from './DatosRecetasPaciente';
import axios from 'axios';

const ListaRecetas = () => {
    const [list, setList] = useState([]);
    const token = localStorage.getItem('user').replace('"','').replace('"','');
    
    useEffect(()=>{
        var config = {
            method: 'get',
            url: 'https://doctorfastapi.herokuapp.com/paciente/cita/anteriores',
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
            {
                list.map((Cita, index)=>(
                    <DatosRecetasPaciente
                        key={index}
                        Cita={Cita}
                    />
                ))
            }
        </div>
    );
}
export default ListaRecetas;