
import Image from 'next/image'
import { Inter } from 'next/font/google'

import Navbar from '@/components/Navbar';
import Banner from '@/components/Banner';
import ConfirmarPresenca from '@/components/ConfirmaPresenca';
import Informacoes from '@/components/Informacoes';
import ListaDePresentes from '@/components/ListaDePresente';
import Rsvp from '@/components/Rsvp';
import Padrinhos from '@/components/Padrinhos';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Navbar />

      <Banner/>
    
      <Informacoes />
      <ConfirmarPresenca/>
      <Rsvp/>
      <Padrinhos/>
      <ListaDePresentes/>
   

    </div>
  );
}
