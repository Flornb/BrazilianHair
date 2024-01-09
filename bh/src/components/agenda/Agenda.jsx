import React, { useState } from 'react';
import './Agenda.css'

export const Agenda = () => {
  // const [selectedServices, setSelectedServices] = useState([]);
  // const [selectedDate, setSelectedDate] = useState('');
  // const [selectedTime, setSelectedTime] = useState('');

  // const handleServiceChange = (e) => {
  //   const { value, checked } = e.target;
  //   if (checked) {
  //     setSelectedServices(prevSelectedServices => [...prevSelectedServices, value]);
  //   } else {
  //     setSelectedServices(prevSelectedServices => prevSelectedServices.filter(service => service !== value));
  //   }
  // };

  // const obtenerHorariosDisponibles = (fechaSeleccionada) => {
  //   const dia = new Date(fechaSeleccionada).getDay(); // Obtiene el día de la semana (0: domingo, 1: lunes, ..., 6: sábado)
    
  //   if (dia === 1 || dia === 2 || dia === 3 || dia === 4) {
  //     return ['08:15', '12:00'];
  //   } else if (dia === 5) {
  //     return ['08:15']; 
  //   } else {
  //     return []; 
  //   }
  // };
  
  // const [horariosDisponibles, setHorariosDisponibles] = useState([]);
  
  // const handleDateChange = (e) => {
  //   setSelectedDate(e.target.value);
  //   const horarios = obtenerHorariosDisponibles(e.target.value);
  //   // Actualizar los horarios disponibles basados en la fecha seleccionada
  //   setHorariosDisponibles(horarios);
  // };
   
  // const handleTimeChange = (e) => {
  //   setSelectedTime(e.target.value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const data = {
  //     servicios: selectedServices.join(', '),
  //     fecha: selectedDate,
  //     horario: selectedTime
  //   };

    // Aquí puedes realizar acciones con los datos, como enviarlos a través de una función
  //   console.log('Datos del turno:', data);
  // };


  return (
    <main className='agenda' id='agenda'>
    <div className='title-section'>
      <div className="section-divisor">
        <span className='store-title'>Turnos</span>
      </div>
    </div>
    <div className="container-agenda">
      <h1 className='text-agenda'>Solicitar Turno</h1>
      
      
      <span className='text-turnos'> DISPONIBILIDAD:
        <ul>
        <p>Martes a Viernes (7 turnos por día)
          <li>8:15 hs (4 turnos)</li>
          <li>11:00 hs (3 turnos)</li>
        </p>
        <p>Sábados (6 turnos)
          <li>8:15 hs (4 turnos)</li>
          <li>11:00 hs (2 turnos)</li>
        </p>

        </ul> 
      </span>
      <span className='text-turnos'> Para solicitar turnos haga click en el siguiente botón: </span>
        <button className="submit-btn" type="submit"><a href='https://reservas-brazilianhair.glide.page' target='_blank'>Solicitar Turno</a></button>
      {/* <form id="turno-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="tipo-servicio">Servicio:</label>
          <div className="checkbox-group">
            <label className='checks'><input type="checkbox" name="tipo-servicio" value="servicio1" onChange={handleServiceChange} /> Primer Servicio</label>
            <label className='checks'><input type="checkbox" name="tipo-servicio" value="servicio2" onChange={handleServiceChange} /> Segundo Servicio</label>
            <label className='checks'><input type="checkbox" name="tipo-servicio" value="servicio3" onChange={handleServiceChange} /> Tercer Servicio</label>
          </div>
        </div>
        <div className="form-group">
          <label className='date_hour' htmlFor="fecha">Fecha:</label>
          <input type="date" name="fecha" value={selectedDate} onChange={handleDateChange} required />
        </div>
        <div className="form-group">
          <label className='date_hour' htmlFor="horario">Horario:</label>
          <select name="horario" value={selectedTime} onChange={handleTimeChange} required>
            <option value="">Selecciona un horario</option>
            {horariosDisponibles.map((horario, index) => (
              <option key={index} value={horario}>{horario}</option>
            ))}
          </select>
        </div>
        
      </form> */}
    </div>
  </main>
  );
}


