import React from 'react';
import Link from 'next/link';
import { FaHeart, FaInfo, FaImages, FaGift, FaEnvelopeOpenText } from 'react-icons/fa';

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between px-10 py-5 shadow-md w-full fixed top-0 z-50 bg-white/90 backdrop-blur-md">
      <div className="flex items-center space-x-6">
        <Link href="/">
          <span className="text-2xl font-bold text-blue-400 hover:text-blue-500 transition-all duration-300 cursor-pointer flex items-center">
            <FaHeart className="mr-2" /> Rafael & Mirelle
          </span>
        </Link>
      </div>
      <div className="flex space-x-4">
        <Link href="#informacoes">
          <span className="text-gray-600 hover:text-gray-800 transition-all duration-300 cursor-pointer flex items-center">
            <FaInfo className="mr-2" /> Informações
          </span>
        </Link>
        <Link href="#galeria">
          <span className="text-gray-600 hover:text-gray-800 transition-all duration-300 cursor-pointer flex items-center">
            <FaImages className="mr-2" /> Galeria
          </span>
        </Link>
        <Link href="#lista-de-presentes">
          <span className="text-gray-600 hover:text-gray-800 transition-all duration-300 cursor-pointer flex items-center">
            <FaGift className="mr-2" /> Lista de Presentes
          </span>
        </Link>
        <Link href="#rsvp">
          <span className="text-gray-600 hover:text-gray-800 transition-all duration-300 cursor-pointer flex items-center">
            <FaEnvelopeOpenText className="mr-2" /> RSVP
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
