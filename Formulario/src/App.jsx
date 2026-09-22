import React, { useState } from 'react';

export default function App() {
  const [texto, setTexto] = useState("");

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
      <h1> Controle de Formulários </h1>
      <input 
        type="text" 
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Digite algo..."
        style={{ padding: '10px', width: '100%', fontSize: '1rem', marginBottom: '20px', boxSizing: 'border-box' }}
      />
      <p style={{ fontSize: '1.2rem' }}>Você digitou: {texto}</p>
    </div>
  );
}