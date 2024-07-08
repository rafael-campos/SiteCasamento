import React, { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

interface CasalPadrinhos {
  nomePadrinho: string;
  nomeMadrinha: string;
}

const listaDePadrinhos: CasalPadrinhos[] = [
  { nomePadrinho: 'João Leno', nomeMadrinha: 'Cristiane Marina' },
  { nomePadrinho: 'Amanda Magalhães', nomeMadrinha: 'Caio Andrade' },
  { nomePadrinho: 'Thamires Santos', nomeMadrinha: 'Henrique Nascimento' },
  { nomePadrinho: 'Maria Clara', nomeMadrinha: 'Bruno Coutinho' },
  { nomePadrinho: 'Juliemerson de Paula', nomeMadrinha: 'Rafaela Silveira' },
  { nomePadrinho: 'Luis Xisto', nomeMadrinha: 'Neide Santos' },
  { nomePadrinho: 'Mônica Sousa', nomeMadrinha: 'José Souza' },
  { nomePadrinho: 'Isabel Costa', nomeMadrinha: 'Antônio Costa' },
  { nomePadrinho: 'Maydson  Paula', nomeMadrinha: 'Yasmin Carvalho' },
  { nomePadrinho: 'Alexey Nikolas', nomeMadrinha: 'Flavia Silva' },
  { nomePadrinho: 'Leticia Sara', nomeMadrinha: 'William Maia' },
  { nomePadrinho: 'Ewerton Silva', nomeMadrinha: 'Priscila Costa' },
  { nomePadrinho: 'Welton Santos', nomeMadrinha: 'Nicole Moraes' },
  { nomePadrinho: 'Danyane Tamara', nomeMadrinha: 'Jonas Silva' },
  { nomePadrinho: 'Ruan Rios', nomeMadrinha: 'Joice Lima' },
  { nomePadrinho: 'Ygor Magalhães', nomeMadrinha: 'Camila Vieira' },
  { nomePadrinho: 'Olavo Campos', nomeMadrinha: 'Gilma Campos' },
  { nomePadrinho: 'Karine Ferreira', nomeMadrinha: 'Douglas Paiva' },
  { nomePadrinho: 'Juliano de Paula', nomeMadrinha: 'Marly de Paula' },
  { nomePadrinho: 'Pedro Carvalho', nomeMadrinha: 'Maria Carvalho' },
];

const Padrinhos: React.FC = () => {
  const [padrinhosEmbaralhados, setPadrinhosEmbaralhados] = useState<CasalPadrinhos[]>(
    []
  );
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [autoPlay, setAutoPlay] = useState(true);
  const casaisPorPagina = 4;

  // Função para embaralhar os padrinhos
  const embaralharPadrinhos = () => {
    setPadrinhosEmbaralhados(
      [...listaDePadrinhos].sort(() => 0.5 - Math.random())
    );
  };

  useEffect(() => {
    // Embaralha os padrinhos quando o componente é montado
    embaralharPadrinhos();
  }, []);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (autoPlay) {
      intervalId = setInterval(() => {
        proximaPagina();
      }, 4000);
    }

    return () => clearInterval(intervalId);
  }, [paginaAtual, autoPlay]);

  const indiceUltimoCasal = paginaAtual * casaisPorPagina;
  const indicePrimeiroCasal = indiceUltimoCasal - casaisPorPagina;
  const casaisAtuais = padrinhosEmbaralhados.slice(
    indicePrimeiroCasal,
    indiceUltimoCasal
  );

  const numeroDePaginas = Math.ceil(
    padrinhosEmbaralhados.length / casaisPorPagina
  );

  const proximaPagina = () => {
    setPaginaAtual((paginaAtual) =>
      paginaAtual < numeroDePaginas ? paginaAtual + 1 : 1
    );
  };

  const paginaAnterior = () => {
    setPaginaAtual((paginaAtual) =>
      paginaAtual > 1 ? paginaAtual - 1 : numeroDePaginas
    );
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 text-blue-600">
          Padrinhos & Madrinhas
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {casaisAtuais.map((casal, index) => (
            <div
              key={index}
              className="bg-[#E2E8F4] p-6 rounded-lg shadow-lg text-center"
            >
              <FaHeart className="text-blue-500 mx-auto text-6xl" />
              <h3 className="text-xl font-semibold mt-4">{casal.nomePadrinho}</h3>
              <p className="text-md text-gray-600">&</p>
              <h3 className="text-xl font-semibold">{casal.nomeMadrinha}</h3>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center mt-8 space-x-2">
          <button
            onClick={paginaAnterior}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 p-2 rounded-full disabled:opacity-50 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.707 3.707a1 1 0 010 1.414L4.414 8H16a1 1 0 110 2H4.414l3.293 3.293a1 1 0 11-1.414 1.414l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button
            onClick={proximaPagina}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 p-2 rounded-full disabled:opacity-50 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 16.293a1 1 0 010-1.414L15.586 11H4a1 1 0 110-2h11.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>

  );
};

export default Padrinhos;