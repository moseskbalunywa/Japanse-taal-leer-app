import React from 'react';
import WordCard from './WordCard';
import '@fontsource/poppins/400.css'; // Regular weight

const words = [
  { kanji: '太陽', romaji: 'Tai-yo', english: 'Sun' },
  { kanji: '学校', romaji: 'Gakkō', english: 'School' },
  { kanji: '電車', romaji: 'Densha', english: 'Train' },
  { kanji: '先生', romaji: 'Sensei', english: 'Teacher' },
];

const WordsTab = () => (
  <div className="container mt-4">

    {words.map((word, index) => (
      <WordCard key={index} word={word} />
    ))}
  </div>
);


export default WordsTab;
