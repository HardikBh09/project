import React, { useState } from 'react';
import '../styles/HealthTips.css';

function HealthTips() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    'All Categories',
    'Nutrition',
    'Exercise',
    'Mental Health',
    'Sleep',
    'Prevention'
  ];

  const tips = [
    {
      id: 1,
      category: 'Nutrition',
      title: 'Balanced Diet Tips',
      content: 'Include a variety of fruits, vegetables, whole grains, and lean proteins in your daily meals. Try to limit processed foods and added sugars.',
      image: '🥗'
    },
    {
      id: 2,
      category: 'Exercise',
      title: 'Daily Movement',
      content: 'Aim for at least 30 minutes of moderate exercise daily. This can include walking, cycling, or any activity you enjoy.',
      image: '🏃‍♂️'
    },
    {
      id: 3,
      category: 'Mental Health',
      title: 'Stress Management',
      content: 'Practice mindfulness meditation for 10 minutes daily. This can help reduce stress and improve overall well-being.',
      image: '🧘‍♀️'
    },
    {
      id: 4,
      category: 'Sleep',
      title: 'Sleep Hygiene',
      content: 'Maintain a consistent sleep schedule. Avoid screens before bedtime and create a relaxing pre-sleep routine.',
      image: '😴'
    },
    {
      id: 5,
      category: 'Prevention',
      title: 'Regular Check-ups',
      content: 'Schedule regular health check-ups and screenings. Early detection of health issues can lead to better outcomes.',
      image: '🩺'
    }
  ];

  const filteredTips = selectedCategory === 'all'
    ? tips
    : tips.filter(tip => tip.category === selectedCategory);

  return (
    <div className="health-tips">
      <h1>Personalized Health Tips</h1>
      <p className="subtitle">Get customized health recommendations based on your profile</p>

      <div className="category-filter">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category, index) => (
            <option key={index} value={category === 'All Categories' ? 'all' : category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="tips-grid">
        {filteredTips.map(tip => (
          <div key={tip.id} className="tip-card">
            <div className="tip-image">{tip.image}</div>
            <div className="tip-content">
              <span className="category-badge">{tip.category}</span>
              <h3>{tip.title}</h3>
              <p>{tip.content}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="personalized-section">
        <h2>Your Personalized Recommendations</h2>
        <div className="recommendation-card">
          <h3>Based on your lifestyle data:</h3>
          <ul>
            <li>Increase water intake to 8 glasses per day</li>
            <li>Add 15 minutes of stretching to your daily routine</li>
            <li>Try to get 7-8 hours of sleep consistently</li>
            <li>Consider adding more leafy greens to your diet</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HealthTips; 