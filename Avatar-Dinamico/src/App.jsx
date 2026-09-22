import React from 'react';
import Avatar from './components/Avatar';

export default function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Meus Avatares</h1>
      <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        <Avatar nome="Sales" fotoId="12" online={true} />
        <Avatar nome="Gaby" fotoId="32" online={false} />
        <Avatar nome="Anne" fotoId="56" online={true} />
      </div>
    </div>
  );
}