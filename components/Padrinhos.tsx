import React from 'react';
import { FaHeart } from 'react-icons/fa'; // Importando ícone de coração

// Lista de padrinhos e madrinhas
const listaDePadrinhos = [
  { nomePadrinho: 'João', nomeMadrinha: 'Cris' },
  { nomePadrinho: 'Amanda', nomeMadrinha: 'Caio' },
  { nomePadrinho: 'Thamires', nomeMadrinha: 'Henrique' },
  { nomePadrinho: 'Maria Clara', nomeMadrinha: 'Bruno' },
  { nomePadrinho: 'Juliemerson', nomeMadrinha: 'Rafaela' },
  { nomePadrinho: 'Luiz', nomeMadrinha: 'Neide' },
  { nomePadrinho: 'Monica', nomeMadrinha: 'Zé' },
  { nomePadrinho: 'Isabel', nomeMadrinha: 'Tony' },
  { nomePadrinho: 'Madson', nomeMadrinha: 'Yasmin' },
  { nomePadrinho: 'Alexey', nomeMadrinha: 'Flavia' },
  { nomePadrinho: 'Leticia', nomeMadrinha: 'William' },
  { nomePadrinho: 'Ewerton', nomeMadrinha: 'Priscila' },
  { nomePadrinho: 'Welton', nomeMadrinha: 'Nicole' },
  { nomePadrinho: 'Danyane', nomeMadrinha: 'Jonas' },
  { nomePadrinho: 'Ruan', nomeMadrinha: 'Joice' },
  { nomePadrinho: 'Ygor', nomeMadrinha: 'Camila' },
  { nomePadrinho: 'Olavo', nomeMadrinha: 'Gilma' },
  { nomePadrinho: 'Karine', nomeMadrinha: 'Douglas' },
  { nomePadrinho: 'Juliano', nomeMadrinha: 'Marly' },
  // Adicione mais casais aqui se necessário
];

const Padrinhos: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 text-blue-600">Padrinhos & Madrinhas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {listaDePadrinhos.map((casal, index) => (
            <div key={index} className="bg-[#E2E8F4] p-6 rounded-lg shadow-lg text-center">
              <FaHeart className="text-blue-500 mx-auto text-6xl" />
              <h3 className="text-xl font-semibold mt-4">{casal.nomePadrinho}</h3>
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
