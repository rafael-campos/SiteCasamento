import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link'; // Importe o Link do Next.js

// Interface para definir a estrutura de cada presente
interface Presente {
  id: string; // Adicione a propriedade id
  imagem: string;
  nome: string;
  descricao: string;
  preco: string;
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

  // Exemplos de presentes fictícios com preços e IDs
  const presentes: Presente[] = [
    {
      id: '1',
      imagem: '/images/presentes/jantar.webp',
      nome: 'Jogo de Jantar de Porcelana',
      descricao: 'Um elegante jogo de jantar para 12 pessoas, perfeito para ocasiões especiais.',
      preco: 'R$ 1.200,00',
    },
    {
      id: '2',
      imagem: '/images/presentes/paris.webp',
      nome: 'Viagem Romântica para Paris',
      descricao: 'Contribua para a lua de mel dos sonhos do casal na cidade do amor.',
      preco: 'R$ 10.000,00',
    },
    {
      id: '3',
      imagem: '/images/presentes/adega.webp',
      nome: 'Adega Climatizada',
      descricao: 'Para os amantes de vinho, uma adega climatizada para armazenar suas garrafas favoritas.',
      preco: 'R$ 2.500,00',
    },
    {
      id: '4',
      imagem: '/images/presentes/jantar.webp',
      nome: 'Experiência Gastronômica',
      descricao: 'Um jantar inesquecível em um restaurante renomado.',
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
              <Link href={`/${presente.id}`} passHref> {/* Link para a página do presente */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden relative cursor-pointer">
                  {/* Relative para posicionar o preço */}
                  <img 
                    src={presente.imagem} 
                    alt={presente.nome} 
                    className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300 ease-out" 
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">{presente.nome}</h3>
                    <p className="text-gray-600 text-sm">{presente.descricao}</p>
                  </div>

                  {/* Preço posicionado no canto superior direito */}
                  <span className="absolute top-2 right-2 bg-gray-800 text-white text-sm px-2 py-1 rounded-md">
                    {presente.preco}
                  </span>
                </div>
              </Link> 
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ListaDePresentes;