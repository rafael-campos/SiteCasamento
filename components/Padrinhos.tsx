import React from 'react';

// Lista de padrinhos e madrinhas (substitua pelos nomes reais)
const listaDePadrinhos = [
  { nomePadrinho: 'João', nomeMadrinha: 'Maria' },
  { nomePadrinho: 'Pedro', nomeMadrinha: 'Ana' },
  { nomePadrinho: 'Lucas', nomeMadrinha: 'Carla' },
  { nomePadrinho: 'Marcos', nomeMadrinha: 'Laura' },
  { nomePadrinho: 'Rafael', nomeMadrinha: 'Isabela' },
  { nomePadrinho: 'Gustavo', nomeMadrinha: 'Fernanda' },
  { nomePadrinho: 'Daniel', nomeMadrinha: 'Camila' },
  { nomePadrinho: 'Thiago', nomeMadrinha: 'Juliana' },
  // Adicione mais casais aqui
];

const Padrinhos: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">Padrinhos & Madrinhas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {listaDePadrinhos.map((casal, index) => (
            <div key={index} className="bg-blue-200 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold">{casal.nomePadrinho}</h3>
              <p className="text-md text-gray-600">&</p>
              <h3 className="text-xl font-semibold">{casal.nomeMadrinha}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Padrinhos;
