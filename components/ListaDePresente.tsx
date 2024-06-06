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
      imagem: '/images/presentes/frigideira.webp',
      nome: 'Frigideira',
      descricao: 'Para fritar o amor (e os ovos do café da manhã)!',
      preco: 'R$ 172,00',
    },
    {
      id: '2',
      imagem: '/images/presentes/aspirador.webp',
      nome: 'Aspirador de pó',
      descricao: 'Para sugar toda a poeira da felicidade (e os pelos do gato)!',
      preco: 'R$ 142,49',
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
      id: '5',
      imagem: '/images/presentes/copo.webp',
      nome: 'Copos',
      descricao: 'Para brindar ao nosso "felizes para sempre"! (e pra tomar água também)',
      preco: 'R$ 59,90',
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
      imagem: '/images/presentes/panela.webp',
      nome: 'Panela 3em1',
      descricao: 'Uma panela para todas as receitas do nosso amor (menos para fazer drama, essa a gente já tem)!',
      preco: 'R$ 78,99',
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
      imagem: '/images/presentes/pressao.webp',
      nome: 'Panela de Pressão Elétrica',
      descricao: 'Para cozinhar o feijão da felicidade em tempo recorde (porque a gente não vê a hora de casar)!',
      preco: 'R$ 365,66',
    },
    {
      id: '11',
      imagem: '/images/presentes/arroz.webp',
      nome: 'Panela de Arroz',
      descricao: 'Para fazer o arroz soltinho da vida a dois (sem grudar, como nosso amor)!',
      preco: 'R$ 189,90',
    },
    {
      id: '12',
      imagem: '/images/presentes/kitpanela.webp',
      nome: 'Jogo de Panelas',
      descricao: 'Para equipar a nossa cozinha com muito amor (e panelas de qualidade)!',
      preco: 'R$ 394,20',
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
      imagem: '/images/presentes/jantar.webp',
      nome: 'Aparelho de Jantar',
      descricao: 'Para receber a família e os amigos com elegância (e servir jantares inesquecíveis)!',
      preco: 'R$ 382,90',
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
      imagem: '/images/presentes/geladeira.webp',
      nome: 'Geladeira',
      descricao: 'Para preparar sucos e vitaminas cheios de amor (e saúde)!',
      preco: 'R$ 2899,00',
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
      descricao: 'Ajudinha para a aposentadoria dos noivos',
      preco: 'R$ 1000,00',
    },
    {
      id: '31',
      imagem: '/images/presentes/louca.webp',
      nome: 'Escorredor de Louça',
      descricao: 'Escorredor de Louça',
      preco: 'R$ 129,00',
    },
    {
      id: '32',
      imagem: '/images/presentes/ventilador.webp',
      nome: 'Ventilador',
      descricao: 'Ventilador',
      preco: 'R$ 199,99',
    },
    {
      id: '33',
      imagem: '/images/presentes/cafeteira.webp',
      nome: 'Cafeteira',
      descricao: 'Cafeteira',
      preco: 'R$ 194,90',
    },
    {
      id: '34',
      imagem: '/images/presentes/netflix.webp',
      nome: '1 ano de netflix',
      descricao: '1 ano de netflix para os noivos',
      preco: 'R$ 250,80',
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
          {presentesEmbaralhados.map((presente) => (
            <motion.div key={presente.id} variants={itemVariants} className="flex flex-col h-full">
              <div className="bg-white rounded-3xl shadow-md overflow-hidden relative flex flex-col justify-between h-full p-4">
                <img
                  src={presente.imagem}
                  alt={presente.nome}
                  className="w-full h-56 p-2 object-cover"
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
      </div>
    </motion.div>
  );
};

export default ListaDePresentes;
