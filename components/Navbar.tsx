import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-center px-6 py-3 shadow-md w-full fixed top-0 z-10 bg-white ">
      <div className="flex justify-center w-full">
        <div className="flex justify-start w-1/3 space-x-4">
          <Link href="#informacoes" passHref><span className="text-gray-600 hover:text-gray-800 transition-all duration-300 cursor-pointer">Informações</span></Link>
          <Link href="#galeria" passHref><span className="text-gray-600 hover:text-gray-800 transition-all duration-300 cursor-pointer">Galeria</span></Link>
        </div>
        <div className="w-1/3 flex justify-center">
          <Link href="/" passHref><img src="/path/to/your/logo.png" alt="Logo do Casamento" className="h-8" /></Link>
        </div>
        <div className="flex justify-end w-1/3 space-x-4">
          <Link href="#lista-de-presentes" passHref><span className="text-gray-600 hover:text-gray-800 transition-all duration-300 cursor-pointer">Lista de Presentes</span></Link>
          <Link href="#lista-de-confirmacao" passHref><span className="text-gray-600 hover:text-gray-800 transition-all duration-300 cursor-pointer">Lista de Confirmação</span></Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
