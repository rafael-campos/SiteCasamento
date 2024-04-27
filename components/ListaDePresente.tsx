// ListaDePresentes.tsx

import React from 'react';
import { motion } from 'framer-motion';

// Interface para definir a estrutura de cada presente
interface Presente {
  imagem: string;
  nome: string;
  descricao: string;
  link: string;
  preco: string; // Adicionando o preço
}

const ListaDePresentes: React.FC = () => {
  // Framer Motion variants (unchanged from previous version)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Exemplos de presentes fictícios com preços
  const presentes: Presente[] = [
    {
      imagem: '/images/presentes/jantar.webp',
      nome: 'Jogo de Jantar de Porcelana',
      descricao: 'Um elegante jogo de jantar para 12 pessoas, perfeito para ocasiões especiais.',
      link: 'https://www.exemplo.com/jogo-de-jantar',
      preco: 'R$ 1.200,00',
    },
    {
      imagem: '/images/presentes/paris.webp',
      nome: 'Viagem Romântica para Paris',
      descricao: 'Contribua para a lua de mel dos sonhos do casal na cidade do amor.',
      link: 'https://www.exemplo.com/lua-de-mel-paris',
      preco: 'R$ 10.000,00',
    },
    {
      imagem: '/images/presentes/adega.webp',
      nome: 'Adega Climatizada',
      descricao: 'Para os amantes de vinho, uma adega climatizada para armazenar suas garrafas favoritas.',
      link: 'https://www.exemplo.com/adega-climatizada',
      preco: 'R$ 2.500,00',
    },
    {
      imagem: '/images/presentes/jantar.webp',
      nome: 'Experiência Gastronômica',
      descricao: 'Um jantar inesquecível em um restaurante renomado.',
      link: 'https://www.exemplo.com/jantar-gastronomico',
      preco: 'R$ 800,00',
    },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="bg-gray-100 py-20"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Lista de Presentes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {presentes.map((presente, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden relative"> {/* Relative para posicionar o preço */}
                <img src={presente.imagem} alt={presente.nome} className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300 ease-out" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">{presente.nome}</h3>
                  <p className="text-gray-600 text-sm">{presente.descricao}</p>
                  <a href={presente.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-blue-800 transition-colors duration-300 ease-out">
                    Saiba Mais
                  </a>
                </div>
                {/* Preço posicionado no canto superior direito */}
                <span className="absolute top-2 right-2 bg-gray-800 text-white text-sm px-2 py-1 rounded-md">
                  {presente.preco}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ListaDePresentes;