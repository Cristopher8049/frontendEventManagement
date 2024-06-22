import { useEffect, useState } from 'react';
import './EventPage.css';
import Navbar from '../../components/Navbar/Navbar';
import CardGrid from '../../components/CardGrid/CardGrid';
import Footer from '../../components/Footer/Footer';

function EventPage() {
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
            console.log("Fetched events data:", eventsData);
            setEvents(eventsData);
        } catch (error) {
            console.error("Error fetching events:", error);
        }
    };

    return (
        <div>
            <Navbar />
            <div style={{ height: "80px" }}></div>
            <div className="card-grid-container">
                <h1>Eventos</h1>
                <div className="card-grid">
                    {events.map((event) => (
                        event && <CardGrid key={event.eventId} event={event} />
                    ))}
                </div>
            </div>
            <Footer />

        </div>
    );
}

export default EventPage;
