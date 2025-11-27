import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Sign_Up.css'; // <-- IMPORTANT: Must import the new CSS file

const SignUp = () => {
    // State for form fields
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState(''); 
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validate = () => {
        let tempErrors = {};
        let isValid = true;

        if (!name) tempErrors.name = "Full name is required.";
        if (!email) tempErrors.email = "Email is required.";
        if (!password) tempErrors.password = "Password is required.";
        if (!phone) tempErrors.phone = "Phone number is required.";
        
        if (email && !/\S+@\S+\.\S+/.test(email)) {
            tempErrors.email = "Email is not valid.";
        }

        // Validation for 10-digit phone number 
        if (phone && !/^\d{10}$/.test(phone)) {
            tempErrors.phone = "Phone number must be exactly 10 digits.";
        }
        
        setErrors(tempErrors);
        isValid = Object.keys(tempErrors).length === 0;
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log("Sign Up submitted successfully:", { name, email, phone, password });
            navigate('/login'); 
        } else {
            console.log("Sign Up validation failed.");
        }
    };

    return (
        // Using semantic class names instead of Tailwind
        <div className="signup-page">
            <div className="signup-card">
                <form onSubmit={handleSubmit} className="signup-form">
                    <h2 className="signup-title">Create Account</h2>

                    {/* Name Field */}
                    <div className="form-group">
                        <label htmlFor="name" className="form-label">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your full name"
                            className="form-input primary-focus"
                        />
                        {errors.name && <p className="error-message">{errors.name}</p>}
                    </div>

                    {/* Email Address */}
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="form-input primary-focus"
                        />
                        {errors.email && <p className="error-message">{errors.email}</p>}
                    </div>

                    {/* Phone Number (10 digits) */}
                    <div className="form-group">
                        <label htmlFor="phone" className="form-label">Phone Number (10 digits)</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="e.g. 1234567890"
                            maxLength="10"
                            className="form-input primary-focus"
                        />
                        {errors.phone && <p className="error-message">{errors.phone}</p>}
                    </div>

                    {/* Password */}
                    <div className="form-group">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Create a password"
                            className="form-input primary-focus"
                        />
                        {errors.password && <p className="error-message">{errors.password}</p>}
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
};

export default SignUp;