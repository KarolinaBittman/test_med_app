import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'; // <-- Import local CSS file

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validate = () => {
        let tempErrors = {};
        let isValid = true;

        if (!email) tempErrors.email = "Email is required.";
        if (!password) tempErrors.password = "Password is required.";
        
        if (email && !/\S+@\S+\.\S+/.test(email)) {
            tempErrors.email = "Email is not valid.";
        }
        
        setErrors(tempErrors);
        isValid = Object.keys(tempErrors).length === 0;
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log("Login submitted successfully:", { email, password });
            navigate('/'); 
        } else {
            console.log("Login validation failed.");
        }
    };

    return (
        // Use semantic class names instead of Tailwind
        <div className="login-page"> 
            <div className="login-card">
                <form onSubmit={handleSubmit} className="login-form">
                    <h2 className="login-title">User Login</h2>

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
                            className="form-input"
                        />
                        {errors.email && <p className="error-message">{errors.email}</p>}
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
                            placeholder="Enter your password"
                            className="form-input"
                        />
                        {errors.password && <p className="error-message">{errors.password}</p>}
                    </div>

                    <div className="forgot-password-link">
                        <a href="#" className="link-text">Forgot Password?</a>
                    </div>
                    
                    <button type="submit" className="login-button">
                        Login
                    </button>
                    
                    <p className="signup-text">
                        Don't have an account? 
                        <Link to="/signup" className="link-text signup-link">Sign Up</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;