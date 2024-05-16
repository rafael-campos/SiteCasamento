// components/Historia.tsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCalendarAlt } from 'react-icons/fa';
import Image from 'next/image';

// Interface para definir a estrutura de cada evento na linha do tempo
interface Evento {
  id: number;
  data: string;
  titulo: string;
  descricao: string;
  imagem: string;
  lado: "esquerda" | "direita"; // Define o lado da imagem na linha do tempo
}

const eventos: Evento[] = [
  {
    id: 1,
    data: "Dezembro de 2021",
    titulo: "Primeiro Encontro",
    descricao: "",
    imagem: "/images/foto-01.webp",
    lado: "direita"
  },
  {
    id: 2,
    data: "Dezembro de 2021",
    titulo: "Primeiro Beijo",
    descricao: "Sob um céu estrelado, em meio a risadas e olhares tímidos, o primeiro beijo selou o início de uma jornada repleta de amor e felicidade.",
    imagem: "/images/foto-02.webp",
    lado: "esquerda",
  },
  {
    id: 3,
    data: "Janeiro de 2021",
    titulo: "Viagem Inesquecível",
    descricao: "Exploramos paisagens paradisíacas, criando memórias que jamais serão apagadas. Cada momento juntos fortalecia o elo que nos unia.",
    imagem: "/images/foto-03.webp",
    lado: "direita",
  },
  {
    id: 4,
    data: "Agosto de 2023",
    titulo: "Pedido de Casamento",
    descricao: "Em um cenário mágico, sob a luz do luar, Rafael fez o pedido que mudou nossas vidas para sempre. Com o coração transbordando de amor, Mirelle disse sim!",
    imagem: "/images/foto-11.webp",
    lado: "esquerda",
  },
  {
    id: 5,
    data: "24 de Agosto de 2024",
    titulo: "O Grande Dia",
    descricao: "Com a bênção de Deus e o amor de nossos familiares e amigos, celebraremos a união de nossas almas e o início de uma nova fase em nossas vidas.",
    imagem: "/images/historia/historia5.webp",
    lado: "direita",
  },
];

const Historia: React.FC = () => {
  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl text-center font-dancing font-bold text-blue-900 mb-10">
          Nossa História
        </h2>
        
        <div className="relative timeline-container">
          {/* Linha central da timeline */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300"></div>

          <AnimatePresence>
            {eventos.map((evento) => (
              <motion.div
                key={evento.id}
                className={`timeline-item relative flex flex-col items-center my-8 ${
                  evento.lado === "direita" ? "md:flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
              >
                {/* Imagem do evento */}
                <div className="w-24 h-24 md:w-32 md:h-32 mb-4 md:mb-0 flex-shrink-0">
                  <Image
                    src={evento.imagem}
                    alt={evento.titulo}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full shadow-lg"
                  />
                </div>

                {/* Círculo na linha do tempo */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full z-10"></div>

                {/* Descrição do evento */}
                <div className="w-full md:w-auto px-4">
                  <div className={`bg-white p-6 rounded-lg shadow-lg ${evento.lado === "direita" ? "md:mr-8" : "md:ml-8"}`}>
                    <div className="flex items-center mb-3">
                      <FaCalendarAlt className="text-blue-500 mr-2" />
                      <span className="text-gray-600 font-medium">{evento.data}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-blue-900 mb-4">{evento.titulo}</h3>
                    <p className="text-gray-700">{evento.descricao}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Historia;