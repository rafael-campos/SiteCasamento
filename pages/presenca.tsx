import { useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


const NotificationBanner = () => {
  const [isOpen, setIsOpen] = useState(true);

  const containerVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
    exit: { opacity: 0, y: 100, transition: { type: 'spring', stiffness: 100 } }
  };

  const handleDismiss = () => {
    setIsOpen(false);
  };

  return (
    <div className=" h-[90vh] bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500">
   
      <Navbar />
      <div className="flex-grow flex items-center justify-center h-full sm:mx-[20%] ">
        {isOpen && (
          <motion.div
            className="bg-white rounded-lg shadow-lg p-6 text-center mx-4 sm:mx-0"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={containerVariants}
          >
            <p className="text-3xl font-bold text-red-600 mb-4">Aviso Importante</p>
            <p className="text-xl text-gray-500 mb-4 text-start">
              Infelizmente, todas as vagas para o evento foram esgotadas. Caso você tenha sido convidado mas esqueceu de confirmar a sua presença, por favor entre em contato com os noivos.
            </p>
            <p className="text-xl text-gray-500 mb-4 text-start">
              Lembre-se que a entrada será permitida apenas para aqueles cujo nome esteja na lista na portaria. Caso contrário, não será possível entrar no evento.
            </p>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
              onClick={handleDismiss}
            >
              Fechar
            </button>
          </motion.div>
        )}
      </div>
      <Footer />
    </div>
    
  );
};

export default NotificationBanner;
