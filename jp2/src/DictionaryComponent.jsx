import React from 'react';

const DictionaryComponent = ({ activeTab, setActiveTab }) => {
  const tabs = ['Words', 'Phrases', 'History'];

  return (
    <div style={{ textAlign: 'center', paddingTop: '30px' }}>
      <h2 style={{
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 400,
        fontSize: '20px',
        color: '#3C3C3C',
        textAlign: 'center',
        marginTop: '20px'
      }}>
        My dictionary
      </h2>

      {/* Container for tabs */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around', // Distributes items evenly
          alignItems: 'center',
          width: '100%', // Ensure it spans the full width
          marginTop: '20px',
        }}
      >
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              background: 'none',
              border: 'none',
              fontWeight: 'bold',
              fontSize: '16px',
              cursor: 'pointer',
              color: '#000',
              padding: '8px 1px', // Add some padding for better appearance
              borderBottom: activeTab === tab ? '2px solid #FE00B7' : 'none', // Highlight active tab
            }}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DictionaryComponent;