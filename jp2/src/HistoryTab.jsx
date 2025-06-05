import React from 'react';
import WordCard from './WordCard';
import BottomNav from './BottomNav';

const HistoryTab = () => (
  <div style={{ marginTop: '20px', textAlign: 'center' }}>
    <h3 style={{ marginBottom: '30px' }}>The Secret World of Ninjas</h3>
    <WordCard>
      <p style={{ textAlign: 'left' }}>
        Ninjas, also known as shinobi, were covert agents in feudal Japan, specializing in espionage, sabotage,
        and assassination. Unlike samurai, who followed a strict code of honor, ninjas were masters of deception,
        disguise, and guerrilla warfare. Their origins trace back to the Iga and Kōga regions, where specialized
        schools trained warriors in stealth tactics. Ninja used various tools such as shuriken (throwing stars),
        kunai (dagger-like weapons), and smoke bombs to complete their missions. Though they were often feared and
        considered dishonorable by samurai standards, ninjas played a crucial role in intelligence gathering and
        shaping Japan’s political landscape.
      </p>
    </WordCard>
  </div>
);

export default HistoryTab;
