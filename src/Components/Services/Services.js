import React from 'react';

const Services = () => {
    return (
        <div style={{ padding: '20px', fontFamily: 'Inter, sans-serif' }}>
            <h1 style={{ fontSize: '2rem', color: '#1f2937', marginBottom: '15px' }}>Our Medical Services</h1>
            <p style={{ fontSize: '1.1rem', color: '#6b7280' }}>
                We offer a wide array of services designed for your convenience:
            </p>
            <ul style={{ listStyleType: 'disc', marginLeft: '20px', marginTop: '15px', color: '#374151' }}>
                <li>General Physician Consultations (In-person and Virtual)</li>
                <li>Specialist Referrals and Booking</li>
                <li>24/7 Instant Teleconsultation Support</li>
                <li>Prescription Renewal and Delivery</li>
                <li>Chronic Condition Management</li>
            </ul>
        </div>
    );
};

export default Services;