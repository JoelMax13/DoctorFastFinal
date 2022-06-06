import React, {useState} from "react";
import Modal from "./Modal";
import axios from "axios";
import Calendar from "react-calendar/dist/umd/Calendar";
import 'react-calendar/dist/Calendar.css';
import styled from "styled-components";
import Swal from "sweetalert";

const CuadroDoctores = ({Doctor}) => {
    const [estadoModal, cambiarEstadoModal] = useState(false);
    const [date, setDate] = useState(new Date());
    const [lista, setLista] = useState([]);

    const uri = "https://doctorfastapi.herokuapp.com/doctor/horarios/";

    const onChange = date =>{
        setDate(date);
    }

    let doc = Doctor.id;
    let anio = date.getFullYear();
    let mes = date.getMonth();
    let dia = date.getDate();
    const fecha = anio+"-"+(mes+1)+"-"+dia;
    const uri2 = uri + fecha + "/" + doc;

    function mostrarHorarios(){
        document.getElementById("Horarios").style.display = "block";

        const getData = async () =>{
            const response = axios.get(uri2);
            return response;
        }

        getData().then((response)=>{
                setLista(response.data);
            })
    }

    const token = localStorage.getItem('user').replace('"','').replace('"','');

    function guardarCita(){
        let Hora = document.getElementById("selectHora").value;
        const uri3 = "https://doctorfastapi.herokuapp.com/paciente/cita";
        console.log(Hora);

        var data = JSON.stringify({
            "id_doctor": Doctor.id,
            "fecha": fecha,
            "hora": Hora
        });
        
        axios.post(uri3,data, {
            headers: {
                'token': token,
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            Swal({
                text: "Cita creada correctamente!", 
                icon: "success", 
                showConfirmButton: false, 
            });
        })
        .catch((error) => {
            alert(error);
        });

        cambiarEstadoModal(!estadoModal);
    }

    return (
        <div className="Contenedor-Doctor">
            <div className="info nav nav-pills">
                <div className="izq nav-item">
                    <i className="fa fa-user-md iIzq"></i>
                </div>
                <div className="centro nav-item">
                    <p><strong>Doctor/a: </strong>{Doctor.nombre} {Doctor.apellido}</p>
                    <p><strong>Especialidad: </strong>{Doctor.especialidad}</p>
                    <p><strong>Dirección: </strong>{Doctor.direccion}</p>
                </div>
                <div className="der nav-item">
                    <button 
                        className="btn btn-outline-secondary BtnAgendar"
                        onClick={()=>cambiarEstadoModal(!estadoModal)}
                    >
                        Agendar
                    </button>
                </div>
            </div>
            <Modal 
                estado={estadoModal}
                cambiarEstado={cambiarEstadoModal}
            >
                <EncabezadoModal>
                    <h2>Agendar Cita</h2>
                </EncabezadoModal>
                <h3><strong>Doctor/a:</strong> {Doctor.nombre} {Doctor.apellido}</h3>
                <p><strong>Especialidad:</strong> {Doctor.especialidad}</p>
                <Calendar
                    onChange={onChange}
                    value={date}
                />
                <br/>
                <p><strong>Día:</strong> {date.toLocaleDateString()} 
                    <button 
                        className="btn btn-outline-success"
                        onClick={mostrarHorarios}
                    >
                        Buscar
                    </button>
                </p>
                <div id="Horarios">
                    <p><strong>Horarios: </strong></p>
                    <select id="selectHora" className="form-select">
                        {
                            lista.map((Hora)=>(
                                <option>
                                    {Hora}
                                </option>
                            ))
                        }
                    </select>
                </div>
                <br/>
                <button 
                    className="btn btn-outline-primary"
                    onClick={guardarCita}
                >
                    Agendar
                </button>
            </Modal>
        </div>
    )
}
export default CuadroDoctores;
const EncabezadoModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #E8E8E8;

    h2{
        font-weight: 500;
        font-size: 20px;
        color: #1766DC;
    }
`;