import React from 'react';
import './style.css';
import tokyoImage from './tokyo.webp';
import BottomNav from './BottomNav';

const HomePage = () => {
  return (
    <div style={{
      backgroundColor: '#fff8dc',
      minHeight: '100vh',
      maxHeight: '100vh',
      overflowY: 'auto',
      paddingBottom: '80px',
      paddingTop: '30px'
    }}>
      {/* Search Bar */}
      <div style={{
        width: '90%',
        maxWidth: '400px',
        margin: '0 auto',
        paddingTop: '20px',
        display: 'flex',
        alignItems: 'center',
        border: '2px solid #FEC300',
        borderRadius: '10px',
        padding: '10px 14px',
        backgroundColor: '#fff',
        gap: '10px'
      }}>
        <span style={{ fontSize: '18px', color: '#b0b0b0' }}>🔍</span>
        <input
          type="text"
          placeholder="Search..."
          style={{
            flex: 1,
            border: 'none',
            outline: 'none',
            fontSize: '16px',
            color: '#333'
          }}
        />
      </div>

      {/* Tokyo Image */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <img
          src={tokyoImage}
          alt="Tokyo"
          style={{
            width: '90%',
            maxWidth: '400px',
            borderRadius: '10px',
            border: '2px solid #FEC300',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}
        />
      </div>

      {/* Text Section */}
      <div style={{
        backgroundColor: 'white',
        border: '1px solid #fcd34d',
        borderRadius: '10px',
        padding: '16px',
        marginTop: '20px',
        width: '90%',
        maxWidth: '400px',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: '14px',
        lineHeight: '1.6',
        color: '#333'
      }}>
        <p>
          Looks awesome, right? You already know where that is—Tokyo, Japan! A vibrant, trendy city buzzing with energy. But Japan isn’t just skyscrapers and neon lights—it’s also home to peaceful villages, ancient temples, and breathtaking nature.
          Want to truly experience it all? Learning Japanese will make your journey smoother, whether you’re exploring on vacation or planning to stay long-term. That’s exactly why this app exists! Stop hesitating—start learning Japanese today and navigate Japan with confidence!
        </p>
      </div>

      {/* Bottom Navigation Bar */}
      <BottomNav />
    </div>
  );
};

export default HomePage;
