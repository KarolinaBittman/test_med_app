import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
            // Navigate to the Landing Page ('/') upon successful login
            navigate('/'); 
        } else {
            console.log("Login validation failed.");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
            <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md border border-gray-200">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <h2 className="text-3xl font-extrabold text-center text-blue-700">User Login</h2>

                    {/* Email Address */}
                    <div className="space-y-1">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>

                    {/* Password */}
                    <div className="space-y-1">
                        <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                        />
                        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                    </div>

                    <div className="flex justify-end">
                        <a href="#" className="text-sm text-blue-600 hover:underline transition duration-150">Forgot Password?</a>
                    </div>
                    
                    <button type="submit" className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        Login
                    </button>
                    
                    <p className="text-center text-sm text-gray-600 mt-4">
                        Don't have an account? 
                        <Link to="/signup" className="text-blue-600 font-bold hover:underline ml-1">Sign Up</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;