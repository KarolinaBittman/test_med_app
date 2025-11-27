import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config'; 
import './Login.css';

const Login = () => {

  // State variables for form data and error message
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState('');
  const [showerr, setShowerr] = useState('');
  
  // Get navigation function from react-router-dom
  const navigate = useNavigate();

  // Redirect if user is already authenticated
  useEffect(() => {
    if (sessionStorage.getItem("auth-token")) {
      navigate("/services"); 
    }
  }, [navigate]);

  // Function to handle login form submission
  const login = async (e) => {
    e.preventDefault();
    setShowerr(''); 

    try {
      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const json = await res.json();

      if (json.authtoken) {
        // Store auth token and email
        sessionStorage.setItem('auth-token', json.authtoken);
        sessionStorage.setItem('email', email);

        // --- FIXED REDIRECTION ---
        // Redirect directly to services page. This also triggers the Navbar update 
        // without a full page reload, which avoids the fallback to '/'.
        navigate('/services'); 

      } else {
        // Handle errors if authentication fails
        let errorToDisplay = "Login failed. Please check your credentials.";

        if (json.errors) {
            errorToDisplay = json.errors.map(error => error.msg).join(' ');
        } else if (json.error) {
            errorToDisplay = json.error;
        }

        setShowerr(errorToDisplay);
      }
    } catch (error) {
      console.error("Login failed:", error);
      setShowerr("A connection error occurred. Please ensure the backend is running.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-text">
          <h2 className="login-title">Welcome Back</h2>
        </div>
        <div className="signup-link-text">
          Are you a new member? 
          <span>
            <Link to="/signup" className="link-text">
              Sign Up Here
            </Link>
          </span>
        </div>
        <br />
        
        {/* Display errors (API or client-side) */}
        {showerr && <div className="error-message">{showerr}</div>}

        <div className="login-form">
          <form onSubmit={login}>
            
            {/* 1. Email Input Field */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                type="email" 
                name="email" 
                id="email" 
                className="form-input primary-focus" 
                placeholder="Enter your email" 
                required
              />
            </div>
            
            {/* 2. Password Input Field */}
            <div className="form-group">
               <label htmlFor="password">Password</label>
               <input
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                 type="password"
                 name="password"
                 id="password"
                 className="form-input primary-focus"
                 placeholder="Enter your password"
                 required
               />
             </div>

            <div className="btn-group">
              <button type="submit" className="login-button">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;