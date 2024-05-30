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
      imagem: '/images/presentes/frigideira.webp',
      nome: 'Frigideira ',
      descricao: 'Frigideira para nao agarrar nosso almoço',
      preco: 'R$ 172,00',
    },
    {
      id: '2',
      imagem: '/images/presentes/aspirador.webp',
      nome: 'Aspirador de pó',
      descricao: 'Contribua com esse aspirador de pó.',
      preco: 'R$ 142,49',
    },
    {
      id: '3',
      imagem: '/images/presentes/sanduicheira.webp',
      nome: 'Misteira',
      descricao: 'De essa sanduicheira de presente',
      preco: 'R$ 129,00',
    },
    {
      id: '4',
      imagem: '/images/presentes/airflyer.webp',
      nome: 'Airflyer',
      descricao: 'Presenteie com essa Airflyer.',
      preco: 'R$ 269,00',
    },
    {
      id: '5',
      imagem: '/images/presentes/copo.webp',
      nome: 'Copos para brindar com os noivs',
      descricao: 'Presenteie com esses copos.',
      preco: 'R$ 59,90',
    },
    {
      id: '6',
      imagem: '/images/presentes/potes.webp',
      nome: 'Potes Hemeticos ',
      descricao: 'Presenteie com esses potes hermeticos.',
      preco: 'R$ 172,00',
    },
    {
      id: '7',
      imagem: '/images/presentes/panela.webp',
      nome: 'Panela',
      descricao: 'Panela 3em1.',
      preco: 'R$ 78,99,00',
    },
    {
      id: '8',
      imagem: '/images/presentes/multiprocessador.webp',
      nome: 'Multiprocessador',
      descricao: 'Presenteie com esse Multiprocessador.',
      preco: 'R$ 145,12',
    },
    {
      id: '9',
      imagem: '/images/presentes/travessa.webp',
      nome: 'Travessa',
      descricao: 'Presenteie com essa Travessa refratária.',
      preco: 'R$ 134,99',
    },
    {
      id: '10',
      imagem: '/images/presentes/pressao.webp',
      nome: 'Panela Pressão Eletrica',
      descricao: 'Presenteie com a Panela de Pressão Elétrica 5 Litros Mondial Master Cooker PE38 Preta com Prata 127V',
      preco: 'R$ 365,66',
    },
    {
      id: '11',
      imagem: '/images/presentes/arroz.webp',
      nome: 'Panela de arroz',
      descricao: 'Panela Elétrica de Arroz Mondial.',
      preco: 'R$ 189,90',
    },
    {
      id: '12',
      imagem: '/images/presentes/multiprocessador.webp',
      nome: 'Multiprocessador',
      descricao: 'Presenteie com esse Multiprocessador.',
      preco: 'R$ 145,12',
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
                  className="w-full h-56 p-2 object-cover"
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
