// import { useParams } from 'react-router-dom'
// import './EventDetailPage.css'
import Navbar from "../../components/Navbar/Navbar";
import styles from "./EventDetailPage.module.css";
// import Navbar from '../../components/Navbar/Navbar';

function EventDetailPage() {
    // const { eventId } = useParams();
    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles.hero}>
                <img
                    src="https://scontent.fsrz1-1.fna.fbcdn.net/v/t39.30808-6/438081650_936929954795764_6452349645420143575_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=J8tv491OwLYQ7kNvgHFJL1l&_nc_ht=scontent.fsrz1-1.fna&oh=00_AYAF8aTxjYN8Nu5IxyTq8rV-4Qb6z6VaS6hyh2OfMOYE2g&oe=6675BA39"
                    alt="Trueno 2024"
                    className={styles.heroImage}
                    width={1200}
                    height={800}
                />
                {/* <div className={styles.overlay}>
                    <div className={styles.overlayContent}>
                        <h1 className={styles.title}>Trueno</h1>
                        <p className={styles.subtitle}>June 15-17, 2024</p>
                    </div>
                </div> */}
            </div>
            <div className={styles.content}>
                <div className={styles.eventInfo}>
                    <div className={styles.grid}>
                        <div className={styles.leftColumn}>
                            <h2 className={styles.sectionTitle}>Trueno Music Festival</h2>
                            <div className={styles.info}>
                                <div className={styles.infoItem}>
                                    <CalendarIcon className={styles.icon} />
                                    <p className={styles.infoText}>21 de junio, 2024</p>
                                </div>
                                <div className={styles.infoItem}>
                                    <ClockIcon className={styles.icon} />
                                    <p className={styles.infoText}>12:00 PM - 10:00 PM</p>
                                </div>
                                <div className={styles.infoItem}>
                                    <MapIcon className={styles.icon} />
                                    <p className={styles.infoText}>123 Main St, Anytown USA</p>
                                </div>
                            </div>
                            <p className={styles.description}>
                                Join us for three days of incredible music, food, and entertainment at the Acme Music Festival. Featuring
                                world-renowned artists, local vendors, and family-friendly activities, this is an event you wont want to
                                miss.
                            </p>
                        </div>
                        <div className={styles.rightColumn}>
                            <Button size="lg" className={styles.button}>
                                Comprar!
                            </Button>
                            <div className={styles.details}>
                                <h3 className={styles.detailsTitle}>Event Details</h3>
                                <div className={styles.detailsContent}>
                                    <p>Date: June 15-17, 2024</p>
                                    <p>Time: 12:00 PM - 10:00 PM</p>
                                    <p>Location: 123 Main St, Anytown USA</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
        size === 'lg' ? styles.large : '',
        className
    ].join(' ').trim();

    return (
        <button className={buttonClasses} {...rest}>
            {children}
        </button>
    );
};





export default EventDetailPage
