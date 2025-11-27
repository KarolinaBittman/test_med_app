// src/App.js
import React from 'react';

// Import components for routing from react-router-dom library
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import your custom components from the Components folder
import Navbar from './Components/Navbar/Navbar'; 
import Landing_Page from './Components/Landing_Page/LandingPage'; 

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
            {/* Define the home route to display the Landing Page */}
            <Route path="/" element={<Landing_Page/>}/> 
          </Routes>
        </BrowserRouter>
    </div>
  );
}

// Export the App component as the default export
export default App;