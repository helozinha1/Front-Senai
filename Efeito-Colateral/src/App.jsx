import React, { useState, useEffect } from 'react';

export default function App() {
  const [notificacoes, setNotificacoes] = useState(0);

  useEffect(() => {
    document.title = "Mensagens: " + notificacoes;
  }, [notificacoes]);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
      <h1>Efeito Colateral </h1>
      <p style={{ fontSize: '1.2rem', margin: '20px 0' }}>Notificações: {notificacoes}</p>
      <button 
        onClick={() => setNotificacoes(notificacoes + 1)}
        style={{ padding: '12px 20px', fontSize: '1rem', cursor: 'pointer', backgroundColor: '#581cee', color: 'white', border: 'none', borderRadius: '5px' }}
      >
        Receber Mensagem
      </button>
    </div>
  );
}