import React, { useState } from 'react';

export default function App() {
  const [curtidas, setCurtidas] = useState(0);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
      <h1>Estado da Interface </h1>
      <p style={{ fontSize: '1.2rem', margin: '20px 0' }}>{curtidas} pessoas curtiram isso!</p>
      <button 
        onClick={() => setCurtidas(curtidas + 1)}
        style={{ padding: '10px 20px', fontSize: '1rem', cursor: 'pointer', backgroundColor: '#e3000f', color: 'white', border: 'none', borderRadius: '5px' }}
      >
        Curtir ❤️
      </button>
    </div>
  );
}