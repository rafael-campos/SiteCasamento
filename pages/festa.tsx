import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ListaDePresentes from '@/components/ListaDePresente';
import Reconfirmados from '@/components/Reconfirmado.';

const Festa: React.FC = () => {
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
          Festa de Casamento
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          variants={itemVariants}
        >
          {/* Coluna da Esquerda - Descrição */}
          <div className="bg-white p-8 rounded-lg shadow-lg h-full flex flex-col">
            <h3 className="text-3xl font-semibold text-blue-800 mb-4">
              Um Sonho a Celebrar
            </h3>
            <p className="text-lg text-gray-800 leading-relaxed">
              Após a cerimônia na encantadora Igreja Nossa Senhora da Conceição
              - Nhá Chica, venha para celebrar conosco em uma festa
              repleta de alegria, música , comida ,bebida e boa companhia!
            </p>
            <p className="text-lg text-gray-800 leading-relaxed mt-4">
              O Espaço Colina dos Ventos, em São João del Rei, será palco de
              momentos memoráveis, onde brindaremos ao amor e à união. Preparem
              seus corações para uma noite inesquecível!
            </p>
            <div className="mt-8">
              <h4 className="text-2xl font-semibold text-blue-800 mb-2">
                Informações da Festa:
              </h4>
              <ul className="list-disc ml-6 text-blue-700">
                <li>Data: 24 de agosto de 2024</li>
                <li>Horário: 18:30h</li>
                <li>Local: Espaço Colina dos Ventos</li>
                <li>Endereço: R. José Bernardino, 10 - Colina, São João del-Rei - MG</li>
              </ul>
            </div>
            {/* Espaço extra para garantir a mesma altura */}
            <div className="flex-grow"></div> 
          </div>

          {/* Coluna da Direita - Mapa */}
          <motion.div className="h-full" variants={itemVariants}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.067437011933!2d-44.22085092473999!3d-21.14971438053001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa1c75b50c770b9%3A0x2945382a74895a45!2sEspa%C3%A7o%20Colina%20Dos%20Ventos!5e0!3m2!1spt-BR!2sbr!4v1723630966836!5m2!1spt-BR!2sbr"
              width="100%"
              className="h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </motion.div>

        {/* Videos */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          variants={itemVariants}
        >
          <div className="e p-4 flex flex-col items-center justify-center">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4 text-center">Caminho da Igreja</h3> 
            <video 
              src="/videos/rotac.mp4" 
              controls
              autoPlay
              className="w-full sm:w-1/2 aspect-[9/16] object-cover" 
            />
          </div>
          <div className="p-4 flex flex-col items-center justify-center"> 
            <h3 className="text-2xl font-semibold text-blue-800 mb-4 text-center">Caminho da Festa</h3> 
            <video 
              src="/videos/rotaf.mp4" 
              controls 
              className="w-full sm:w-1/2 aspect-[9/16] object-cover" 
            />
          </div>
        </motion.div>

        {/* Lista de Presentes */}
        <ListaDePresentes />
       
      </motion.div>
      <Footer />
    </div>
  );
};

export default Festa;