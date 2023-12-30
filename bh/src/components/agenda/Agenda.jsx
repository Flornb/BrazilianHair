import React, { useState } from 'react';

function TurneroForm() {
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleServiceChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedServices(prevSelectedServices => [...prevSelectedServices, value]);
    } else {
      setSelectedServices(prevSelectedServices => prevSelectedServices.filter(service => service !== value));
    }
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      servicios: selectedServices.join(', '),
      fecha: selectedDate,
      horario: selectedTime
    };

    // Aquí puedes realizar acciones con los datos, como enviarlos a través de una función
    console.log('Datos del turno:', data);
  };

  return (
    <div className="container">
      <h1>Solicitud de Turno</h1>
      <form id="turno-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="tipo-servicio">Tipo de Servicio:</label>
          <div className="checkbox-group">
            <label><input type="checkbox" name="tipo-servicio" value="servicio1" onChange={handleServiceChange} /> Servicio 1</label>
            <label><input type="checkbox" name="tipo-servicio" value="servicio2" onChange={handleServiceChange} /> Servicio 2</label>
            <label><input type="checkbox" name="tipo-servicio" value="servicio3" onChange={handleServiceChange} /> Servicio 3</label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="fecha">Fecha:</label>
          <input type="date" name="fecha" value={selectedDate} onChange={handleDateChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="horario">Horario:</label>
          <input type="time" name="horario" min="10:00" max="21:00" value={selectedTime} onChange={handleTimeChange} required />
        </div>
        <button type="submit">Solicitar Turno</button>
      </form>
    </div>
  );
}

export default TurneroForm;

