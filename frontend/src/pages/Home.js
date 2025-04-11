import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const features = [
  {
    id: 1,
    title: 'Symptom Checker',
    description: 'Get AI-powered analysis of your symptoms and potential health conditions',
    icon: '🩺',
    path: '/symptom-checker'
  },
  {
    id: 2,
    title: 'Lifestyle Logger',
    description: 'Track your daily activities, sleep, water intake, and stress levels',
    icon: '📊',
    path: '/lifestyle-logger'
  },
  {
    id: 3,
    title: 'Early Risk Alert',
    description: 'Receive timely alerts about potential health risks based on your data',
    icon: '🚨',
    path: '/risk-alert'
  },
  {
    id: 4,
    title: 'Doctor Finder',
    description: 'Find nearby healthcare professionals based on your needs',
    icon: '👨‍⚕️',
    path: '/doctor-finder'
  },
  {
    id: 5,
    title: 'Health Tips',
    description: 'Get personalized health recommendations based on your profile',
    icon: '💡',
    path: '/health-tips'
  }
];

function Home() {
  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Welcome to HealthMate AI</h1>
        <p>Your personal health companion powered by artificial intelligence</p>
      </header>

      <section className="features-section">
        <h2>Our Features</h2>
        <div className="features-grid">
          {features.map((feature) => (
            <Link to={feature.path} key={feature.id} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <h2>Start Your Health Journey Today</h2>
        <p>Join thousands of users who are taking control of their health with AI</p>
        <Link to="/symptom-checker" className="cta-button">
          Get Started
        </Link>
      </section>
    </div>
  );
}

export default Home; 