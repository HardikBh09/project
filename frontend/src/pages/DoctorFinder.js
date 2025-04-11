import React, { useState } from 'react';
import '../styles/DoctorFinder.css';

function DoctorFinder() {
  const [searchTerm, setSearchTerm] = useState('');
  const [specialty, setSpecialty] = useState('all');

  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialty: 'General Physician',
      location: '123 Health St, Medical Center',
      distance: '0.5 miles',
      rating: 4.8,
      available: true,
      image: '👩‍⚕️'
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialty: 'Cardiologist',
      location: '456 Heart Ave, Cardiology Center',
      distance: '1.2 miles',
      rating: 4.9,
      available: true,
      image: '👨‍⚕️'
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      specialty: 'Pediatrician',
      location: '789 Kids Blvd, Children\'s Hospital',
      distance: '2.5 miles',
      rating: 4.7,
      available: false,
      image: '👩‍⚕️'
    }
  ];

  const specialties = [
    'All Specialties',
    'General Physician',
    'Cardiologist',
    'Pediatrician',
    'Dermatologist',
    'Neurologist'
  ];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = specialty === 'all' || doctor.specialty === specialty;
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="doctor-finder">
      <h1>Find a Doctor</h1>
      <p className="subtitle">Search for healthcare professionals near you</p>

      <div className="search-container">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search by name or specialty..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="specialty-filter">
          <select
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
          >
            {specialties.map((spec, index) => (
              <option key={index} value={spec === 'All Specialties' ? 'all' : spec}>
                {spec}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="doctors-list">
        {filteredDoctors.length === 0 ? (
          <div className="no-results">
            <p>No doctors found matching your criteria.</p>
          </div>
        ) : (
          filteredDoctors.map(doctor => (
            <div key={doctor.id} className="doctor-card">
              <div className="doctor-image">{doctor.image}</div>
              <div className="doctor-info">
                <h3>{doctor.name}</h3>
                <p className="specialty">{doctor.specialty}</p>
                <p className="location">{doctor.location}</p>
                <div className="doctor-details">
                  <span className="distance">📍 {doctor.distance}</span>
                  <span className="rating">⭐ {doctor.rating}</span>
                  <span className={`availability ${doctor.available ? 'available' : 'unavailable'}`}>
                    {doctor.available ? 'Available' : 'Not Available'}
                  </span>
                </div>
              </div>
              <button className="book-button">
                Book Appointment
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default DoctorFinder; 