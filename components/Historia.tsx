import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Historia: React.FC = () => {
  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl text-center font-dancing font-bold text-blue-900 mb-10">Nossa História</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Coluna da Imagem */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src="/images/capa.webp" // Substitua pela imagem principal da história
              alt="Rafael & Mirelle"
              layout="fill"
              objectFit="cover"
            />
          </motion.div>

          {/* Coluna do Texto */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <p className="text-lg text-gray-800 leading-relaxed">
              Nossa história começou em um dia ensolarado de primavera, em um café aconchegante no coração da cidade. 
              O destino, sempre brincalhão, cruzou nossos caminhos em um encontro casual que se transformou em horas de conversa, 
              risadas e uma inegável conexão. Descobrimos paixões em comum, sonhos semelhantes e a certeza de que algo especial 
              estava florescendo.
            </p>

            <p className="mt-4 text-lg text-gray-800 leading-relaxed">
              Os dias que se seguiram foram preenchidos por momentos mágicos: passeios no parque, jantares à luz de velas, 
              viagens inesquecíveis que gravaram memórias eternas em nossos corações. Cada abraço, cada olhar, cada sorriso 
              solidificava o amor que crescia a cada dia.
            </p>

            <p className="mt-4 text-lg text-gray-800 leading-relaxed">
              Em um cenário mágico, sob a luz do luar, Rafael, com o coração transbordando de amor, fez o pedido que mudou 
              nossas vidas para sempre. E Mirelle, com a mesma intensidade, disse sim! A partir daquele momento, 
              a promessa de um futuro juntos se tornou a força que nos impulsiona a construir uma vida a dois repleta 
              de amor, cumplicidade e felicidade. 
            </p>

            <p className="mt-4 text-lg text-gray-800 leading-relaxed">
              Agora, estamos aqui, prontos para celebrar este novo capítulo em nossas vidas. E temos a alegria de convidar 
              você para compartilhar conosco a realização deste sonho. 
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Historia;