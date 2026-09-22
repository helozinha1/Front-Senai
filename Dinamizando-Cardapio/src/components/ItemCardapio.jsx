import React from 'react';

export default function ItemCardapio({ nome, descricao, preco }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', marginBottom: '10px' }}>
      <h2 style={{ margin: '0 0 5px 0' }}>{nome}</h2>
      <p style={{ margin: '0 0 10px 0', color: '#666' }}>{descricao}</p>
      <span style={{ fontWeight: 'bold', color: 'green' }}>R$ {preco.toFixed(2)}</span>
    </div>
  );
}