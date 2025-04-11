import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/Navigation.css';

const Navigation = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">HealthMate AI</Link>
      </div>
      <div className="navbar-menu">
        {user ? (
          <>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/symptom-checker" className="nav-link">Symptom Checker</Link>
            <Link to="/lifestyle-logger" className="nav-link">Lifestyle Logger</Link>
            <Link to="/risk-alert" className="nav-link">Risk Alert</Link>
            <Link to="/doctor-finder" className="nav-link">Doctor Finder</Link>
            <Link to="/health-tips" className="nav-link">Health Tips</Link>
            <div className="user-menu">
              <span className="user-name">{user.name}</span>
              <button onClick={handleLogout} className="logout-btn">Logout</button>
            </div>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/signup" className="nav-link">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navigation; 