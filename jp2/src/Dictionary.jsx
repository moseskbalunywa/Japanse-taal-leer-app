import React, { useState } from 'react';
import DictionaryComponent from './DictionaryComponent';
import WordsTab from './WordsTab';
import PhrasesTab from './PhrasesTab';
import HistoryTab from './HistoryTab';
import BottomNav from './BottomNav';

const Dictionary = () => {
  const [activeTab, setActiveTab] = useState('Words');

  const renderContent = () => {
    switch (activeTab) {
      case 'Words':
        return <WordsTab />;
      case 'Phrases':
        return <PhrasesTab />;
      case 'History':
        return <HistoryTab />;
      default:
        return null;
    }
  };

  return (
    <div style={{
      backgroundColor: '#FFF9C4',
      minHeight: '100vh',
      maxHeight: '100vh',
      overflowY: 'auto',
      paddingTop: '30px',
      paddingBottom: '100px'
    }}>
      <style>{`::-webkit-scrollbar { display: none; }`}</style>

      <div style={{
        width: '100%',
        maxWidth: '400px',
        margin: '0 auto',
        padding: '20px'
      }}>
        <DictionaryComponent activeTab={activeTab} setActiveTab={setActiveTab} />
        {renderContent()}
      </div>

      <BottomNav />
    </div>
  );
};

export default Dictionary;
