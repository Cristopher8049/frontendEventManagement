
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h2>TicketBo</h2>
            </div>
            <ul className="navbar-links">
                <li>
                    <Link to="/" className="navbar-link">Inicio</Link>
                </li>
                <li>
                    <Link to="/eventos" className="navbar-link">Eventos</Link>
                </li>
                <li>
                    <Link to="/login" className="navbar-link">Login</Link>
                </li>
                <li>
                    <Link to="/signup" className="navbar-link">Signup</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
