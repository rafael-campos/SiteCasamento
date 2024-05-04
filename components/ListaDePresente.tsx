import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Interface para definir a estrutura de cada presente
interface Presente {
  id: string;
  imagem: string;
  nome: string;
  descricao: string;
  preco: string;
}

const ListaDePresentes: React.FC = () => {
  // Framer Motion variants
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
      imagem: '/images/presentes/microondas.webp',
      nome: 'Microndas',
      descricao: 'Não tem como hoje em dia ficar sem Micro-ondas não é mesmo?',
      preco: 'R$ 667,00',
    },
    {
      id: '2',
      imagem: '/images/presentes/jantar.webp',
      nome: 'Viagem Romântica para Paris',
      descricao: 'Contribua para a lua de mel dos sonhos do casal na cidade do amor.',
      preco: 'R$ 10.000,00',
    },
    {
      id: '3',
      imagem: '/images/presentes/jantar.webp',
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
    // Adicione mais presentes conforme necessário
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
          {presentes.map((presente) => (
            <motion.div key={presente.id} variants={itemVariants} className="flex flex-col h-full">
              <div className="bg-white rounded-3xl shadow-md overflow-hidden relative flex flex-col justify-between h-full p-4">
                <img
                  src={presente.imagem}
                  alt={presente.nome}
                  className="w-full h-48  p-2 object-cover"
                />
                <div className="p-4 flex-grow">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">{presente.nome}</h3>
                  <p className="text-gray-600 text-sm">{presente.descricao}</p>
                </div>
                <Link href={`/${presente.id}`} passHref>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-800 p-2 pr-10">{presente.preco}</span>
                    <button className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 text-white py-1 my-2 px-6 rounded-lg font-medium text-md cursor-pointer shadow-md hover:from-blue-700 hover:to-blue-800 transition-colors">
                      Presentear
                    </button>
                  </div>
                </Link>


              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ListaDePresentes;
