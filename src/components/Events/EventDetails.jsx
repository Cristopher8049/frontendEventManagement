import React from "react";
import "./EventDetails.css"; // Import CSS file for styling

const EventDetails = ({ event }) => {
  const {
    nombre,
    detalles,
    ubicacion,
    informacionContacto,
    imagenUrl,
    fechaRealizacion,
    horaInicio,
    horaFinalizacion,
  } = event;

  const handleAttendClick = () => {
    // Replace with your logic to handle attending the event
    console.log(`Attending event: ${nombre}`);
  };

  return (
    <div className="event-details">
      <h2>{nombre}</h2>
      <div className="event-details-grid">
        <div className="event-description">
          <p>
            <strong>Detalles/Descripción:</strong>
          </p>
          <p>{detalles}</p>
        </div>
        <div className="event-info">
          <p>
            <strong>Ubicación/Lugar:</strong> {ubicacion}
          </p>
          <p>
            <strong>Información de contacto:</strong> {informacionContacto}
          </p>
          <p>
            <strong>Fecha de realización:</strong> {fechaRealizacion}
          </p>
          <p>
            <strong>Hora de inicio:</strong> {horaInicio}
          </p>
          <p>
            <strong>Hora de finalización:</strong> {horaFinalizacion}
          </p>
        </div>
      </div>
      {imagenUrl && (
        <img src={imagenUrl} alt={nombre} className="event-image" />
      )}
      <button className="attend-button" onClick={handleAttendClick}>
        Asistir al evento
      </button>
    </div>
  );
};

export default EventDetails;
