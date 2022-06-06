import React, { Component } from "react";
import { Link } from 'react-router-dom';

import '../Css-Componentes/FondoBase.css';
import '../Css-Componentes/Registro.css';

class Registro extends Component{
    // constuctor() { this.routeChange = this.routeChange.bind(this); }
    // routeChange() { let path = '/registrodoctor'; this.props.history.push(path); }

    render(){
        return(
            <div className="fondo">
                <div className="cuadro">
                    <h1 className="h1">Tipo de usuario a Registrar:</h1>
                    <div className="botones">
                        <Link to="/registropaciente" className="btn btnTipoUsuario txtBotones">Paciente</Link>
                        <Link to="/registrodoctor" className="btn btnTipoUsuario txtBotones">Doctor</Link>
                    </div>
                    <div className="abajo">
                        <label>Para Iniciar Sesión <a href="/">Click Aquí</a></label>
                    </div>
                </div>
            </div>
        );
    }
}
export default Registro;