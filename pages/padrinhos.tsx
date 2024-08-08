import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Padrinhos: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
          Recomendações para Padrinhos de Casamento
        </h1>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Caros Padrinhos,</h2>
          <p className="text-lg mb-4">
            Ser padrinho de casamento é uma honra e uma responsabilidade. Vocês foram escolhidos não apenas por sua proximidade com os noivos, mas também por sua capacidade de apoiá-los nessa nova jornada de vida. Aqui estão algumas recomendações para que vocês possam cumprir esse papel com excelência.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Apoio Espiritual e Emocional</h3>
          <p className="mb-4">
            O papel dos padrinhos vai além do dia da cerimônia. Vocês são convidados a acompanhar o casal, oferecendo apoio espiritual e emocional. Rezem por eles, estejam presentes nos momentos difíceis e celebrem as conquistas juntos&#8203;:citation[oaicite:5]{index=5}&#8203;&#8203;:citation[oaicite:4]{index=4}&#8203;.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Participação na Preparação</h3>
          <p className="mb-4">
            Ajudem os noivos com a preparação do casamento. Isso pode incluir auxílio na organização da cerimônia, apoio logístico e até mesmo ajuda financeira, se necessário e combinado previamente&#8203;:citation[oaicite:3]{index=3}&#8203;.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Exemplo de Vida Cristã</h3>
          <p className="mb-4">
            Sejam exemplos de vida cristã para os noivos. Mostrem, através de suas ações e palavras, o que significa viver um casamento santo e alinhado com os ensinamentos da Igreja&#8203;:citation[oaicite:2]{index=2}&#8203;.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Compromisso Contínuo</h3>
          <p className="mb-4">
            O compromisso dos padrinhos é contínuo. Mantenham contato regular com os noivos, ofereçam conselhos sábios e lembrem-se de datas importantes, como aniversários de casamento, para reforçar a presença e o apoio de vocês&#8203;:citation[oaicite:1]{index=1}&#8203;&#8203;:citation[oaicite:0]{index=0}&#8203;.
          </p>

          <div className="mt-8 text-center">
            <p className="text-lg">
              Agradecemos profundamente por aceitarem esta missão e temos certeza de que, com seu apoio, os noivos terão uma vida matrimonial abençoada e feliz.
            </p>
            <p className="text-xl font-semibold mt-4">Com gratidão,</p>
            <p className="text-xl font-semibold">[Nome dos Noivos]</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Padrinhos;
