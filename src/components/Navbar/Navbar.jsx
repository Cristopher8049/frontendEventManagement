import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__left">
                <a href="/" className="navbar__logo">
                    <img src={logo} alt="logo" className="navbar__logo-image" />
                </a>
            </div>
            <div className="navbar__right">
                <a href="/signup" className="navbar__link">Signup</a>
                <a href="/login" className="navbar__link">Log in</a>
                <button className="navbar__button navbar__button--create-event">CREATE EVENT</button>
                <div className="navbar__language-selector">
                    <select className="navbar__select">
                        <option value="en">EN</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
