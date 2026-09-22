import React from 'react';
import ItemCardapio from './components/ItemCardapio';

const bancoDeDados = [
  { id: 1, nome: "X-Bacon Duplo", descricao: "Duas carnes e muito bacon.", preco: 35.00 },
  { id: 2, nome: "Pizza Calabresa", descricao: "Tamanho Média 8 pedaços.", preco: 45.00 },
  { id: 3, nome: "Suco de Laranja", descricao: "Copo 500ml natural.", preco: 8.00 },
  { id: 4, nome: "Pudim Caseiro", descricao: "Fatia caprichada com calda extra.", preco: 12.00 }
];

export default function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '400px', margin: '0 auto' }}>
      <h1>Senai Delivery</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
        {bancoDeDados.map((item) => (
          <ItemCardapio 
            key={item.id}
            nome={item.nome} 
            descricao={item.descricao} 
            preco={item.preco} 
          />
        ))}
      </div>
    </div>
  );
}