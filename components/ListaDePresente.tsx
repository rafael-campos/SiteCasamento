import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Interface para definir a estrutura de cada presente
interface Presente {
  id: string;
  imagem: string;
  nome: string;
  descricao: string;
  preco: string;
}

const ListaDePresentes: React.FC = () => {
  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Exemplos de presentes fictícios com preços e IDs
  const presentes: Presente[] = [

    {
      id: '1',
      imagem: '/images/presentes/jardim.webp',
      nome: 'Jardim Vertical',
      descricao: 'Para colocar plantinhas',
      preco: 'R$ 95,50',
    },
    {
      id: '2',
      imagem: '/images/presentes/chaleira.webp',
      nome: 'Chaleira Eletrica',
      descricao: 'Para colocar plantinhas',
      preco: 'R$ 89,90',
    },
    {
      id: '3',
      imagem: '/images/presentes/sanduicheira.webp',
      nome: 'Misteira',
      descricao: 'Para preparar sanduíches dignos de um final feliz!',
      preco: 'R$ 129,00',
    },
    {
      id: '4',
      imagem: '/images/presentes/airflyer.webp',
      nome: 'Airflyer',
      descricao: 'Para fritar os petiscos da festa (sem óleo e sem culpa)!',
      preco: 'R$ 269,00',
    },

    {
      id: '6',
      imagem: '/images/presentes/potes.webp',
      nome: 'Potes Herméticos',
      descricao: 'Para guardar as sobras do jantar romântico (ou as lembranças do casamento)!',
      preco: 'R$ 172,00',
    },
    {
      id: '7',
      imagem: '/images/presentes/chocolate.webp',
      nome: 'Chocolate',
      descricao: 'Para alegrar os noivos',
      preco: 'R$ 85,00',
    },

    {
      id: '8',
      imagem: '/images/presentes/multiprocessador.webp',
      nome: 'Multiprocessador',
      descricao: 'Para processar a vida a dois com mais praticidade (e menos brigas na cozinha)!',
      preco: 'R$ 145,12',
    },
    {
      id: '9',
      imagem: '/images/presentes/travessa.webp',
      nome: 'Travessa',
      descricao: 'Para servir aquele banquete de amor (e impressionar os convidados)!',
      preco: 'R$ 134,99',
    },
    {
      id: '10',
      imagem: '/images/presentes/quadro.jpg',
      nome: 'Quadro decorativo ',
      descricao: 'Para decorar a casa ',
      preco: 'R$ 215,00',
    },

    {
      id: '11',
      imagem: '/images/presentes/compra.webp',
      nome: 'Primeira compra  ',
      descricao: 'Primeira compra no mercado do casal ',
      preco: 'R$ 600,00',
    },

    {
      id: '12',
      imagem: '/images/presentes/aparador.webp',
      nome: 'Aparador Balcão/Buffet',
      descricao: 'Para equipar a nossa cozinha com muito amor (e um Aparador Balcão/Buffet)!',
      preco: 'R$ 363,90',
    },
    {
      id: '13',
      imagem: '/images/presentes/kitchurrasco.webp',
      nome: 'Kit Churrasco',
      descricao: 'Para celebrar a vida com churrasco (e a gente adora uma festa)!',
      preco: 'R$ 193,00',
    },
    {
      id: '14',
      imagem: '/images/presentes/jogotalheres.webp',
      nome: 'Jogo de Talheres',
      descricao: 'Para saborear cada momento juntos (com talheres que combinam com a gente)!',
      preco: 'R$ 284,05',
    },
    {
      id: '15',
      imagem: '/images/presentes/jogocama.webp',
      nome: 'Jogo de lençol',
      descricao: 'Jogo De Cama Lençol Premium Casal ',
      preco: 'R$ 206,99',
    },

    {
      id: '16',
      imagem: '/images/presentes/batedeira.webp',
      nome: 'Batedeira',
      descricao: 'Para bater bolos deliciosos (e o coração do mozão)!',
      preco: 'R$ 279,00',
    },
    {
      id: '17',
      imagem: '/images/presentes/mixer.webp',
      nome: 'Mixer',
      descricao: 'Para preparar sucos e vitaminas cheios de amor (e saúde)!',
      preco: 'R$ 199,90',
    },
    {
      id: '18',
      imagem: '/images/presentes/organizador.webp',
      nome: 'Organizador de Geladeira',
      descricao: 'Para manter a geladeira organizada (e a vida também)!',
      preco: 'R$ 114,99',
    },
    {
      id: '19',
      imagem: '/images/presentes/barro.webp',
      nome: 'Filtro de barro',
      descricao: 'Para preparar sucos e vitaminas cheios de amor (e saúde)!',
      preco: 'R$ 110,00',
    },
    {
      id: '20',
      imagem: '/images/presentes/lavadora.webp',
      nome: 'Lavadora',
      descricao: 'Para manter a geladeira organizada (e a vida também)!',
      preco: 'R$ 1619,00',
    },
    {
      id: '21',
      imagem: '/images/presentes/dialogo.webp',
      nome: 'Dialogo',
      descricao: 'Muito dialogo pra noiva com o noivo',
      preco: 'R$ 100,00',
    },
    {
      id: '22',
      imagem: '/images/presentes/mesacentro.webp',
      nome: 'Mesa de Centro',
      descricao: 'Para apoiar os pés enquanto maratonamos Netflix (e pra não derrubar pipoca no chão)!',
      preco: 'R$ 164,36',
    },
    {
      id: '23',
      imagem: '/images/presentes/mesaapoio.webp',
      nome: 'Mesa de Apoio',
      descricao: 'Para colocar o controle remoto, o celular e o copo de vinho (porque a gente é multitarefa até relaxando)!',
      preco: 'R$ 183,59',
    },
    {
      id: '24',
      imagem: '/images/presentes/bancada.webp',
      nome: 'Bancada de Cozinha',
      descricao: 'Onde a mágica da culinária (e da bagunça) acontece! Só falta a pizza!',
      preco: 'R$ 177,88',
    },
    {
      id: '25',
      imagem: '/images/presentes/cadeirajantar.webp',
      nome: 'Cadeiras para Mesa de Jantar',
      descricao: 'Para acomodar a galera nos churrascos de domingo (e pra gente fingir que somos adultos)!',
      preco: 'R$ 187,11',
    },
    {
      id: '26',
      imagem: '/images/presentes/pipoca.webp',
      nome: 'Pipoqueira',
      descricao: 'Para esconder as evidências dos nossos ataques à geladeira de madrugada!',
      preco: 'R$ 189,90',
    },
    {
      id: '27',
      imagem: '/images/presentes/rack.webp',
      nome: 'Rack para Sala',
      descricao: 'Para sustentar a TV gigante (e a nossa preguiça de domingo)!',
      preco: 'R$ 575,37',
    },
    {
      id: '28',
      imagem: '/images/presentes/deus.webp',
      nome: 'Intervencão',
      descricao: 'Se por uma intervenção divina vc se sentir tocado.',
      preco: 'R$ 2000,00',
    },
    {
      id: '29',
      imagem: '/images/presentes/casaljantar.webp',
      nome: 'Primeiro jantar romantico',
      descricao: 'Primeiro jantar romântico do casal',
      preco: 'R$ 200,00',
    },
    {
      id: '30',
      imagem: '/images/presentes/idosos.webp',
      nome: 'Aposentadoria do casal',
      descricao: 'Para que o "felizes para sempre" não dependa da Previdência Social.',
      preco: 'R$ 1000,00'
    },
    {
      id: '31',
      imagem: '/images/presentes/louca.webp',
      nome: 'Escorredor de Louça',
      descricao: 'Porque até a pia merece um spa day.',
      preco: 'R$ 129,00'
    },
    {
      id: '32',
      imagem: '/images/presentes/ventilador.webp',
      nome: 'Ventilador',
      descricao: 'Para quando o amor esquentar demais.',
      preco: 'R$ 199,99'
    },
    {
      id: '33',
      imagem: '/images/presentes/cafeteira.webp',
      nome: 'Cafeteira',
      descricao: 'Para manter o romance acordado após as noites de Netflix.',
      preco: 'R$ 194,90'
    },
    {
      id: '34',
      imagem: '/images/presentes/netflix.webp',
      nome: '1 ano de Netflix',
      descricao: 'Para os dias em que "eu te amo" soa como "vamos maratonar uma série".',
      preco: 'R$ 250,80'
    },
    {
      id: '35',
      imagem: '/images/presentes/alexa.webp',
      nome: 'Alexa',
      descricao: 'Para quando a noiva precisar de alguém além do noivo para ouvir suas ordens.',
      preco: 'R$ 300,00'
    },
    {
      id: '36',
      imagem: '/images/presentes/mop.webp',
      nome: 'Mop Giratório',
      descricao: 'Para dançar valsa enquanto limpa a casa.',
      preco: 'R$ 96,00'
    },
    {
      id: '37',
      imagem: '/images/presentes/cozinha.webp',
      nome: 'Armário de cozinha',
      descricao: 'Porque o amor vem da barriga, mas a louça suja não se guarda sozinha.',
      preco: 'R$ 949,99'
    },
    {
      id: '38',
      imagem: '/images/presentes/nupicias.webp',
      nome: 'Roupa para noiva na noite de núpcias',
      descricao: 'Para noiva arrasar na noite de núpcias',
      preco: 'R$ 120,00'
    },
    {
      id: '39',
      imagem: '/images/presentes/despertador.webp',
      nome: 'Despertador para noiva',
      descricao: 'Para acordar a tempo de dizer "eu te amo" antes do café.',
      preco: 'R$ 110,00'
    },
    {
      id: '40',
      imagem: '/images/presentes/culinaria.webp',
      nome: 'Curso de culinária para o noivo',
      descricao: 'Para que o noivo não confunda sal com açúcar e estrague o doce da vida a dois.',
      preco: 'R$ 220,00'
    },
    {
      id: '41',
      imagem: '/images/presentes/maracujina.webp',
      nome: 'Maracujina',
      descricao: 'Para os momentos em que contar até dez não é suficiente.',
      preco: 'R$ 70,00'
    },
    {
      id: '42',
      imagem: '/images/presentes/tampao.webp',
      nome: 'Tampão de ouvido',
      descricao: 'Para a noiva dormir em paz, mesmo quando o noivo roncar mais alto que um show de rock.',
      preco: 'R$ 80,00'
    },
    {
      id: '43',
      imagem: '/images/presentes/engov.webp',
      nome: 'Open Engov',
      descricao: 'Para curar a ressaca do amor (ou da festa).',
      preco: 'R$ 100,00'
    },
    {
      id: '44',
      imagem: '/images/presentes/visita.webp',
      nome: 'Prioridade de visita',
      descricao: 'Para quem quer ser o primeiro a ver o ninho de amor (e ajudar a arrumar).',
      preco: 'R$ 230,00'
    },
    {
      id: '45',
      imagem: '/images/presentes/lanchinho.webp',
      nome: 'Lanchinho da madrugada',
      descricao: 'Para aquelas fomes que só aparecem quando todo mundo já foi dormir.',
      preco: 'R$ 90,00'
    },
    {
      id: '46',
      imagem: '/images/presentes/jogarbuque.webp',
      nome: 'Jogar buquê na sua direção',
      descricao: 'Aumente suas chances de ser o próximo a dizer "sim"!',
      preco: 'R$ 240,00'
    },
    {
      id: '47',
      imagem: '/images/presentes/parente.webp',
      nome: 'Seja nosso parente favorito',
      descricao: 'Para entrar na disputa pelo título de melhor parente do ano.',
      preco: 'R$ 1200,00'
    },
    {
      id: '48',
      imagem: '/images/presentes/boletoatrasado.webp',
      nome: 'Boleto atrasado',
      descricao: 'Ajude os noivos a começar a vida de casados sem dívidas do passado.',
      preco: 'R$ 800,00'
    },
    {
      id: '49',
      imagem: '/images/presentes/pedidocasamento.webp',
      nome: 'Fazer pedido de casamento',
      descricao: 'Para quem quer roubar a cena e sair noiv@ também!',
      preco: 'R$ 900,00'
    },
    {
      id: '50',
      imagem: '/images/presentes/garantesol.webp',
      nome: 'Garantindo o sol',
      descricao: 'Para um dia ensolarado, mesmo que São Pedro não colabore.',
      preco: 'R$ 1100,00'
    },
    {
      id: '51',
      imagem: '/images/presentes/tv43.webp',
      nome: 'TV Samsung',
      descricao: 'Para os momentos em que o casal precisa de um tempo... com a Netflix.',
      preco: 'R$ 1763,00'
    },
    {
      id: '52',
      imagem: '/images/presentes/pixdevendo.webp',
      nome: 'Pix devendo',
      descricao: 'Para quitar aquela dívida eterna do churrasco de 2010.',
      preco: 'R$ 1300,00'
    },
    {
      id: '53',
      imagem: '/images/presentes/luademel.webp',
      nome: 'Lua de mel',
      descricao: 'Contribua para que a viagem de lua de mel seja inesquecível (ou pelo menos postável no Instagram).',
      preco: 'R$ 1500,00'
    },
    {
      id: '54',
      imagem: '/images/presentes/massagem.webp',
      nome: 'Massagem para os noivos',
      descricao: 'Para relaxar depois de carregar o peso do grande dia.',
      preco: 'R$ 240,00'
    },
    {
      id: '55',
      imagem: '/images/presentes/hotelfazenda.webp',
      nome: 'Hotel fazenda',
      descricao: 'Para fugir da rotina e curtir um fim de semana com cheiro de mato e café da manhã de hotel.',
      preco: 'R$ 750,00'
    },
    {
      id: '56',
      imagem: '/images/presentes/ferro.webp',
      nome: 'Ferro',
      descricao: 'Para passar os dias depois do casamento com muito amor (e sem nenhuma ruga)!',
      preco: 'R$ 69,90'
    },
    {
      id: '57',
      imagem: '/images/presentes/passadeira.webp',
      nome: 'Passadeira',
      descricao: 'Para desamassar qualquer problema (e deixar a vida a dois impecável)!',
      preco: 'R$ 145,00'
    },
    {
      id: '58',
      imagem: '/images/presentes/purificador.webp',
      nome: 'Purificador',
      descricao: 'Para purificar o amor (e a água que a gente bebe)! Porque um brinde à felicidade pede um líquido especial!',
      preco: 'R$ 145,00'
    },
    {
      id: '59',
      imagem: '/images/presentes/mangueira.webp',
      nome: 'Mangueira de led',
      descricao: 'Para iluminar os melhores momentos do casal com um toque mágico!',
      preco: 'R$ 180,00'
    },
    {
      id: '60',
      imagem: '/images/presentes/kitbanheiro.webp',
      nome: 'Kit Acessórios Para Banheiro',
      descricao: 'Organização e estilo para o banheiro do casal.',
      preco: 'R$ 80,00'
    },
    {
      id: '61',
      imagem: '/images/presentes/toalhas.webp',
      nome: 'Toalhas',
      descricao: 'Maciez e conforto para o dia a dia do casal.',
      preco: 'R$ 180,00'
    },
    {
      id: '62',
      imagem: '/images/presentes/cabeceira.webp',
      nome: 'Mesa de Cabeceira',
      descricao: 'Praticidade e elegância para o quarto.',
      preco: 'R$ 170,00'
    },
    {
      id: '63',
      imagem: '/images/presentes/suporte.jpg',
      nome: 'Estante de parede',
      descricao: 'Para os livros e objetos decorativos do casal.',
      preco: 'R$ 230,00'
    },
    {
      id: '64',
      imagem: '/images/presentes/pousada.webp',
      nome: 'Fim de semana na pousada',
      descricao: 'Uma escapada romântica para relaxar e curtir a natureza.',
      preco: 'R$ 400,00'
    },
    {
      id: '65',
      imagem: '/images/presentes/cadeira.webp',
      nome: 'Cadeira',
      descricao: 'Conforto e ergonomia para o home office.',
      preco: 'R$ 220,00'
    },
    {
      id: '66',
      imagem: '/images/presentes/mantimentos.webp',
      nome: 'Potes de mantimentos',
      descricao: 'Para manter a cozinha organizada e os alimentos frescos por mais tempo.',
      preco: 'R$ 116,00'
    },
    {
      id: '67',
      imagem: '/images/presentes/jarra.webp',
      nome: 'Jarra de vidro',
      descricao: 'Elegância para servir sucos e água fresca.',
      preco: 'R$ 96,90'
    },
    {
      id: '68',
      imagem: '/images/presentes/suco.webp',
      nome: 'Espremedor de Frutas',
      descricao: 'Sucos naturais e saudáveis a qualquer hora.',
      preco: 'R$ 77,50'
    },
    {
      id: '69',
      imagem: '/images/presentes/cochao.webp',
      nome: 'Colchão para visita',
      descricao: 'Para receber amigos e familiares com conforto.',
      preco: 'R$ 400,00'
    },
    {
      id: '70',
      imagem: '/images/presentes/base.webp',
      nome: 'Base da cama',
      descricao: 'Modernidade e sofisticação para o quarto do casal.',
      preco: 'R$ 357,00'
    },
    {
      id: '71',
      imagem: '/images/presentes/fruteira.webp',
      nome: 'Fruteira multiuso',
      descricao: 'Organização e praticidade para a cozinha.',
      preco: 'R$ 380,00'
    },
    {
      id: '72',
      imagem: '/images/presentes/cabeceira.webp',
      nome: 'Cabeceira',
      descricao: 'Um toque de charme e elegância para o quarto.',
      preco: 'R$ 137,75'
    },
    {
      id: '73',
      imagem: '/images/presentes/ferramenta.webp',
      nome: 'Ferramentas',
      descricao: 'Para os pequenos reparos do dia a dia.',
      preco: 'R$ 88,00'
    },
    {
      id: '74',
      imagem: '/images/presentes/furadeira.webp',
      nome: 'Furadeira',
      descricao: 'Para os projetos e reparos mais elaborados.',
      preco: 'R$ 162,00'
    },
    {
      id: '75',
      imagem: '/images/presentes/tabua.webp',
      nome: 'Tabua giratoria',
      descricao: 'Tabua giratoria de mesa.',
      preco: 'R$ 73,00'
    },
    {
      id: '76',
      imagem: '/images/presentes/extrator.jpg',
      nome: 'Extrator de suco',
      descricao: 'Extrator de suco',
      preco: 'R$ 150,00'
    },
    {
      id: '77',
      imagem: '/images/presentes/bowl.jpg',
      nome: 'bowl inox',
      descricao: 'bowl inox.',
      preco: 'R$ 129,00'
    },
    {
      id: '78',
      imagem: '/images/presentes/aquecedor.jpg',
      nome: 'Aquecedor de ar',
      descricao: 'Aquecedor de ar.',
      preco: 'R$ 98,00'
    },
    


    // Adicione mais presentes conforme necessário
  ];

  // Função para embaralhar a lista de presentes
  const shuffleArray = (array: Presente[]) => {
    return array.sort(() => Math.random() - 0.5);
  };

  // Embaralhar presentes ao carregar a página
  const [presentesEmbaralhados, setPresentesEmbaralhados] = useState<Presente[]>([]);

  useEffect(() => {
    setPresentesEmbaralhados(shuffleArray(presentes));
  }, []);

  // Paginação
  const [paginaAtual, setPaginaAtual] = useState(1);
  const presentesPorPagina = 12;

  const ultimoPresente = paginaAtual * presentesPorPagina;
  const primeiroPresente = ultimoPresente - presentesPorPagina;
  const presentesAtuais = presentesEmbaralhados.slice(primeiroPresente, ultimoPresente);

  const numeroDePaginas = Math.ceil(presentesEmbaralhados.length / presentesPorPagina);

  const proximaPagina = () => {
    if (paginaAtual < numeroDePaginas) {
      setPaginaAtual(paginaAtual + 1);
    }
  };

  const paginaAnterior = () => {
    if (paginaAtual > 1) {
      setPaginaAtual(paginaAtual - 1);
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="bg-[#E2E8F4] py-20"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Lista de Presentes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {presentesAtuais.map((presente) => (
            <motion.div key={presente.id} variants={itemVariants} className="flex flex-col h-full">
              <div className="bg-white rounded-3xl shadow-md overflow-hidden relative flex flex-col justify-between h-full p-4">
                <img
                  src={presente.imagem}
                  alt={presente.nome}
                  className="w-full h-56 p-2 object-contain"
                />
                <div className="p-4 flex-grow">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">{presente.nome}</h3>
                  <p className="text-gray-600 text-sm">{presente.descricao}</p>
                </div>
                <Link href={`/${presente.id}`} passHref>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-800 p-2 pr-10">{presente.preco}</span>
                    <button className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 text-white py-1 my-2 px-6 rounded-lg font-medium text-md cursor-pointer shadow-md hover:from-blue-700 hover:to-blue-800 transition-colors">
                      Presentear
                    </button>
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Paginação */}
        <div className="flex justify-center items-center mt-10 space-x-2">
          <button
            onClick={paginaAnterior}
            disabled={paginaAtual === 1}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-2 rounded-full disabled:opacity-50 flex items-center justify-center"
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
          <div className="flex flex-wrap justify-center space-x-1">
            {Array.from({ length: numeroDePaginas }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setPaginaAtual(i + 1)}
                className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-lg ${paginaAtual === i + 1 ? 'bg-blue-500 text-white' : ''
                  }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
          <button
            onClick={proximaPagina}
            disabled={paginaAtual === numeroDePaginas}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-2 rounded-full disabled:opacity-50 flex items-center justify-center"
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
    </motion.div>
  );
};

export default ListaDePresentes;