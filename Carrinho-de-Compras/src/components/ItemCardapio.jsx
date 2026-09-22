import React from 'react';

export default function ItemCardapio({ nome, descricao, preco, adicionarItem }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', marginBottom: '10px' }}>
      <h2 style={{ margin: '0 0 5px 0' }}>{nome}</h2>
      <p style={{ margin: '0 0 10px 0', color: '#666' }}>{descricao}</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontWeight: 'bold', color: 'green' }}>R$ {preco.toFixed(2)}</span>
        <button 
          onClick={adicionarItem}
          style={{ padding: '8px 12px', cursor: 'pointer', backgroundColor: '#e3000f', color: 'white', border: 'none', borderRadius: '5px' }}
        >
          + Adicionar
        </button>
      </div>
    </div>
  );
}