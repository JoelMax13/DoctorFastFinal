import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './Pantallas/Login';
import Registro from './Pantallas/Registro';
import RegistroDoctor from './Pantallas/RegistroDoctor';
import RegistroPaciente from './Pantallas/RegistroPaciente';
import InicioDoctor from './Pantallas/Doctor/InicioDoctor';
import CitasDoctor from './Pantallas/Doctor/CitasDoctor';
import HistorialMedicoDoctor from './Pantallas/Doctor/HistorialMedicoDoctor';
import InicioPaciente from './Pantallas/Paciente/InicioPaciente';
import CitasPaciente from './Pantallas/Paciente/CitasPaciente';
import HistorialMedicoPaciente from './Pantallas/Paciente/HistorialMedicoPaciente';

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/registro' element={<Registro/>}/>
            <Route path='/registrodoctor' element={<RegistroDoctor/>}/>
            <Route path='/registropaciente' element={<RegistroPaciente/>}/>
            <Route path='/iniciodoctor' element={<InicioDoctor/>}/>
            <Route path='/citasdoctor' element={<CitasDoctor/>}/>
            <Route path='/historialmedicodoctor' element={<HistorialMedicoDoctor/>}/>
            <Route path='/iniciopaciente' element={<InicioPaciente/>}/>
            <Route path='/citaspaciente' element={<CitasPaciente/>}/>
            <Route path='/historialmedicopaciente' element={<HistorialMedicoPaciente/>}/>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
