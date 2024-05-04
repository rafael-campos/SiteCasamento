import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white p-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <span className="text-lg font-semibold">Rafael & Mirelle</span>
          </div>
          <div className="flex flex-wrap items-center text-sm">
            <p className="mr-4">© {new Date().getFullYear()} Todos os direitos reservados.</p>
            <p>Desenvolvido por Rafael Campos e Ygor Magalhães</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-center text-sm">
            Desejamos a todos momentos inesquecíveis e felicidades eternas.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
