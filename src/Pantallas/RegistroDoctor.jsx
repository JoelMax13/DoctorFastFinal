import React, { Component } from 'react';
import axios from 'axios';

const uri = "https://doctorfastapi.herokuapp.com/signup/doctor";

class RegistroDoctor extends Component{

    cedula = React.createRef();
    nombres = React.createRef();
    apellidos = React.createRef();
    telefono = React.createRef();
    celular = React.createRef();
    direccion = React.createRef();
    usuario = React.createRef();
    correo = React.createRef();
    contrasena = React.createRef();
    confirmarContrasena = React.createRef();
    especialidad = React.createRef();
    titulo = React.createRef();
    entrada = React.createRef();
    salida = React.createRef();

    obtenerDatos = (event) =>{
        event.preventDefault();
        let cedula = this.cedula.current.value;
        let nombres = this.nombres.current.value;
        let apellidos = this.apellidos.current.value;
        let telefono = this.telefono.current.value;
        let celular = this.celular.current.value;
        let direccion = this.direccion.current.value;
        let usuario = this.usuario.current.value;
        let correo = this.correo.current.value;
        let contrasena = this.contrasena.current.value;
        let confirmarContrasena = this.confirmarContrasena.current.value;
        let especialidad = this.especialidad.current.value;
        let titulo = this.titulo.current.value;
        let entrada = this.entrada.current.value;
        let salida = this.salida.current.value;
        console.log(cedula, nombres, apellidos, telefono, celular, direccion, usuario,
            contrasena, correo, especialidad, titulo, entrada, salida);
        if(contrasena === confirmarContrasena){
            this.ingresarDatosDoctor(cedula, nombres, apellidos, telefono, celular, direccion, usuario, contrasena, correo, especialidad, titulo, entrada, salida);
            alert("Usuario creado exitosamente");
            this.recargar();
        }
        else{
            alert("Las contraseñas no coinciden");
        }
    }

    ingresarDatosDoctor(cedulaP, nombresP, apellidosP, telefonoP, celularP, direccionP, usuarioP, contrasenaP, correoP, especialidadP, tituloP, entradaP, salidaP){
        const body = { 
            cedula: cedulaP,
            nombres: nombresP,
            apellidos: apellidosP,
            telefono: telefonoP,
            celular: celularP,
            direccion: direccionP,
            usuario: usuarioP,
            correo: correoP,
            contrasena: contrasenaP,
            especialidad: especialidadP,
            titulo: tituloP,
            entrada: entradaP,
            salida: salidaP
        }
        axios.post(uri, body)
            .then(response => console.log(response.data))
            .catch(error => console.log(error))
    }

    recargar() {
        window.location.href = window.location.href;
    }

