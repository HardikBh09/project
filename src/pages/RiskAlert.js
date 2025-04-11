import React, { useState } from 'react';
import '../styles/RiskAlert.css';

function RiskAlert() {
  const [alerts, setAlerts] = useState([
    {
      id: 1,
      type: 'warning',
      title: 'Sleep Deprivation',
      message: 'Your average sleep duration has been below 6 hours for the past 3 days.',
      date: '2024-04-10',
      recommendations: [
        'Try to maintain a consistent sleep schedule',
        'Avoid screens 1 hour before bedtime',
        'Consider relaxation techniques before sleep'
      ]
    },
    {
      id: 2,
      type: 'info',
      title: 'Stress Level Increase',
      message: 'Your stress levels have been increasing over the past week.',
      date: '2024-04-09',
      recommendations: [
        'Practice mindfulness meditation',
        'Take regular breaks during work',
        'Engage in physical activity'
      ]
    }
  ]);

  return (
    <div className="risk-alert">
      <h1>Risk Alert System</h1>
      <p className="subtitle">Stay informed about potential health risks</p>

      <div className="alerts-container">
        {alerts.length === 0 ? (
          <div className="no-alerts">
            <p>No current alerts. Your health metrics are within normal ranges.</p>
          </div>
        ) : (
          alerts.map(alert => (
            <div key={alert.id} className={`alert-card ${alert.type}`}>
              <div className="alert-header">
                <h3>{alert.title}</h3>
                <span className="alert-date">{alert.date}</span>
              </div>
              <p className="alert-message">{alert.message}</p>
              <div className="recommendations">
                <h4>Recommendations:</h4>
                <ul>
                  {alert.recommendations.map((rec, index) => (
                    <li key={index}>{rec}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="health-metrics">
        <h2>Health Metrics Overview</h2>
        <div className="metrics-grid">
          <div className="metric-card">
            <h3>Sleep Quality</h3>
            <div className="metric-value good">Good</div>
            <p>7.2 hours average</p>
          </div>
          <div className="metric-card">
            <h3>Stress Level</h3>
            <div className="metric-value warning">Moderate</div>
            <p>5.8/10 average</p>
          </div>
          <div className="metric-card">
            <h3>Physical Activity</h3>
            <div className="metric-value good">Good</div>
            <p>45 minutes daily</p>
          </div>
          <div className="metric-card">
            <h3>Nutrition</h3>
            <div className="metric-value info">Needs Improvement</div>
            <p>3 balanced meals</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RiskAlert; 