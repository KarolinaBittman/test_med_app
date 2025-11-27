// src/App.js
import React from 'react';

// Import components for routing from react-router-dom library
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import your custom components
import Navbar from './Components/Navbar/Navbar'; 
import Landing_Page from './Components/Landing_Page/LandingPage'; 
import Login from './Components/Login/Login';    // <--- Make sure this is imported
import SignUp from './Components/Sign_Up/Sign_Up'; // <--- Make sure this is imported

// Function component for the main App
// src/App.js

// ... (imports remain the same)

function App() {
    return (
      <div className="App">
          <BrowserRouter>
            <Navbar/>
  
            <Routes>
              {/* Home Route */}
              <Route path="/" element={<Landing_Page/>}/> 
              
              {/* Login Route - Cleaned Up */}
              <Route path="/login" element={<Login/>}/> 
              
              {/* Sign Up Route - Cleaned Up */}
              <Route path="/signup" element={<SignUp/>}/> 
            </Routes>
          </BrowserRouter>
      </div>
    );
  }
  
  // ... (export remains the same)

// Export the App component as the default export
export default App;