import React, { useState, useEffect } from 'react';
import ItemCardapio from './components/ItemCardapio';

export default function App() {
  const [itensCarrinho, setItensCarrinho] = useState(0);
  const [cardapio, setCardapio] = useState([]);

  useEffect(() => {
    console.log("Conectando ao servidor...");
    setTimeout(() => {
      setCardapio([
        { id: 101, nome: "Combo Master", descricao: "Dois lanches + refri 2L", preco: 65.00 },
        { id: 102, nome: "Hambúrguer de Grão de Bico", descricao: "Opção Vegana", preco: 28.00 },
        { id: 103, nome: "Açaí na Tigela", descricao: "500ml com morango e leite condensado", preco: 18.00 }
      ]);
    }, 2000);
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '400px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>
        <h1>Senai Delivery</h1>
        <h3>🛒 Carrinho: {itensCarrinho} itens</h3>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
        {cardapio.length === 0 ? (
          <h2 style={{ textAlign: 'center', color: '#666' }}>🔄 Carregando restaurante...</h2>
        ) : (
          cardapio.map((item) => (
            <ItemCardapio 
              key={item.id}
              nome={item.nome} 
              descricao={item.descricao} 
              preco={item.preco} 
              adicionarItem={() => setItensCarrinho(itensCarrinho + 1)}
            />
          ))
        )}
      </div>
    </div>
  );
}