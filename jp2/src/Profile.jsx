import React from 'react';
import BottomNav from './BottomNav';

const Profile = () => {
  return (
    <div style={{
      background: 'linear-gradient(to bottom, #fe00b7 0%, #e90fc6 9%, #d21ed6 19%, #b830e8 30%, #9747ff 44%)',
      minHeight: '100vh',
      position: 'relative',
    }}>
      {/* Hidden Scrollbar Style (WebKit) */}
      <style>{`::-webkit-scrollbar { display: none; }`}</style>

      {/* Scrollable content */}
      <div style={{
        width: '100%',
        maxWidth: '400px',
        margin: '0 auto',
        paddingTop: '20px',
        color: '#000',
        fontFamily: 'sans-serif',
        overflowY: 'scroll',
        maxHeight: 'calc(100vh - 80px)',
        paddingBottom: '100px',
        scrollbarWidth: 'none',     // Firefox
        msOverflowStyle: 'none',    // IE/Edge
      }}>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '80px', padding: '0 5%' }}>
          <h2 style={{ fontWeight: 'bold', textAlign: 'left', margin: 0 }}>Profile</h2>
          <div style={{ position: 'relative' }}>
            <span role="img" aria-label="notifications">🔔</span>
            <span style={{
              position: 'absolute',
              top: -8,
              right: -8,
              backgroundColor: 'red',
              borderRadius: '50%',
              color: 'white',
              fontSize: '10px',
              padding: '2px 5px'
            }}>1</span>
          </div>
        </div>

        {/* Profile Box */}
        <div style={cardStyle}>
          <div style={{ textAlign: 'center', marginBottom: '10px' }}>
            <div style={{
              width: '70px',
              height: '70px',
              borderRadius: '50%',
              backgroundColor: '#ddd',
              margin: '0 auto',
              fontSize: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              👤
            </div>
            <h3 style={{ margin: '10px 0', fontWeight: 'bold', fontSize: '20px' }}>Jacob</h3>
          </div>
          <EditIcon />
        </div>

        {/* Motivation Box */}
        <div style={cardStyle}>
          <p><strong style={{ fontSize: '20px' }}>Motivation</strong></p>
          <p>My dream would be to live in Japan. So that’s why I’m learning Japanese. So everything will go smoothly.</p>
          <EditIcon />
        </div>

        {/* User Info */}
        <div style={cardStyle}>
          <p><strong style={{ fontSize: '20px' }}>User information</strong><br />
            Gender: Male<br />
            Age: 20<br />
            Date of birth: 23/04/2004<br />
            Mobile: 7238427257<br />
            Email: Eg@eg.com</p>
          <EditIcon />
        </div>

        {/* Completion Box */}
        <div style={{
          ...cardStyle,
          backgroundColor: '#FFE17E',
          position: 'relative',
          padding: '20px',
          display: 'flex',
          alignItems: 'center',
        }}>
          <div style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer', fontWeight: 'bold' }}>
            ❌
          </div>
          <div style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: '#fff',
            border: '5px solid #ff00cc',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            fontSize: '14px'
          }}>
            66%
          </div>
          <div style={{ marginLeft: '16px', flex: 1 }}>
            <p style={{ fontWeight: 'bold', margin: '0 0 4px', fontSize: '16px' }}>Complete your profile</p>
            <p style={{ margin: 0, fontSize: '14px' }}>Fill in 3 steps missing and complete your profile</p>
            <button style={{
              marginTop: '10px',
              backgroundColor: '#8B5CF6',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              padding: '6px 20px',
              fontWeight: 'bold'
            }}>Continue</button>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <BottomNav />
    </div>
  );
};

const EditIcon = () => (
  <div style={{
    position: 'absolute',
    top: '50%',
    right: '12px',
    transform: 'translateY(-50%)',
    cursor: 'pointer'
  }}>
    ✏️
  </div>
);

const cardStyle = {
  backgroundColor: 'white',
  borderRadius: '12px',
  padding: '16px',
  margin: '16px 5%',
  position: 'relative'
};

export default Profile;
