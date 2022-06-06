import React, { useEffect, useState } from "react";
import axios from "axios";
import CuadroDoctores from "./CuadroDoctores";

const ListaDoctores = () => {

    const uri = "https://doctorfastapi.herokuapp.com/doctors";
    
    const getData = async () =>{
        const response = axios.get(uri);
        return response;
    }

    const [list, setList] = useState([])

    useEffect(()=>{
        getData().then((response)=>{
            setList(response.data);
        })
    }, [])

    return(
        <div>
            {
                list.map((Doctor, index)=>(
                    <CuadroDoctores
                        key={index}
                        Doctor={Doctor}
                    />
                ))
            }
        </div>
    );
}
export default ListaDoctores;