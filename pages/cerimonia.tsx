import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ListaDePresentes from '@/components/ListaDePresente';

const Cerimonia: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-[#E2E8F4] min-h-screen">
      <Navbar />
      <motion.div
        className="container mx-auto px-4 py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-5xl font-dancing font-bold text-blue-900 text-center mb-10">
          Cerimônia Religiosa
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          variants={itemVariants}
        >
          {/* Coluna da Esquerda - Descrição */}
          <div className="bg-white p-8 rounded-lg shadow-lg h-full flex flex-col">
            <h3 className="text-3xl font-semibold text-blue-800 mb-4">
              Um Encontro Abençoado
            </h3>
            <p className="text-lg text-gray-800 leading-relaxed">
              A cerimônia religiosa, momento mais que especial, será
              realizada na charmosa Capela de Nhá Chica, um local
              repleto de paz e espiritualidade.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed mt-4">
              Para que tudo ocorra com tranquilidade, pedimos a todos que
              cheguem com um pouco de antecedência. Há um pequeno trecho
              de estrada de terra de passagem estreita antes de chegar à
              capela. No final do caminho, passando da igreja, haverá um
              estacionamento para maior comodidade.
            </p>
            <div className="mt-8">
              <h4 className="text-2xl font-semibold text-blue-800 mb-2">
                Informações da Cerimônia:
              </h4>
              <ul className="list-disc ml-6 text-blue-700">
                <li>Data: 24 de agosto de 2024</li>
                <li>Horário: 15:30h</li>
                <li>Local: Capela de Nhá Chica</li>
                <li>
                  Endereço: Distrito Rio das Mortes, São João del-Rei - MG
                </li>
              </ul>
            </div>

            {/* Espaço extra para garantir a mesma altura */}
            <div className="flex-grow"></div>
          </div>

          {/* Coluna da Direita - Mapa */}
          <motion.div className="h-full" variants={itemVariants}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238191.98501084052!2d-44.39293485555112!3d-21.122540256759763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa1cda5fd50958b%3A0xe2c33aac6ca8f43c!2sCapela%20da%20Beata%20Nh%C3%A1%20Chica%20(Igreja%20Velha)!5e0!3m2!1spt-BR!2sbr!4v1714218954662!5m2!1spt-BR!2sbr"
              width="100%"
              className="h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </motion.div>

        {/* Lista de Presentes */}
        <ListaDePresentes />
      </motion.div>
      <Footer />
    </div>
  );
};

export default Cerimonia;