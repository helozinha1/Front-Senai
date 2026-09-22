import React, { useState } from 'react';
import ItemCardapio from './components/ItemCardapio';

const bancoDeDados = [
  { id: 1, nome: "X-Bacon Duplo", descricao: "Duas carnes e muito bacon.", preco: 35.00 },
  { id: 2, nome: "Pizza Calabresa", descricao: "Tamanho Média 8 pedaços.", preco: 45.00 },
  { id: 3, nome: "Suco de Laranja", descricao: "Copo 500ml natural.", preco: 8.00 },
  { id: 4, nome: "Pudim Caseiro", descricao: "Fatia caprichada com calda extra.", preco: 12.00 }
];

export default function App() {
  const [itensCarrinho, setItensCarrinho] = useState(0);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '400px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>
        <h1>Senai Delivery</h1>
        <h3>🛒 Carrinho: {itensCarrinho} itens</h3>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
        {bancoDeDados.map((item) => (
          <ItemCardapio 
            key={item.id}
            nome={item.nome} 
            descricao={item.descricao} 
            preco={item.preco} 
            adicionarItem={() => setItensCarrinho(itensCarrinho + 1)}
          />
        ))}
      </div>
    </div>
  );
}