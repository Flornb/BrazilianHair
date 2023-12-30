import React, { useState, useEffect } from 'react';

function AgendaAdmin() {
  const [turnos, setTurnos] = useState([]);

  // Simulación de datos de turnos para propósitos de demostración
  const obtenerTurnos = () => {
    // Aquí podrías obtener los turnos desde un servidor o almacenamiento
    const turnosDesdeBackend = [
      { id: 1, servicio: 'Servicio 1', fecha: '2023-01-05', horario: '10:00' },
      { id: 2, servicio: 'Servicio 2', fecha: '2023-01-06', horario: '11:30' },
      { id: 3, servicio: 'Servicio 3', fecha: '2023-01-07', horario: '15:45' },
      // ... otros turnos
    ];
    setTurnos(turnosDesdeBackend);
  };

  useEffect(() => {
    // Llamada a una función para obtener los turnos (simulado aquí)
    obtenerTurnos();
  }, []);

  return (
    <div className="agenda-admin">
      <h2>Agenda de Turnos - Administrador</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Servicio</th>
            <th>Fecha</th>
            <th>Horario</th>
          </tr>
        </thead>
        <tbody>
          {turnos.map(turno => (
            <tr key={turno.id}>
              <td>{turno.id}</td>
              <td>{turno.servicio}</td>
              <td>{turno.fecha}</td>
              <td>{turno.horario}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AgendaAdmin;