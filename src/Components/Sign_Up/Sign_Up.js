import React, { useState } from 'react';
import './Sign_Up.css'
import { Link, useNavigate } from 'react-router-dom';
// REQUIRED for Exercise 3: Must import the API URL
import { API_URL } from '../../config'; 

// Function component for Sign Up form
const Sign_Up = () => {
    // State variables using useState hook
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    // State for displaying error messages from client-side or backend
    const [showerr, setShowerr] = useState(''); 
    const navigate = useNavigate(); // Navigation hook from react-router

    // Function to handle form submission, validation, and API connection
    const register = async (e) => {
        e.preventDefault(); // Prevent default form submission
        setShowerr(''); // Clear previous errors

        // Client-side validation for the 10-digit phone number (required by the exercise)
        if (!/^\d{10}$/.test(phone)) {
            setShowerr("Phone number must be exactly 10 digits.");
            return;
        }

        // API Call to register user
        try {
            const response = await fetch(`${API_URL}/api/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password,
                    phone: phone,
                }),
            });

            const json = await response.json(); // Parse the response JSON

            if (json.authtoken) {
                // Store user data in session storage upon successful registration
                sessionStorage.setItem("auth-token", json.authtoken);
                sessionStorage.setItem("name", name);
                sessionStorage.setItem("phone", phone);
                sessionStorage.setItem("email", email);

                // Redirect user to the Services page after successful sign up
                navigate("/services"); 
                window.location.reload(); // Refresh the page to update Navbar state (show Logout)
            } else {
                // Determine the error message(s) to show
                let errorToDisplay = "An unknown registration error occurred.";

                if (json.errors) {
                    // Scenario 1: Backend returns an array of errors (e.g., Express Validator)
                    errorToDisplay = json.errors.map(error => error.msg).join(' ');
                } else if (json.error && typeof json.error === 'string') {
                    // Scenario 2: Backend returns a single error message string
                    errorToDisplay = json.error;
                } else if (json.error && typeof json.error === 'object') {
                    // Scenario 3 (CRITICAL): Backend returns an object or array of objects under 'json.error'
                    if (Array.isArray(json.error)) {
                         errorToDisplay = json.error.map(e => e.msg || JSON.stringify(e)).join(' ');
                    } else {
                        errorToDisplay = json.error.message || JSON.stringify(json.error);
                    }
                }
                
                setShowerr(errorToDisplay);
            }
        } catch (error) {
            console.error("Registration failed:", error);
            setShowerr("A connection error occurred. Please ensure the backend is running.");
        }
    };

    // JSX to render the Sign Up form - using correct CSS classes and structure
    return (
        <div className="signup-page"> 
            <div className="signup-card">
                {/* Form submits to the register function */}
                <form method="POST" onSubmit={register} className="signup-form">
                    <h2 className="signup-title">Create Account</h2>
                    {/* Display errors (API or client-side) */}
                    {showerr && <div className="error-message" style={{ color: 'red', textAlign: 'center' }}>{showerr}</div>}

                    {/* 1. Name Field */}
                    <div className="form-group">
                        <label htmlFor="name" className="form-label">Full Name</label>
                        <input 
                            value={name} 
                            type="text" 
                            onChange={(e) => setName(e.target.value)} 
                            name="name" 
                            id="name" 
                            className="form-input primary-focus" 
                            placeholder="Enter your full name" 
                        />
                    </div>

                    {/* 2. Email Field */}
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            type="email" 
                            name="email" 
                            id="email" 
                            className="form-input primary-focus" 
                            placeholder="Enter your email" 
                        />
                    </div>

                    {/* 3. Phone Field (10 digits enforced) */}
                    <div className="form-group">
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input 
                            value={phone} 
                            onChange={(e) => setPhone(e.target.value)} 
                            type="tel" 
                            name="phone" 
                            id="phone" 
                            className="form-input primary-focus" 
                            placeholder="Enter your phone number (10 digits)" 
                            maxLength="10"
                        />
                    </div>

                    {/* 4. Password Field */}
                    <div className="form-group">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            name="password" 
                            id="password" 
                            className="form-input primary-focus" 
                            type="password" 
                            placeholder="Create a password" 
                        />
                    </div>

                    <button type="submit" className="signup-button">
                        Sign Up
                    </button>
                    
                    <p className="login-text">
                        Already have an account? 
                        <Link to="/login" className="link-text signup-link">Log In</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Sign_Up;