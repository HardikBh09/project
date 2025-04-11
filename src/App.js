import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Home from './pages/Home';
import SymptomChecker from './pages/SymptomChecker';
import LifestyleLogger from './pages/LifestyleLogger';
import RiskAlert from './pages/RiskAlert';
import DoctorFinder from './pages/DoctorFinder';
import HealthTips from './pages/HealthTips';
import Navigation from './components/Navigation';
import './styles/App.css';
import './styles/Loading.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <Navigation />
          <main className="main-content">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/symptom-checker"
                element={
                  <ProtectedRoute>
                    <SymptomChecker />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/lifestyle-logger"
                element={
                  <ProtectedRoute>
                    <LifestyleLogger />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/risk-alert"
                element={
                  <ProtectedRoute>
                    <RiskAlert />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/doctor-finder"
                element={
                  <ProtectedRoute>
                    <DoctorFinder />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/health-tips"
                element={
                  <ProtectedRoute>
                    <HealthTips />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App; 