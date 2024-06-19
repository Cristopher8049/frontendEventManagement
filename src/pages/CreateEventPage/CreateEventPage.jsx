import React, { useState } from "react";
import "./CreateEventPage.css";

const CreateEventPage = () => {
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [eventImage, setEventImage] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventStartTime, setEventStartTime] = useState("");
  const [eventEndTime, setEventEndTime] = useState("");
  const [error, setError] = useState("");

  const handleEventSubmit = async (e) => {
    e.preventDefault();

    const eventData = {
      eventName,
      eventDescription,
      eventLocation,
      contactInfo,
      eventImage,
      eventDate,
      eventStartTime,
      eventEndTime,
    };

    console.log("Submitting event data:", eventData); // Log the data being submitted

    try {
      const response = await fetch("http://localhost:8000/events/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to create event");
      }

      alert("Event created successfully!");
      // Reset form fields after successful submission
      setEventName("");
      setEventDescription("");
      setEventLocation("");
      setContactInfo("");
      setEventImage("");
      setEventDate("");
      setEventStartTime("");
      setEventEndTime("");
      setError(""); // Clear any previous error messages
    } catch (error) {
      console.error("Error creating event:", error);
      setError(error.message);
      alert(`Failed to create event. ${error.message}`);
    }
  };

  return (
    <div className="create-event-container">
      <h2 className="page-title">Crear Nuevo Evento</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleEventSubmit} className="event-form">
        <div className="form-group">
          <label htmlFor="eventName">Nombre del Evento:</label>
          <input
            type="text"
            id="eventName"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="eventDescription">Detalles/Descripción:</label>
          <textarea
            id="eventDescription"
            value={eventDescription}
            onChange={(e) => setEventDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="eventLocation">Ubicación/Lugar:</label>
          <input
            type="text"
            id="eventLocation"
            value={eventLocation}
            onChange={(e) => setEventLocation(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactInfo">Información de contacto:</label>
          <input
            type="text"
            id="contactInfo"
            value={contactInfo}
            onChange={(e) => setContactInfo(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="eventImage">Imagen (URL):</label>
          <input
            type="text"
            id="eventImage"
            value={eventImage}
            onChange={(e) => setEventImage(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="eventDate">Fecha de realización:</label>
          <input
            type="date"
            id="eventDate"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="eventStartTime">Hora de inicio:</label>
          <input
            type="time"
            id="eventStartTime"
            value={eventStartTime}
            onChange={(e) => setEventStartTime(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="eventEndTime">Hora de finalización:</label>
          <input
            type="time"
            id="eventEndTime"
            value={eventEndTime}
            onChange={(e) => setEventEndTime(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Crear Evento
        </button>
      </form>
    </div>
  );
};

export default CreateEventPage;
