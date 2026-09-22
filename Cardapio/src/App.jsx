import React from 'react';
import ItemCardapio from './components/ItemCardapio';

export default function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '400px', margin: '0 auto' }}>
      <h1>Senai Delivery</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
        <ItemCardapio 
          nome="X-Bacon" 
          descricao="Pão, hambúrguer artesanal, queijo cheddar, bacon crocante e maionese da casa." 
          preco="32,90" 
        />
        <ItemCardapio 
          nome="Batata Frita" 
          descricao="Porção de batatas fritas crocantes temperadas com sal e páprica." 
          preco="18,50" 
        />
        <ItemCardapio 
          nome="Refrigerante Lata" 
          descricao="Lata de 350ml gelada (Coca-Cola, Guaraná ou Sprite)." 
          preco="6,00" 
        />
      </div>
    </div>
  );
}