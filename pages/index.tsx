import React from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { FaWhatsapp } from 'react-icons/fa';
import { Tooltip } from 'antd'; // Removi FloatButton, pois parece não estar sendo usado

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
    <>
      <Head>
        {/* Aqui estão as informações adicionais meta para SEO */}
        <meta
          name="keywords"
          content="Casamento, Rafael e Mirelle, São João del Rei, Minas Gerais, 24 de agosto de 2024, 15h30"
        />
        <meta
          name="description"
          content="Celebre o amor conosco no casamento de Rafael e Mirelle em São João del Rei, Minas Gerais, no dia 24 de agosto de 2024, às 15h30! Sua presença é muito especial para nós."
        /> 
        <meta
          property="og:image"
          content="/images/foto-4.webp" // Substitua pela URL da sua imagem principal
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <NextSeo
        title="Casamento Rafael e Mirelle"
        description="Celebre o amor conosco no nosso casamento em São João del Rei, Minas Gerais! Junte-se a nós, Rafael e Mirelle, neste dia especial."
        canonical="https://www.seusitedecasamento.com" // Substitua pelo seu domínio
        openGraph={{
          url: 'https://www.seusitedecasamento.com', // Substitua pelo seu domínio
          title: 'Casamento Rafael e Mirelle',
          description:
            'Celebre o amor conosco no nosso casamento em São João del Rei, Minas Gerais! Junte-se a nós, Rafael e Mirelle, neste dia especial.',
          images: [
            {
              url: '/images/foto-casamento.jpg', // Substitua pela URL da sua imagem principal
              width: 800,
              height: 600,
              alt: 'Foto do Casamento de Rafael e Mirelle',
            },
          ],
          site_name: 'Casamento Rafael e Mirelle',
        }}
        twitter={{
          handle: '@seutwitter', // Substitua pelo seu Twitter
          site: '@seutwitter', // Substitua pelo seu Twitter
          cardType: 'summary_large_image',
        }}
      />

      <div>
        <Navbar />
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
          <MandarMensagem />
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
    </>
  );
}