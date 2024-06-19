import React from "react";
import EventDetails from "../../components/Events/EventDetails";
import "./Testpage.css"; // Import CSS file for styling

const Testpage = () => {
  // Array of events
  const events = [
    {
      nombre: "Evento 1",
      detalles: "Detalles del evento 1.",
      ubicacion: "Lugar del evento 1.",
      informacionContacto: "Contacto del evento 1.",
      imagenUrl: "https://via.placeholder.com/400x200", // URL de la imagen del evento
      fechaRealizacion: "2024-07-01",
      horaInicio: "11:00 AM",
      horaFinalizacion: "3:00 PM",
    },
    {
      nombre: "Evento 2",
      detalles: "Detalles del evento 2.",
      ubicacion: "Lugar del evento 2.",
      informacionContacto: "Contacto del evento 2.",
      imagenUrl: "https://via.placeholder.com/400x200", // URL de la imagen del evento
      fechaRealizacion: "2024-07-02",
      horaInicio: "2:00 PM",
      horaFinalizacion: "6:00 PM",
    },
    {
      nombre: "Evento 3",
      detalles: "Detalles del evento 3.",
      ubicacion: "Lugar del evento 3.",
      informacionContacto: "Contacto del evento 3.",
      imagenUrl: "https://via.placeholder.com/400x200", // URL de la imagen del evento
      fechaRealizacion: "2024-07-03",
      horaInicio: "1:00 PM",
      horaFinalizacion: "5:00 PM",
    },
    {
      nombre: "Evento 4",
      detalles: "Detalles del evento 4.",
      ubicacion: "Lugar del evento 4.",
      informacionContacto: "Contacto del evento 4.",
      imagenUrl: "https://via.placeholder.com/400x200", // URL de la imagen del evento
      fechaRealizacion: "2024-07-04",
      horaInicio: "10:00 AM",
      horaFinalizacion: "2:00 PM",
    },
    {
      nombre: "Evento 5",
      detalles: "Detalles del evento 5.",
      ubicacion: "Lugar del evento 5.",
      informacionContacto: "Contacto del evento 5.",
      imagenUrl: "https://via.placeholder.com/400x200", // URL de la imagen del evento
      fechaRealizacion: "2024-07-05",
      horaInicio: "3:00 PM",
      horaFinalizacion: "7:00 PM",
    },
    {
      nombre: "Evento 6",
      detalles: "Detalles del evento 6.",
      ubicacion: "Lugar del evento 6.",
      informacionContacto: "Contacto del evento 6.",
      imagenUrl: "https://via.placeholder.com/400x200", // URL de la imagen del evento
      fechaRealizacion: "2024-07-06",
      horaInicio: "12:00 PM",
      horaFinalizacion: "4:00 PM",
    },
  ];

  return (
    <div className="testpage-container">
      <div className="events-container">
        {events.map((event, index) => (
          <EventDetails key={index} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Testpage;
