import React from 'react';

const WordCard = ({ word, children }) => (
  <div
    className="card p-2 rounded-3"
    style={{
      border: '2px solid #FEC300',
      marginBottom: '16px',
    }}
  >
    {/* Als word aanwezig is, gebruik dat. Anders render gewoon children */}
    {word ? (
      <>
        <div className="d-flex justify-content-between align-items-center">
          <div className="fw-bold" style={{ marginLeft: '20px', fontSize: '16px' }}>{word.kanji}</div>
          <div className="d-flex align-items-center gap-2">
            <div className="fw-bold" style={{ fontSize: '16px' }}>
              {word.romaji}
            </div>
            <button
              className="btn btn-warning btn-sm rounded-circle d-flex align-items-center justify-content-center"
              style={{ width: '32px', height: '32px', fontSize: '16px' }}
            >
              🔊
            </button>
          </div>
        </div>

        <div
          className="mt-1"
          style={{
            height: '2px',
            backgroundColor: '#FEC300',
            borderRadius: '6px',
            width: '90%',
            margin: '8px auto -3px'
          }}
        ></div>

        <div className="text-muted mt-1" style={{ fontSize: '16px', marginLeft: '20px' }}>
          {word.english}
        </div>
      </>
    ) : (
      children
    )}
  </div>
);

export default WordCard;
