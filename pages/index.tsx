import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-hero">
      <div className="mx-auto">
        <div className="container bg-white p-8 border border-yellow-50 text-center">
          <h1 className="text-4xl font-bold mb-2">Mirelle </h1>
          <h1 className="text-4xl font-bold mb-2">& </h1>
          <h1 className="text-4xl font-bold mb-2">Rafael </h1>
          <h2 className="text-2xl mb-2">24/08/24</h2>
          <p className="mb-4">Bem-vindo ao nosso site de casamento! Estamos muito felizes <br/> e contamos com a presença de todos no nosso grande dia!</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Confirme sua Presença
          </button>
        </div>
      </div>  
    </div>
  );
}
