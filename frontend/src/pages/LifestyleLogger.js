import React, { useState } from 'react';
import '../styles/LifestyleLogger.css';

function LifestyleLogger() {
  const [formData, setFormData] = useState({
    sleep: '',
    water: '',
    exercise: '',
    stress: '',
    meals: '',
    notes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    alert('Lifestyle data logged successfully!');
    setFormData({
      sleep: '',
      water: '',
      exercise: '',
      stress: '',
      meals: '',
      notes: ''
    });
  };

  return (
    <div className="lifestyle-logger">
      <h1>Lifestyle Logger</h1>
      <p className="subtitle">Track your daily health activities</p>

      <form onSubmit={handleSubmit} className="lifestyle-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="sleep">Sleep (hours)</label>
            <input
              type="number"
              id="sleep"
              name="sleep"
              value={formData.sleep}
              onChange={handleChange}
              min="0"
              max="24"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="water">Water Intake (glasses)</label>
            <input
              type="number"
              id="water"
              name="water"
              value={formData.water}
              onChange={handleChange}
              min="0"
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="exercise">Exercise (minutes)</label>
            <input
              type="number"
              id="exercise"
              name="exercise"
              value={formData.exercise}
              onChange={handleChange}
              min="0"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="stress">Stress Level (1-10)</label>
            <input
              type="number"
              id="stress"
              name="stress"
              value={formData.stress}
              onChange={handleChange}
              min="1"
              max="10"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="meals">Meals</label>
          <textarea
            id="meals"
            name="meals"
            value={formData.meals}
            onChange={handleChange}
            placeholder="Describe your meals for the day..."
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="notes">Additional Notes</label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Any other health-related notes..."
          />
        </div>

        <button type="submit" className="primary-button">
          Log Daily Activities
        </button>
      </form>

      <div className="stats-section">
        <h2>Your Weekly Stats</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <h3>Average Sleep</h3>
            <p>7.2 hours</p>
          </div>
          <div className="stat-card">
            <h3>Water Intake</h3>
            <p>6.5 glasses/day</p>
          </div>
          <div className="stat-card">
            <h3>Exercise</h3>
            <p>45 minutes/day</p>
          </div>
          <div className="stat-card">
            <h3>Stress Level</h3>
            <p>4.2/10</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LifestyleLogger; 