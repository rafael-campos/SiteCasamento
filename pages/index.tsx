import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Ícone do WhatsApp do react-icons
import { FloatButton, Tooltip } from 'antd';
// Importe os componentes necessários
import Navbar from '@/components/Navbar';
import Banner from '@/components/Banner';
import Informacoes from '@/components/Informacoes';
import Rsvp from '@/components/Rsvp';
import Padrinhos from '@/components/Padrinhos';
import Footer from '@/components/Footer';

import ListaDePresentes from '@/components/ListaDePresente';

import Galeria from '@/components/Galeria';
import Historia from '@/components/Historia';
import MandarMensagem from '@/components/MandarMensagem';



export default function Home() {
  return (
    <div>
      <Navbar />

      {/* Seções com IDs correspondentes aos hrefs do Navbar */}
      <section id="inicio">
        <Banner />
      </section>

      <section id="historia">
        <Historia />
      </section>

      <section id="galeria">
        <Galeria />
      </section>

      <section id="informacoes">
        <Informacoes />
      </section>

      <section id="padrinhos">
        <Padrinhos />
      </section>

      <section id="lista-de-presentes">
        <ListaDePresentes />
      </section>

      <section id="mensagem">
      </section>
      <Tooltip title="Dúvidas?">
        <a
          href="https://wa.me/553299057760"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 md:w-14 w-10 h-10 p-2 md:p-3 md:h-14 bg-green-500 hover:bg-green-900 flex items-center justify-center rounded-full transition-colors duration-300 z-50 mx-[3%] mb-[2%] text-white"
        >
          <FaWhatsapp size="80%" />
        </a>
     
      </Tooltip>

      <Footer />


    </div>
  );
}