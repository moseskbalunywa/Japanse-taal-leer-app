import React from 'react';
import WordCard from './WordCard';
import AudioButton from './AudioButton';

const phrases = [
  {
    jp: 'チェックインをお願いします。',
    romaji: 'Chekkuin o onegaishimasu.',
    en: "I’d like to check in, please."
  },
  {
    jp: '搭乗口はどこですか？',
    romaji: 'Tōjōguchi wa doko desu ka?',
    en: 'Where is the boarding gate?'
  },
  {
    jp: 'この荷物を預けられますか？',
    romaji: 'Kono nimotsu o azukeraremasu ka?',
    en: 'Can I check in this luggage?'
  },
  {
    jp: '税関はどこですか？',
    romaji: 'Zeikan wa doko desu ka?',
    en: 'Where is customs?'
  },
];

const PhrasesTab = () => (
  <div style={{ marginTop: '20px', textAlign: 'center' }}>
    <h2 style={{ textAlign: 'center', fontWeight: '700', fontSize: '20px' }}>Most used phrases</h2>
    <h3 style={{ textAlign: 'center', fontWeight: '700', fontSize: '20px' }}>Airport</h3>
    <p>🛬🧳🚶‍♂️👋🏼👋🏼</p>

    <WordCard>
      {phrases.map((phrase, index) => (
  <div key={index} className="d-flex justify-content-between align-items-center mb-3">
    <div style={{ textAlign: 'left', fontSize: '18px', fontWeight: 'bold', lineHeight: '1.4' }}>
      <div>{phrase.jp}</div>
      <div>{phrase.romaji}</div>
      <div>{phrase.en}</div>
    </div>
    <div style={{ marginLeft: '10px', marginTop: '5px' }}>
      <AudioButton />
    </div>
  </div>
))}
    </WordCard>
  </div>
);

export default PhrasesTab;
