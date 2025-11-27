import React from 'react';

// Import components for routing from react-router-dom library
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import your custom components from the Components folder (existing)
import Navbar from './Components/Navbar/Navbar'; 
import Landing_Page from './Components/Landing_Page/LandingPage'; 

// Import the new Login and SignUp components 
import Login from './Components/Login/Login.jsx'; 
import SignUp from './Components/Sign_Up/SignUp.jsx'; 


// Function component for the main App
function App() {

  // Render the main App component
  return (
    <div className="App">
        {/* Set up BrowserRouter for routing */}
        <BrowserRouter>
          {/* Display the Navbar component on every page */}
          <Navbar/>

          {/* Set up the Routes for different pages */}
          <Routes>
            {/* Define the home route to display the Landing Page (existing) */}
            <Route path="/" element={<Landing_Page/>}/> 
            
            {/* Define the Login route */}
            <Route path="/login" element={<Login/>}/> 

            {/* Define the Sign Up route */}
            <Route path="/signup" element={<SignUp/>}/> 
          </Routes>
        </BrowserRouter>
    </div>
  );
}

// Export the App component as the default export
export default App;