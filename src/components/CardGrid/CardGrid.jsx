import './CardGrid.css';
import { Link } from 'react-router-dom';

function CardGrid({ event }) {
  if (!event) return null;

  const {
    eventName = "No name",
    eventDate = "No date",
    eventLocation = "No location",
    eventImage = ""
  } = event;

  const formatEventDate = (date) => {
    if (date === "No date") return date;
    const months = [
      "enero", "febrero", "marzo", "abril", "mayo", "junio",
      "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];
    const [year, month, day] = date.split('-');
    return `${parseInt(day)} de ${months[parseInt(month) - 1]}`;
  };

  return (
    <div className="card-grid">
      <Link
        to={`/events/${event.eventId}`}
        state={{ eventDetails: event }}
        style={{ textDecoration: "none" }}
      >
        <div className="card">
          <img src={eventImage} alt={eventName} className="card-image" />
          <div className="card-content">
            <h3>{eventName}</h3>
            <h4>{formatEventDate(eventDate)}, {eventLocation}</h4>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CardGrid;
