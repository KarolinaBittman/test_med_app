import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // This is essential for the styling!

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">StayHealthy Inc.</Link>
            </div>
            <ul className="navbar-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/services">Services</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/signup">Sign Up</Link>
                </li>
                <li>
                    <Link to="/appointment">Book Appointment</Link>
                </li>
                <li>
                    <Link to="/instant-consultation">Instant Help</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;