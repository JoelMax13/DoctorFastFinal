import React, {useState, useEffect} from "react";
import axios from "axios";
import DatosCitasPaciente from "./DatosCitasPaciente";

const token = localStorage.getItem('user').replace('"','').replace('"','');
const ListaCitasPaciente = () =>{
    const [list, setList] = useState([]);
    
    useEffect(()=>{
        var config = {
            method: 'get',
            url: 'https://doctorfastapi.herokuapp.com/paciente/cita/nuevas',
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
                    <DatosCitasPaciente
                        key={index}
                        Cita={Cita}
                    />
                ))
            }
        </div>
    )
}
export default ListaCitasPaciente;