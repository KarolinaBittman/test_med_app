import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import all required components.
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import SignUp from './Components/Sign_Up/Sign_Up'; // FIX 1: Renamed component reference to SignUp
import Services from './Components/Services/Services';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';

// --- LAB COMPONENT IMPORTS ---
// FIX 2: Using the correct folder name for Appointment: AppointmentFormIC
import Appointment from './Components/AppointmentFormIC/AppointmentFormIC'; 
// FIX 3: Assuming InstantConsultation.js is inside the InstantConsultation folder
import InstantConsultation from './Components/InstantConsultation/InstantConsultation'; 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/appointment" element={<Appointment />} /> 
        <Route path="/instant-consultation" element={<InstantConsultation />} />
      </Routes>
    </Router>
  );
}

export default App;