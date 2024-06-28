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
              <h3 className="text-xl font-semibold mt-4">
                {casal.nomePadrinho}
              </h3>
              <p className="text-md text-gray-600">&</p>
              <h3 className="text-xl font-semibold">{casal.nomeMadrinha}</h3>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button
            onClick={paginaAnterior}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 p-2 rounded-l disabled:opacity-50 mr-2"
          >
            <IoIosArrowBack />
          </button>
          <button
            onClick={proximaPagina}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 p-2 rounded-r disabled:opacity-50 ml-2"
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Padrinhos;