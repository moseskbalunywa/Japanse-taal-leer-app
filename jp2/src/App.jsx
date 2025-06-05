import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GradientScreen from './GradientScreen';
import SignUpPage from './SignUpPage';
import HomePage from './HomePage';
import Profile from './Profile';
import Dictionary from './Dictionary'; // ✅ ADD THIS

function App() {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (showLoading) {
    return <GradientScreen />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUpPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dictionary" element={<Dictionary />} /> {/* ✅ ADD THIS */}
      </Routes>
    </Router>
  );
}

export default App;
