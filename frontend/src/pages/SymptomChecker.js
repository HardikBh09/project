import React, { useState } from 'react';
import '../styles/SymptomChecker.css';

function SymptomChecker() {
  const [symptoms, setSymptoms] = useState('');
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setResults({
        conditions: [
          {
            name: 'Common Cold',
            probability: '70%',
            description: 'Viral infection of the upper respiratory tract',
            recommendations: [
              'Get plenty of rest',
              'Stay hydrated',
              'Use over-the-counter cold medications',
              'Consider seeing a doctor if symptoms persist'
            ]
          },
          {
            name: 'Seasonal Allergies',
            probability: '25%',
            description: 'Allergic reaction to environmental triggers',
            recommendations: [
              'Take antihistamines',
              'Avoid allergens',
              'Use nasal sprays',
              'Consider allergy testing'
            ]
          }
        ]
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="symptom-checker">
      <h1>Symptom Checker</h1>
      <p className="subtitle">Describe your symptoms and get AI-powered analysis</p>

      <form onSubmit={handleSubmit} className="symptom-form">
        <div className="form-group">
          <label htmlFor="symptoms">Describe your symptoms:</label>
          <textarea
            id="symptoms"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            placeholder="Example: I have been experiencing headache, fever, and fatigue for the past 2 days..."
            required
          />
        </div>

        <button type="submit" className="primary-button" disabled={loading}>
          {loading ? 'Analyzing...' : 'Analyze Symptoms'}
        </button>
      </form>

      {results && (
        <div className="results-section">
          <h2>Analysis Results</h2>
          <div className="conditions-list">
            {results.conditions.map((condition, index) => (
              <div key={index} className="condition-card">
                <h3>{condition.name}</h3>
                <div className="probability">Probability: {condition.probability}</div>
                <p className="description">{condition.description}</p>
                <div className="recommendations">
                  <h4>Recommendations:</h4>
                  <ul>
                    {condition.recommendations.map((rec, i) => (
                      <li key={i}>{rec}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default SymptomChecker; 