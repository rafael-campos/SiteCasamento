// Rsvp.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface RsvpProps {} // Adicione propriedades se necessário

const Rsvp: React.FC<RsvpProps> = () => {
  // Estados para gerenciar as informações do RSVP
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [presenca, setPresenca] = useState<string>(''); // Define o tipo para string
  const [quantidadeAcompanhantes, setQuantidadeAcompanhantes] = useState(0);
  const [restricoesAlimentares, setRestricoesAlimentares] = useState('');
  const [mensagem, setMensagem] = useState('');

  // Função para lidar com o envio do formulário
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Implementar a lógica de envio de dados para o servidor
    // (ex.: utilizando uma API ou serviço de formulários)
    console.log('RSVP enviado:', { nome, email, presenca, quantidadeAcompanhantes, restricoesAlimentares, mensagem });
  };

  // Variantes do Framer Motion para animações
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
      className="bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen flex flex-col items-center justify-center py-16" 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div 
        className="bg-white rounded-lg shadow-md p-8 max-w-md w-full"
        variants={formVariants}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Confirme sua Presença</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Campo Nome */}
          <label htmlFor="nome" className="text-gray-700">
            Nome Completo:
          </label>
          <input 
            type="text" 
            id="nome" 
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="border rounded-md p-2" 
            required
          />

          {/* Campo Email */} 
          <label htmlFor="email" className="text-gray-700">
            Email:
          </label>
          <input 
            type="email" 
            id="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded-md p-2" 
            required
          />

          {/* Campo Presença */}
          <label htmlFor="presenca" className="text-gray-700">
            Você estará presente?
          </label>
          <select 
            id="presenca" 
            value={presenca}
            onChange={(e) => setPresenca(e.target.value)}
            className="border rounded-md p-2" 
            required
          >
            <option value="">Selecione</option>
            <option value="sim">Sim</option>
            <option value="nao">Não</option>
          </select>

          {/* Campo Quantidade de Acompanhantes (condicional) */}
          {presenca === 'sim' && (
            <div>
              <label htmlFor="acompanhantes" className="text-gray-700">
                Número de acompanhantes:
              </label>
              <input 
                type="number" 
                id="acompanhantes" 
                value={quantidadeAcompanhantes}
                onChange={(e) => setQuantidadeAcompanhantes(Number(e.target.value))}
                className="border rounded-md p-2" 
                min={0}
              />
            </div>
          )}

   

          {/* Campo Mensagem */}
          <label htmlFor="mensagem" className="text-gray-700">
            Mensagem (opcional):
          </label>
          <textarea 
            id="mensagem" 
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            className="border rounded-md p-2" 
            rows={3}
          />

          {/* Botão Enviar */} 
          <button 
            type="submit" 
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2 px-4 mt-4"
          >
            Enviar RSVP
          </button>
        </form>
      </motion.div>
    </motion.div> 
  );
};

export default Rsvp;