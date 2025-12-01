import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FindDoctorSearch.css';

// Mock list of specialties for demonstration
const mockSpecialties = [
  'General Physician',
  'Pediatrician',
  'Dermatologist',
  'Cardiologist',
  'Neurologist',
  'Orthopedic Surgeon',
];

const FindDoctorSearch = () => {
  const [searchLocation, setSearchLocation] = useState('');
  const [searchSpeciality, setSearchSpeciality] = useState('');
  const [showSpecialties, setShowSpecialties] = useState(false); // State to control the dropdown visibility
  
  // State to hold the list of filtered specialties
  const [filteredSpecialties, setFilteredSpecialties] = useState(mockSpecialties);

  const navigate = useNavigate();

  // -----------------------------------------------------------
  // Search Handling
  // -----------------------------------------------------------
  
  const handleSearch = (e) => {
    e.preventDefault();
    // In a real app, this would trigger an API call.
    // Here, we just log and navigate (if needed)
    console.log(`Searching in: ${searchLocation}, for: ${searchSpeciality}`);
    
    // Example: Navigate to the /appointment route or results page
    // navigate('/appointment', { state: { speciality: searchSpeciality, location: searchLocation } });
  };

  const handleSpecialtyChange = (e) => {
    const value = e.target.value;
    setSearchSpeciality(value);
    
    // Filter specialties based on input
    const filtered = mockSpecialties.filter(specialty =>
      specialty.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredSpecialties(filtered);
    setShowSpecialties(true); 
  };
  
  // -----------------------------------------------------------
  // Focus/Blur Implementation (The Core Requirement)
  // -----------------------------------------------------------

  // Show the list when the input field gets focus
  const handleFocus = () => {
    // Only show if the list is not already visible and input is not empty
    if (searchSpeciality.trim() !== '') {
      setShowSpecialties(true);
    }
  };

  // Hide the list when the input loses focus (after a brief delay 
  // to allow click on a suggestion)
  const handleBlur = () => {
    // We use a timeout to delay hiding, giving the user a chance to click a suggestion
    setTimeout(() => {
      setShowSpecialties(false);
    }, 200); 
  };
  
  // Select a specialty from the list
  const handleSpecialtySelect = (specialty) => {
    setSearchSpeciality(specialty);
    setShowSpecialties(false); // Hide the list after selection
  };


  return (
    <div className="doctor-search-container">
      <form onSubmit={handleSearch} className="search-form">
        <h1>Find and Book Your Appointment</h1>
        
        {/* Location Search Input */}
        <div className="input-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            placeholder="Enter location (e.g., New Delhi)"
            value={searchLocation}
            onChange={(e) => setSearchLocation(e.target.value)}
          />
        </div>

        {/* Specialty Search Input with Dropdown */}
        <div className="input-group speciality-search-container">
          <label htmlFor="speciality">Doctor Speciality</label>
          <input
            type="text"
            id="speciality"
            placeholder="Search by specialty (e.g., Cardiologist)"
            value={searchSpeciality}
            onChange={handleSpecialtyChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            autoComplete="off"
          />
          
          {/* List of Doctor Specialties (Displayed/Hidden by onFocus/onBlur) */}
          {showSpecialties && filteredSpecialties.length > 0 && (
            <ul className="specialty-dropdown">
              {filteredSpecialties.map((specialty, index) => (
                <li 
                  key={index} 
                  // Use onMouseDown instead of onClick for selection with onBlur
                  onMouseDown={() => handleSpecialtySelect(specialty)} 
                  className="dropdown-item"
                >
                  {specialty}
                </li>
              ))}
            </ul>
          )}
        </div>
        
        <button type="submit" className="search-button">
          Search Doctors
        </button>
      </form>
    </div>
  );
};

export default FindDoctorSearch;