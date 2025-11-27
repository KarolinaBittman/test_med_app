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
                        {/* Use Link to connect to the Home route ("/") */}
                        <li><Link to="/">Home</Link></li>
                        
                        {/* Use Link to connect to the Login route ("/login") */}
                        <li><Link to="/login">Login</Link></li> 
                        
                        {/* Use Link to connect to the Sign Up route ("/signup") */}
                        <li><Link to="/signup">Sign Up</Link></li>
                        
                        {/* Other links */}
                        <li><Link to="/services">Services</Link></li>
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
