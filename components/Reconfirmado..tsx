import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { api } from '@/services/apiClient';

interface Confirmacao {
  id: string;
  nome: string;
  status: string;
}

const Reconfirmados: React.FC = () => {
  const [reconfirmados, setReconfirmados] = useState<Confirmacao[]>([]);

  useEffect(() => {
    api.get('confirmacao').then((resposta) => {
      const confirmadosFiltrados = resposta.data.filter(
        (confirmacao: Confirmacao) => confirmacao.status === 'RECONFIRMADO'
      );
      const confirmadosOrdenados = confirmadosFiltrados.sort((a: Confirmacao, b: Confirmacao) =>
        a.nome.localeCompare(b.nome)
      );
      setReconfirmados(confirmadosOrdenados);
    });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="bg-white p-8 rounded-lg shadow-lg mt-10"
    >
      <h3 className="text-3xl font-semibold text-blue-800 text-center mb-6">
        Segunda Confirmação 💖
      </h3>
      <motion.ul variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reconfirmados.map((confirmacao) => (
          <motion.li
            key={confirmacao.id}
            variants={itemVariants}
            className="text-lg font-medium text-gray-800 text-center"
          >
            {confirmacao.nome}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default Reconfirmados;