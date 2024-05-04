// Rsvp.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface RsvpProps {}

const Rsvp: React.FC<RsvpProps> = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState(''); // Novo campo para telefone
  const [presenca, setPresenca] = useState<string>('');
  const [quantidadeAcompanhantes, setQuantidadeAcompanhantes] = useState(0);
  const [restricoesAlimentares, setRestricoesAlimentares] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('RSVP enviado:', { nome, email, telefone, presenca, quantidadeAcompanhantes, restricoesAlimentares, mensagem });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const formVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.3 } },
  };

  return (
    <motion.div
      className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-16" // Design mais suave
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="bg-white rounded-lg shadow-md p-8 max-w-md w-full"
        variants={formVariants}
      >
        <h2 className="text-3xl font-serif text-gray-800 mb-6 text-center">Confirme sua Presença</h2> {/* Estilo mais elegante */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Campo Nome */}
          <label htmlFor="nome" className="text-gray-700 font-serif">
            Nome Completo:
          </label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="border rounded-md p-2 focus:ring-indigo-500 focus:border-indigo-500" // Toque de cor
            required
          />

          {/* Campo Email */}
          <label htmlFor="email" className="text-gray-700 font-serif">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded-md p-2 focus:ring-indigo-500 focus:border-indigo-500"
            required
          />

          {/* Campo Telefone */}
          <label htmlFor="telefone" className="text-gray-700 font-serif">
            Telefone:
          </label>
          <input
            type="tel"
            id="telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            className="border rounded-md p-2 focus:ring-indigo-500 focus:border-indigo-500"
          /> 

          {/* Campo Presença */}
          <label htmlFor="presenca" className="text-gray-700 font-serif">
            Você estará presente?
          </label>
          <select
            id="presenca"
            value={presenca}
            onChange={(e) => setPresenca(e.target.value)}
            className="border rounded-md p-2 focus:ring-indigo-500 focus:border-indigo-500"
            required
          >
            <option value="">Selecione</option>
            <option value="sim">Sim</option>
            <option value="nao">Não</option>
          </select>

          {/* Campo Quantidade de Acompanhantes (condicional) */}
          {presenca === 'sim' && (
            <div>
              <label htmlFor="acompanhantes" className="text-gray-700 font-serif">
                Número de acompanhantes:
              </label>
              <input
                type="number"
                id="acompanhantes"
                value={quantidadeAcompanhantes}
                onChange={(e) => setQuantidadeAcompanhantes(Number(e.target.value))}
                className="border rounded-md p-2 focus:ring-indigo-500 focus:border-indigo-500" 
                min={0}
              /> 
            </div>
          )}



          {/* Campo Mensagem */}
          <label htmlFor="mensagem" className="text-gray-700 font-serif">
            Mensagem (opcional):
          </label>
          <textarea
            id="mensagem"
            value={mensagem} 
            onChange={(e) => setMensagem(e.target.value)}
            className="border rounded-md p-2 focus:ring-indigo-500 focus:border-indigo-500"
            rows={3}
          />

          {/* Botão Enviar */}
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md py-2 px-4 mt-4" // Estilo do botão
          >
            Enviar RSVP
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Rsvp;