<<<<<<< Updated upstream
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
=======
import Banner from "@/components/Banner";
import ConfirmarPresenca from "@/components/ConfirmaPresenca";

export default function Home() {
  return (
   <div>
      <Banner/>
      <ConfirmarPresenca/>
   </div>
  )
>>>>>>> Stashed changes
}
