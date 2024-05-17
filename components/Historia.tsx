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
              Tudo começou com uma conversa online, uma semana antes do nosso primeiro encontro presencial.
              A internet nos uniu e, desde então, compartilhamos muitos interesses e risadas.
              A simplicidade desses momentos iniciais foi o que nos aproximou.
            </p>

            <p className="mt-4 text-lg text-gray-800 leading-relaxed">
              Nosso relacionamento cresceu a partir de encontros casuais e descobertas mútuas.
              O pedido de namoro, feito em 15 de dezembro de 2021, foi um passo natural na nossa jornada juntos.
            </p>

            <p className="mt-4 text-lg text-gray-800 leading-relaxed">
              O noivado veio um ano depois, em 23 de dezembro de 2022, marcando o início de um novo capítulo.
              Foi um momento íntimo e significativo, que selou nosso compromisso um com o outro.
            </p>

            <p className="mt-4 text-lg text-gray-800 leading-relaxed">
              Agora, estamos planejando nosso futuro, construindo uma vida juntos com base em amor e companheirismo.
              É com alegria que convidamos você a se juntar a nós nessa celebração.
            </p>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Historia;