import React from 'react';
import TagDesconto from './components/TagDesconto';

export default function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Atividade 02: O Selo de Desconto 🏷️</h1>
      <div style={{ display: 'flex', gap: '20px', marginTop: '20px', alignItems: 'center' }}>
        <TagDesconto porcentagem="20" />
        <TagDesconto porcentagem="50" />
      </div>
    </div>
  );
}