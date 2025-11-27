import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

// Function component for the main navigation bar
const Navbar = () => {
    // Check if the user is logged in
    const authToken = sessionStorage.getItem("auth-token");
    const userName = sessionStorage.getItem("name");
    const userEmail = sessionStorage.getItem("email");
    const navigate = useNavigate();

    // Function to extract the name from the email (part before '@')
    const getUsernameFromEmail = () => {
        if (userEmail) {
            return userEmail.split('@')[0];
        }
        return '';
    };

    // Logout functionality
    const handleLogout = () => {
        // Clear all session storage items related to authentication
        sessionStorage.removeItem("auth-token");
        sessionStorage.removeItem("name");
        sessionStorage.removeItem("phone");
        sessionStorage.removeItem("email");

        // Navigate to the Home page or Login page
        navigate("/login"); 
        // Force a reload to ensure the Navbar re-renders correctly after state change
        window.location.reload(); 
    };

    return (
        <nav className="navbar-main">
            <div className="navbar-logo">
                <Link to="/">StayHealthy Inc.</Link>
            </div>

            <div className="navbar-links">
                <Link to="/" className="nav-item">Home</Link>
                <Link to="/services" className="nav-item">Services</Link>
                
                {/* Conditional rendering based on authentication status */}
                {authToken ? (
                    // Display when logged in
                    <>
                        <span className="nav-item user-greeting">
                            Welcome, {userName || getUsernameFromEmail()}!
                        </span>
                        <button onClick={handleLogout} className="nav-item logout-button">
                            Logout
                        </button>
                    </>
                ) : (
                    // Display when logged out (or not authenticated)
                    <>
                        <Link to="/login" className="nav-item">Login</Link>
                        <Link to="/signup" className="nav-item signup-btn">Sign Up</Link>
                    </>
                )}
            </div>
        </nav>
    );
}

export default Navbar;