import React, { useState, useEffect } from 'react';
import './GradientScreen.css';

const GradientScreen = () => {
  const [animationState, setAnimationState] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Control animation sequence
    const animationInterval = setInterval(() => {
      setAnimationState((prev) => (prev + 1) % 4);
    }, 1000); // Change frame every second

    // Optional: Hide loading screen after completion
    const visibilityTimer = setTimeout(() => {
      setVisible(false);
    }, 5000); // 5 seconds total animation time (adjust as needed)

    return () => {
      clearInterval(animationInterval);
      clearTimeout(visibilityTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="loading-container">
      {/* Cream/yellow background */}
      <div className="background"></div>
      
      {/* Gradient element with animation classes */}
      <div className={`gradient-element state-${animationState}`}></div>
      
      {/* Text element - appears ONLY in frames 1 and 3 with fixed positions */}
      {animationState === 1 && (
        <div className="text-element pink-text">Furuento</div>
      )}
      
      {animationState === 3 && (
        <div className="text-element white-text">Furuento</div>
      )}
    </div>
  );
};

export default GradientScreen;