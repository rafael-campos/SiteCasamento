import React from 'react';
// Importe os componentes necessários
import Navbar from '@/components/Navbar';
import Banner from '@/components/Banner';
import Informacoes from '@/components/Informacoes';
import Rsvp from '@/components/Rsvp';
import Padrinhos from '@/components/Padrinhos';
import Footer from '@/components/Footer';

import ListaDePresentes from '@/components/ListaDePresente';
import ConfirmarPresenca from '@/components/ConfirmaPresenca';
import Galeria from '@/components/Galeria';

export default function Home() {
  return (
    <div>
      <Navbar />

      {/* Seções com IDs correspondentes aos hrefs do Navbar */}
      <section id="inicio">
        <Banner />
      </section>

      <section id="informacoes">
        <Informacoes />
      </section>

      <section id="confirmar-presenca">
        <ConfirmarPresenca />
      </section>

      <section id="galeria">
        <Galeria />
      </section>

      <section id="rsvp">
        <Rsvp />
      </section>

      <section id="padrinhos">
        <Padrinhos />
      </section>

      <section id="lista-de-presentes">
        <ListaDePresentes />
      </section>

      <Footer />
    </div>
  );
}
