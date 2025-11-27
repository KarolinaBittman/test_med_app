import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import all required components. Paths should now be correct.
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Sign_Up from './Components/Sign_Up/Sign_Up'; 
import Services from './Components/Services/Services';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';

// --- FIXED IMPORT ---
// 1. Using the correct folder name: AppointmentFormIC
// 2. Importing the component (assuming the file inside is Appointment.js)
import Appointment from './Components/AppointmentFormIC/AppointmentFormIC'; 

// --- FIXED IMPORT ---
// 3. The InstantConsultation component file is outside its own folder, directly in src/Components/
import InstantConsultation from './Components/InstantConsultation'; 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Sign_Up />} />
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