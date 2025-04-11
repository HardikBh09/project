import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div className="nav-container">
        <Link to="/" className="logo">
          HealthMate AI
        </Link>
        <div className="nav-links">
          <Link to="/symptom-checker">Symptom Checker</Link>
          <Link to="/lifestyle-logger">Lifestyle Logger</Link>
          <Link to="/risk-alert">Risk Alert</Link>
          <Link to="/doctor-finder">Doctor Finder</Link>
          <Link to="/health-tips">Health Tips</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 