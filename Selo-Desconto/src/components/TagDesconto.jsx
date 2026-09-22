import React from 'react';

export default function TagDesconto({ porcentagem }) {
  return (
    <span style={{ backgroundColor: 'red', color: 'white', padding: '5px 10px', borderRadius: '4px', fontWeight: 'bold' }}>
      🔥 {porcentagem}% OFF
    </span>
  );
}