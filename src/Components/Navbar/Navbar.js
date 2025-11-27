import React from 'react';
import './Navbar.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom'; // Import Link for routing

const Navbar = () => {
    // This function handles the mobile menu toggle logic, often found in static HTML
    const handleClick = () => {
        const navLinks = document.querySelector('.nav__links');
        if (navLinks) {
            navLinks.classList.toggle('active');
        }
    };

    return (
        <header>
            <nav className="navbar">
                <Link to="/" className="logo">
                    StayHealthy Inc.
                </Link>
                <div className="nav__links">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/signup">Sign Up</Link></li>
                        <li><a href="#services">Services</a></li>
                    </ul>
                </div>
                {/* Mobile menu icon */}
                <div className="menu-icon" onClick={handleClick}>
                    <i className="fa fa-bars"></i>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
