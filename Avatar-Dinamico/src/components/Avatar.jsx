import React from 'react';

export default function Avatar({ nome, fotoId, online }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', width: '200px', textAlign: 'center' }}>
      <img 
        src={`https://i.pravatar.cc/150?img=${fotoId}`} 
        alt={nome} 
        style={{ width: '80px', height: '80px', borderRadius: '50%' }}
      />
      <h3>{nome}</h3>
      <p style={{ color: online ? 'green' : 'gray' }}>
        {online ? '🟢 Online' : '⚪ Offline'}
      </p>
    </div>
  );
}