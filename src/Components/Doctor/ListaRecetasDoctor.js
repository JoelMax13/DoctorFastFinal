import React, {useState, useEffect} from "react";
import axios from "axios";
import DatosRecetasDoctor from "./DatosRecetasDoctor";

const token = localStorage.getItem('user').replace('"','').replace('"','');
const ListaRecetasDoctor = () =>{
    
    const [list, setList] = useState([]);
    
    useEffect(()=>{
        var config = {
            method: 'get',
            url: 'https://doctorfastapi.herokuapp.com/doctor/cita/anteriores',
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
                    <DatosRecetasDoctor
                        key={index}
                        Cita={Cita}
                    />
                ))
            }
        </div>
    );
}
export default ListaRecetasDoctor;