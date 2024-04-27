
import Image from 'next/image'
import { Inter } from 'next/font/google'

import Navbar from '@/components/Navbar';
import Banner from '@/components/Banner';
import ConfirmarPresenca from '@/components/ConfirmaPresenca';
import Informacoes from '@/components/Informacoes';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Navbar />

      <Banner/>
      <Informacoes />
      <ConfirmarPresenca/>
    </div>
  );
}
