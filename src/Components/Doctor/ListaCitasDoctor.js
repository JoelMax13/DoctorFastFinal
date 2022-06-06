import React, {useState, useEffect} from "react";
import axios from "axios";
import DatosCitasDoctor from "./DatosCitasDoctor";

const token = localStorage.getItem('user').replace('"','').replace('"','');
const ListaCitasDoctor = () => {
    const [list, setList] = useState([]);
    
    useEffect(()=>{
        var config = {
            method: 'get',
            url: 'https://doctorfastapi.herokuapp.com/doctor/cita/nuevas',
            headers: { 
              'token': token
            }
        };
        axios(config).then((response)=>{
            setList(response.data);
            console.log(response.data)
        })
        .catch(function (error) {
            console.log(error);
        });
    }, [])
    return(
        <div>
            {
                list.map((Cita, index)=>(
                    <DatosCitasDoctor
                        key={index}
                        Cita={Cita}
                    />
                ))
            }
        </div>
    );
}
export default ListaCitasDoctor;