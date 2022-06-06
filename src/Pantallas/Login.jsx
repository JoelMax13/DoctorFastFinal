import React, { useState, Component } from 'react';
import { useNavigate } from 'react-router-dom';

import '../Css-Componentes/Login.css';
import '../Css-Componentes/FondoBase.css';

import axios from "axios";

const uri = "https://doctorfastapi.herokuapp.com/login";

export default function Login(){

    const [usu, setUsu] = useState("");
    const [con, setCon] = useState("");

    function inicioSesion(e){
        e.preventDefault();
        let txtUsu = document.getElementById("txtUsuario").value;
        let txtCon = document.getElementById("txtContrasena").value;
        document.getElementById("txtUsuario").value = "";
        document.getElementById("txtContrasena").value = "";
        peticionLogin(txtUsu, txtCon);
    }

    const navigate = useNavigate();

    function peticionLogin(usuario, contrasena) {
        //username: 'Hernesto34' , password: '12345678'
        const body = { usuario: usuario , contrasena: contrasena };
        axios.post(uri, body)
            .then(response => {if (response.data.jwt) {
                let auth = response.data.auth;
                let rol = response.data.rol;
                if(auth == true){
                    localStorage.setItem("user", JSON.stringify(response.data.jwt));
                    localStorage.setItem("nombre", JSON.stringify(response.data.name))
                    if(rol == 1){
                        navigate('/iniciopaciente');
                    }else{
                        navigate('/iniciodoctor');
                    }
                }else{
                    alert("Usuario o contraseña incorrectos. Intente de nuevo.");
                }
            }})
            .catch(error => alert("Usuario o contraseña incorrectos. Intente de nuevo."));
    }

    function mostrarContrasena(){
        var tipo = document.getElementById("txtContrasena");
        if(tipo.type == "password"){
            tipo.type = "text";
        }else{
            tipo.type = "password";
        }
    }

        return(
        // <form onSubmit={this.peticionLogin}>
        // <form>
        <form onSubmit={inicioSesion}>
            <div className='fondo'>
                <div className='cuadro'>
                    <h1 className='h1'>Ingreso:</h1>
                    <div className="container">
                        <div className="mb-3 row">
                            <label className="col-sm-3 col-form-label lblArriba">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/></svg>
                                Usuario:
                            </label>
                            <div className="col-sm-9 txtAbajo">
                                <input 
                                    id='txtUsuario' 
                                    type='text' 
                                    className="form-control" 
                                    onChange={(e)=>setUsu(e.target.value)} 
                                    required/>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label className="col-sm-3 col-form-label lblArriba">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-key-fill" viewBox="0 0 16 16">
                                    <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                                </svg>
                                 Contraseña:
                            </label>
                            <div className="col-sm-9 txtAbajo">
                                <input 
                                    id='txtContrasena'
                                    type="password"
                                    className="form-control"
                                    onChange={(e)=>setCon(e.target.value)} 
                                    required/>
                            </div>
                        </div>
                        <div>
                            <button id="BtnVerContrasena" type="button" onClick={mostrarContrasena}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                                </svg>
                            </button>
                            <label htmlFor="BtnVerContrasena">Mostrar Contraseña</label>
                        </div>
                        <button className="btn btn-primary" id="BtnIngresar" type='submit'>Ingresar</button>
                        <div className="abajo">
                            <label>Para registrarse <a href='/registro'>Click Aquí</a></label>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}