import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./EventDetailPage.module.css";
import { useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function EventDetailPage() {
  const location = useLocation();
  const event = location.state?.eventDetails;
  const { userId } = useAuth();
  const [isAttending, setIsAttending] = useState(false);
  const storedUserID = localStorage.getItem("userId");

  useEffect(() => {
    const fetchAttendanceStatus = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/events/attendance-status/${event.eventId}/${storedUserID}`
        );
        const data = await response.json();
        setIsAttending(data.isAttending);
      } catch (error) {
        console.error("Error fetching attendance status:", error);
      }
    };
    fetchAttendanceStatus();
  }, [event.eventId, userId]);

  const formatEventDate = (date) => {
    if (date === "No date") return date;
    const months = [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ];
    const [year, month, day] = date.split("-");
    return `${parseInt(day)} de ${months[parseInt(month) - 1]}`;
  };

  const formatEventTime = (time) => {
    if (time === "No time") return time;
    const [hours, minutes] = time.split(":");
    return `${parseInt(hours)}:${minutes} ${
      parseInt(hours) < 12 ? "AM" : "PM"
    }`;
  };

  const handleToggleAttendance = async () => {
    const registrationData = {
      eventId: event.eventId,
      userId: userId,
      assistance: !isAttending,
      registrationDate: new Date().toISOString(), // current date and time in ISO format
    };

    console.log("Registration Data:", registrationData);

    try {
      const response = await fetch("http://localhost:8000/events/attend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registrationData),
      });

      if (!response.ok) {
        throw new Error("Failed to update attendance");
      }

      const data = await response.json();
      console.log("Attendance updated successfully:", data);
      setIsAttending(!isAttending);
    } catch (error) {
      console.error("Error updating attendance:", error);
    }
  };

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.hero}>
        <img
          src={event.eventImage}
          alt="Trueno 2024"
          className={styles.heroImage}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.eventInfo}>
          <div className={styles.grid}>
            <div className={styles.leftColumn}>
              <h2 className={styles.sectionTitle}>{event.eventName}</h2>
              <div className={styles.info}></div>
              <p className={styles.description}>{event.eventDescription}</p>
            </div>
            <div className={styles.rightColumn}>
              <Button
                size="lg"
                className={styles.button}
                onClick={handleToggleAttendance}
              >
                {isAttending ? "Dejar de asistir" : "Asistir!"}
              </Button>
              <div className={styles.details}>
                <h3 className={styles.detailsTitle}>Detalles del evento</h3>
                <div className={styles.detailsContent}>
                  <div className={styles.infoItem}>
                    <CalendarIcon className={styles.icon} />
                    <p className={styles.infoText}>
                      {formatEventDate(event.eventDate)}
                    </p>
                  </div>
                  <div className={styles.infoItem}>
                    <ClockIcon className={styles.icon} />
                    <p className={styles.infoText}>
                      {formatEventTime(event.eventStartTime)} -{" "}
                      {formatEventTime(event.eventEndTime)}
                    </p>
                  </div>
                  <div className={styles.infoItem}>
                    <MapIcon className={styles.icon} />
                    <p className={styles.infoText}>{event.eventLocation}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

const CalendarIcon = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
};

const ClockIcon = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
};

const MapIcon = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z" />
      <path d="M15 5.764v15" />
      <path d="M9 3.236v15" />
    </svg>
  );
};

const Button = ({ children, size, className, ...rest }) => {
  const buttonClasses = [
    styles.button,
    size === "lg" ? styles.large : "",
    className,
  ]
    .join(" ")
    .trim();

  return (
    <button className={buttonClasses} {...rest}>
      {children}
    </button>
  );
};

export default EventDetailPage;
