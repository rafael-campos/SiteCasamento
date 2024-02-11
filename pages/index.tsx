import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    return () => { };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-hero">
      <div className="mx-auto">
        <div className="bg-white p-6 border-4 border-blue-500 text-center rounded-xl relative">
          <img
            src="/img/logo.png"
            alt="Logo"
            className="mx-auto mb-2"
            style={{ width: '90px', height: '90px' }}
          />
          <h1 className="text-4xl text-black font-bold mb-2">Mirelle </h1>
          <h1 className="text-4xl text-black font-bold mb-2">& </h1>
          <h1 className="text-4xl text-black font-bold mb-2">Rafael </h1>
          <h2 className="text-2xl mb-2">24/08/24</h2>
          <p className="mb-4 text-black">Bem-vindo ao nosso site de casamento! Estamos muito felizes <br /> e queremos compartilhar nossa alegria com vocês</p>
          <button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-900 text-white font-bold py-2 px-4 rounded">
            Confirmar Presença  
          </button>
        </div>
      </div>
    </div>
  );
}
