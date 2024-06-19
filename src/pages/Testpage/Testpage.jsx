import React, { useState, useEffect } from "react";
import EventDetails from "../../components/Events/EventDetails";
import "./Testpage.css"; // Import CSS file for styling

const Testpage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch("http://localhost:8000/events/all");
      if (!response.ok) {
        throw new Error("Failed to fetch events");
      }
      const eventsData = await response.json();
      setEvents(eventsData);
    } catch (error) {
      console.error("Error fetching events:", error);
      // Handle error fetching events
    }
  };

  return (
    <div className="testpage-container">
      <div className="events-container">
        {events.map((event) => (
          <EventDetails key={event.eventId} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Testpage;