    render(){
        //Falta poner el onSubmit formulario
        return(
            <form onSubmit={this.obtenerDatos}>
                <div className="fondo">
                    <div className="cuadro">
                        <h1 className='h1'>Registro:</h1>
                        <div className="containerRegistro">
                            <div className="infoPersonal">
                                <h2><i className="fa fa-id-card-o"></i> Información Personal</h2>
                                {/* Cédula */}
                                <div className="mb-3 row">
                                    <label className="col-sm-3 col-form-label lblArriba">
                                        Número de identidad:
                                    </label>
                                    <div className="col-sm-9 txtAbajo">
                                        <input ref={this.cedula} type="text" className="form-control" id="TxtCedula" placeholder="Número de identidad"/>
                                    </div>
                                </div>
                                {/* Nombres */}
                                <div className="mb-3 row">
                                    <label className="col-sm-3 col-form-label lblArriba">
                                        Nombres:
                                    </label>
                                    <div className="col-sm-9 txtAbajo">
                                        <input ref={this.nombres} type="text" className="form-control" id="TxtNombres" placeholder=""/>
                                    </div>
                                </div>
                                {/* Apellidos */}
                                <div className="mb-3 row">
                                    <label className="col-sm-3 col-form-label lblArriba">
                                        Apellidos:
                                    </label>
                                    <div className="col-sm-9 txtAbajo">
                                        <input ref={this.apellidos} type="text" className="form-control" id="TxtApellidos" placeholder=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="infoContacto">
                                <h2><i className="fa fa-address-book-o"></i> Contactos</h2>
                                {/* Telefono Convencional */}
                                <div className="mb-3 row">
                                    <label className="col-sm-3 col-form-label lblArriba">
                                        Teléfono:
                                    </label>
                                    <div className="col-sm-9 txtAbajo">
                                        <input ref={this.telefono} type="text" className="form-control" id="TxtTelefono" placeholder=""/>
                                    </div>
                                </div>
                                {/* Celular */}
                                <div className="mb-3 row">
                                    <label className="col-sm-3 col-form-label lblArriba">
                                        Celular:
                                    </label>
                                    <div className="col-sm-9 txtAbajo">
                                        <input ref={this.celular} type="text" className="form-control" id="TxtCelular" placeholder=""/>
                                    </div>
                                </div>
                                {/* Dirección */}
                                <div className="mb-3 row">
                                    <label className="col-sm-3 col-form-label lblArriba">
                                        Dirección:
                                    </label>
                                    <div className="col-sm-9 txtAbajo">
                                        <input ref={this.direccion} type="text" className="form-control" id="TxtDireccion" placeholder=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="infoPrivada">
                                <h2><i className="fa fa-briefcase"></i> Información Privada</h2>
                                <div className="mb-3 row">
                                    <label className="col-sm-3 col-form-label lblArriba">
                                        Usuario:
                                    </label>
                                    <div className="col-sm-9 txtAbajo">
                                        <input ref={this.usuario} type="text" className="form-control" id="TxtUsuario"/>
                                    </div>
                                </div>
                                {/* Correo */}
                                <div className="mb-3 row">
                                    <label className="col-sm-3 col-form-label lblArriba">
                                        Correo:
                                    </label>
                                    <div className="col-sm-9 txtAbajo">
                                        <input ref={this.correo} type="text" className="form-control" id="TxtCorreo"/>
                                    </div>
                                </div>
                                {/* Contraseña */}
                                <div className="mb-3 row">
                                    <label className="col-sm-3 col-form-label lblArriba">
                                        Contraseña:
                                    </label>
                                    <div className="col-sm-9 txtAbajo">
                                        <input ref={this.contrasena} type="text" className="form-control" id="TxtContrasena"/>
                                    </div>
                                </div>
                                {/* Confirmar Contraseña */}
                                <div className="mb-3 row">
                                    <label className="col-sm-3 col-form-label lblArriba" id="ConfirmarContrasena">
                                        Confirmar Contraseña:
                                    </label>
                                    <div className="col-sm-9 txtAbajo">
                                        <input ref={this.confirmarContrasena} type="text" className="form-control" id="TxtConfirmarContrasena"/>
                                    </div>
                                </div>
                            </div>
                            <div className="infoAcademica">
                                <h2><i className="fa fa-bank"></i> Información Académica</h2>
                                {/* Especialidad */}
                                <div className="mb-3 row">
                                    <label className="col-sm-3 col-form-label lblArriba">
                                        Especialidad:
                                    </label>
                                    <div className="col-sm-9 txtAbajo">
                                        <input ref={this.especialidad} type="text" className="form-control" id="TxtUsuario"/>
                                    </div>
                                </div>
                                {/* Títulos */}
                                <div className="mb-3 row">
                                    <label className="col-sm-3 col-form-label lblArriba">
                                        Título:
                                    </label>
                                    <div className="col-sm-9 txtAbajo">
                                        <input ref={this.titulo} type="text" className="form-control" id="TxtTitulo"/>
                                    </div>
                                </div>
                                {/* Horarios */}
                                <div className="mb-3 row">
                                    <label className="col-sm-3 col-form-label lblArriba">
                                        Horario inicio de trabajo:
                                    </label>
                                    <div className="col-sm-9 txtAbajo">
                                        <input ref={this.horarioInicio} type="text" className="form-control" id="TxtHorarioInicio"/>
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label className="col-sm-3 col-form-label lblArriba">
                                        Horario fin de trabajo:
                                    </label>
                                    <div className="col-sm-9 txtAbajo">
                                        <input ref={this.horarioFin} type="text" className="form-control" id="TxtHorarioFin"/>
                                    </div>
                                </div>
                            </div>
                            <input className="btn btn-primary" id="BtnRegistrar" type="submit" value="Registrar"/>
                            <div className="abajo">
                                <label>Para Iniciar Sesión <a href="/">Click Aquí</a></label>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}
export default RegistroDoctor;