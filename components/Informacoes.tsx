// Informacoes.tsx

import React from 'react';
import { motion } from 'framer-motion';

const Informacoes: React.FC = () => {
  // Framer Motion variants (unchanged from previous version)
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  const infoVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.3 } },
  };

  const mapVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.5 } },
  };

  return (
    <motion.div 
      className="bg-blue-50 min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Left Side: Wedding Information (White Box) */}
      <motion.div 
        className="bg-white rounded-lg shadow-md p-8 max-w-md"
        variants={infoVariants}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Informações do Casamento</h2>
        <p className="mb-2">Celebre conosco a união de Rafael & Mirelle!</p>
        <ul className="list-disc ml-6">
          <li>Data: 24 de agosto de 2024</li>
          <li>Horário: 15:30</li>
          <li>Local: Igreja Nossa Senhora da Conceição - Nhá Chica, Distrito Rio das Mortes</li>
        </ul>
      </motion.div>

      {/* Right Side: Google Maps Embed (Full Width) */}
      <motion.div 
        className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-8" 
        variants={mapVariants}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238191.98501084052!2d-44.39293485555112!3d-21.122540256759763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa1cda5fd50958b%3A0xe2c33aac6ca8f43c!2sCapela%20da%20Beata%20Nh%C3%A1%20Chica%20(Igreja%20Velha)!5e0!3m2!1spt-BR!2sbr!4v1714218954662!5m2!1spt-BR!2sbr"
          // Ensure the iframe takes full width and removes extra spacing
          style={{width: '100%', height: '450px', border: 'none'}}
          allowFullScreen // Corrected spelling
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>
    </motion.div>
  );
};

export default Informacoes;