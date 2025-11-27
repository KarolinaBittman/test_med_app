import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'Inter, sans-serif' }}>
            <header style={{ backgroundColor: '#f9f9f9', padding: '40px', borderRadius: '12px', marginBottom: '30px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                <h1 style={{ fontSize: '2.5rem', color: '#1f2937', marginBottom: '10px' }}>Welcome to Medi-Connect</h1>
                <p style={{ fontSize: '1.2rem', color: '#6b7280' }}>Your portal for easy appointment booking and instant consultations.</p>
            </header>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                <Link 
                    to="/appointment" 
                    style={{ 
                        padding: '15px 30px', 
                        backgroundColor: '#10b981', 
                        color: 'white', 
                        textDecoration: 'none', 
                        borderRadius: '8px',
                        fontWeight: '600',
                        boxShadow: '0 4px 8px rgba(16, 185, 129, 0.3)',
                        transition: 'background-color 0.3s'
                    }}
                >
                    Book Appointment
                </Link>
                <Link 
                    to="/instant-consultation" 
                    style={{ 
                        padding: '15px 30px', 
                        backgroundColor: '#f59e0b', 
                        color: 'white', 
                        textDecoration: 'none', 
                        borderRadius: '8px',
                        fontWeight: '600',
                        boxShadow: '0 4px 8px rgba(245, 158, 11, 0.3)',
                        transition: 'background-color 0.3s'
                    }}
                >
                    Instant Help
                </Link>
            </div>
        </div>
    );
};

export default Home;