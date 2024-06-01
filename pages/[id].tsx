import React, { useState } from 'react';
import { FaHeart, FaCopy, FaGift, FaWhatsapp } from 'react-icons/fa';
import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar';
import QRCode from 'react-qr-code';
import { Tooltip } from 'antd'; 
import { motion } from 'framer-motion';

// Interface para definir a estrutura de cada presente
interface Presente {
    id: string;
    imagem: string;
    nome: string;
    descricao: string;
    preco: string;
    codigoPix: string;
    linkProduto: string; 
    linkPagamentoCartao: string; 
    enderecoEntrega: number; // 1: Endereço 1, 2: Endereço 2
}

// Dados fictícios dos presentes (Agora com o link de pagamento)
const presentes: Presente[] = [
    {
        id: '1',
        imagem: '/images/presentes/frigideira.webp',
        nome: 'Frigideira antiaderente',
        descricao: 'Pra ajudar agente a nao agarrar comida',
        preco: 'R$ 172,00',
        codigoPix: '00020126730014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250211Frigideira 5204000053039865406172.005802BR5922Rafael Henrique Campos6008Brasilia62090505xpjkq630472B3x',
        linkProduto: 'https://www.magazineluiza.com.br/frigideira-antiaderente-ceramica-cobre-com-tampa-maxchef/p/fdhc2g5406/ud/udfg/?partner_id=64068&utm_source=pdp&utm_medi',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/Q0HAK59N',
        enderecoEntrega: 1 // Endereço 1 (Rua Fiscal José Pedro)
    },
    {
        id: '2',
        imagem: '/images/presentes/aspirador.webp',
        nome: 'Aspirador de Pó',
        descricao: 'Presenteie com esse aspirador de pó',
        preco: 'R$ 142,49',
        codigoPix: '00020126930014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250231Estou enviado o aspirador dr po5204000053039865406142.495802BR5922Rafael Henrique Campos6008Brasilia62090505m1kef63040A10',
        linkProduto: 'https://www.pontofrio.com.br/aspirador-de-po-vertical-2-em-1-mondial-turbo-cycle-ap36-1100w-vermelho-15003643/p/15003651?utm_medium=cpc&utm_source=GP_PLA&IdSku=15003651&idLojista=16&tipoLojista=1P&gclsrc=aw.ds&&utm_campaign=gg_pmax_core_elpo&gad_source=1&gclid=CjwKCAjw3NyxBhBmEiwAyofDYS3_j4kyi1CPg6ENCUSRKW4bovK4nlMff1NVOYGGPg_uA6J5w9qkVBoCr5AQAvD_BwE',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/Q7I5QSFK',
        enderecoEntrega: 2 // Endereço 2 (Rua Ernesto Braga) 
    },
    {
        id: '3',
        imagem: '/images/presentes/sanduicheira.webp',
        nome: 'Misteira',
        descricao: 'Presenteie com essa sanduicheira ',
        preco: 'R$ 129,00',
        codigoPix: '00020126810014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250219Enviando a misteira5204000053039865406129.005802BR5922Rafael Henrique Campos6008Brasilia62090505siowv63043199',
        linkProduto: 'https://www.amazon.com.br/Brit%C3%A2nia-SANDUICHEIRA-GRILL-PRESS-BGR27I/dp/B09WWY48B7/ref=asc_df_B09WWY48B7/?tag=googleshopp00-20&linkCode=df0&hvadid=555495720867&hvpos=&hvnetw=g&hvrand=5768162328902286780&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001585&hvtargid=pla-1689628867581&psc=1&mcid=6811c2f452653d3781966c110612a833',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/Q1PZWGPC',
        enderecoEntrega: 1
    },
    {
        id: '4',
        imagem: '/images/presentes/airflyer.webp',
        nome: 'Airflyer',
        descricao: 'Presenteie com essa airflyer',
        preco: 'R$ 269,00',
        codigoPix: '00020126830014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250221Enviando ima airflyer5204000053039865406269.005802BR5922Rafael Henrique Campos6008Brasilia62090505pa23r63045BCA',
        linkProduto: 'https://www.casasbahia.com.br/fritadeira-eletrica-sem-oleo-air-fryer-mondial-af-30-family-inox-iv-35l-preta-55010765/p/55010765?utm_medium=cpc&utm_source=GP_PLA&IdSku=55010765&idLojista=10037&tipoLojista=1P&gclsrc=aw.ds&&utm_campaign=gg_pmax_core_elpo_apostas&gad_source=4&gclid=CjwKCAjw3NyxBhBmEiwAyofDYc1oTAYDz3eS5d7OVFvhCrpWdr_cdtn25CTXPmbNMS59WHtI0_L5TxoCUVQQAvD_BwE',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/Q8DHEVBO',
        enderecoEntrega: 2
    },
    {
        id: '5',
        imagem: '/images/presentes/copo.webp',
        nome: 'Copos redondos',
        descricao: 'Para brindar com os noivos',
        preco: 'R$ 59,90',
        codigoPix: '00020126670014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250205copos520400005303986540559.905802BR5922Rafael Henrique Campos6008Brasilia620905052t6nj6304C1BD',
        linkProduto: 'https://www.amazon.com.br/dp/B0CPM571Y5?ref=cm_sw_r_apan_dp_F63YR1M1H1DVTKAK01M2&ref_=cm_sw_r_apan_dp_F63YR1M1H1DVTKAK01M2&language=pt-BR',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/Q8DHEVBO', 
        enderecoEntrega: 1 
    },
    {
        id: '6',
        imagem: '/images/presentes/potes.webp',
        nome: 'Potes Hermeticos',
        descricao: 'Para os noivos guardarem salada',
        preco: 'R$ 172,00',
        codigoPix: '00020126670014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250205Potes5204000053039865406172.005802BR5922Rafael Henrique Campos6008Brasilia620905058di5p630494CE',
        linkProduto: 'https://www.amazon.com.br/dp/B07QJXQHQ3?ref=cm_sw_r_apan_dp_PZ7BZ7Y28B4ZD37W0TV6&ref_=cm_sw_r_apan_dp_PZ7BZ7Y28B4ZD37W0TV6&language=pt-BR',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/Q0OS3Y94',
        enderecoEntrega: 1 
    },
    {
        id: '7',
        imagem: '/images/presentes/panela.webp',
        nome: 'Panela 3em1',
        descricao: 'Panela',
        preco: 'R$ 78,99',
        codigoPix: '00020126730014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250211Panela 3em1520400005303986540578.995802BR5922Rafael Henrique Campos6008Brasilia62090505l3xi96304D457',
        linkProduto: 'https://www.amazon.com.br/dp/B0BZ1RJNJ2?ref=cm_sw_r_apan_dp_WQJRGKDFE9Y0GDWMKYEG&ref_=cm_sw_r_apan_dp_WQJRGKDFE9Y0GDWMKYEG&language=pt-BR&th=1',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/QN2EJU44',
        enderecoEntrega: 2 
    },
    {
        id: '8',
        imagem: '/images/presentes/multiprocessador.webp',
        nome: 'Multiprocessador',
        descricao: 'Multiprocessador ',
        preco: 'R$ 145,12',
        codigoPix: '00020126780014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250216Multiprocessador5204000053039865406145.125802BR5922Rafael Henrique Campos6008Brasilia62090505zhdqr6304EA04',
        linkProduto: 'https://www.amazon.com.br/dp/B0876XRYGT?ref=cm_sw_r_apan_dp_4Y5NADY0Y0TBVF58M3WH&ref_=cm_sw_r_apan_dp_4Y5NADY0Y0TBVF58M3WH&language=pt-BR',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/QIOXQLD7',
        enderecoEntrega: 1 
    },
    {
        id: '9',
        imagem: '/images/presentes/travessa.webp',
        nome: 'Travessa',
        descricao: 'Multiprocessador ',
        preco: 'R$ 134,99',
        codigoPix: '00020126780014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250216Multiprocessador5204000053039865406145.125802BR5922Rafael Henrique Campos6008Brasilia62090505zhdqr6304EA04',
        linkProduto: 'https://www.casasbahia.com.br/conjunto-de-travessas-refratarias-marinex-em-vidro---10-pecas-55058982.html',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/Q1EG3C9J', // Adicione o link real de pagamento aqui
        enderecoEntrega: 2
    },
    {
        id: '10',
        imagem: '/images/presentes/pressao.webp',
        nome: 'Panela de Pressão Elétrica 5 Litros',
        descricao: 'Panela de Pressão Elétrica 5 Litros ',
        preco: 'R$ 365,66',
        codigoPix: '00020126780014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250216Multiprocessador5204000053039865406145.125802BR5922Rafael Henrique Campos6008Brasilia62090505zhdqr6304EA04',
        linkProduto: 'https://www.casaevideo.com.br/panela-de-pressao-eletrica-5l-mondial-pe38-preto-com-prata-127v/p',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/Q4JGIOPC', // Adicione o link real de pagamento aqui
        enderecoEntrega: 1
    },
    {
        id: '11',
        imagem: '/images/presentes/arroz.webp',
        nome: 'Panela de arroz',
        descricao: 'Panela Elétrica de Arroz Mondial PE-43 6 Xícaras - Preta/Inox ',
        preco: 'R$ 189,90',
        codigoPix: '00020126780014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250216Multiprocessador5204000053039865406145.125802BR5922Rafael Henrique Campos6008Brasilia62090505zhdqr6304EA04',
        linkProduto: 'https://www.pontofrio.com.br/panela-eletrica-de-arroz-mondial-pe-43-6-xicaras-preta-inox/p/55011884',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/QSFEWYPL', // Adicione o link real de pagamento aqui
        enderecoEntrega: 2
    },
    {
        id: '12',
        imagem: '/images/presentes/kitpanela.webp',
        nome: 'Jogo Panelas 5 Peças',
        descricao: 'Jogo Panelas 5 Peças Sartin Champanhe com Frigideira Antiaderente - Mimo Style ',
        preco: 'R$ 394,20',
        codigoPix: '00020126780014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250216Multiprocessador5204000053039865406145.125802BR5922Rafael Henrique Campos6008Brasilia62090505zhdqr6304EA04',
        linkProduto: 'https://www.magazineluiza.com.br/jogo-panelas-5-pecas-sartin-champanhe-com-frigideira-antiaderente-mimo-style/p/jjbk6g7073/ud/cjpn/?partner_id=64068&utm_source=pdp&utm_medium=share',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/QMJ75WTM', // Adicione o link real de pagamento aqui
        enderecoEntrega: 1
    },
    {
        id: '13',
        imagem: '/images/presentes/kitchurrasco.webp',
        nome: 'Jogo Panelas 5 Peças',
        descricao: 'Kit Churrasco Ou Cozinha 25 Peças Com Maleta Em Couro ',
        preco: 'R$ 193,00',
        codigoPix: '00020126780014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250216Multiprocessador5204000053039865406145.125802BR5922Rafael Henrique Campos6008Brasilia62090505zhdqr6304EA04',
        linkProduto: 'https://produto.mercadolivre.com.br/MLB-1251203109-kit-churrasco-ou-cozinha-25-pecas-com-maleta-em-couro-_JM?attributes=COLOR_SECONDARY_COLOR:QmxhY2s=',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/QR3BUQP1', // Adicione o link real de pagamento aqui
        enderecoEntrega: 2
    },
    {
        id: '14',
        imagem: '/images/presentes/jogotalheres.webp',
        nome: 'Jogo Panelas 5 Peças',
        descricao: 'Jogo Talheres Aço Inox Faqueiro Malibu 91 Peças Tramontina ',
        preco: 'R$ 284,05',
        codigoPix: '00020126780014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250216Multiprocessador5204000053039865406145.125802BR5922Rafael Henrique Campos6008Brasilia62090505zhdqr6304EA04',
        linkProduto: 'https://produto.mercadolivre.com.br/MLB-3662020297-jogo-talheres-aco-inox-faqueiro-malibu-91-pecas-tramontina-_JM?attributes=COLOR_SECONDARY_COLOR:UHJhdGVhZG8=',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/QFDJRQED', // Adicione o link real de pagamento aqui
        enderecoEntrega: 1
    },
    {
        id: '15',
        imagem: '/images/presentes/jantar.webp',
        nome: 'Aparelho Jantar',
        descricao: 'Aparelho Jantar e Chá 30 Pçs Biona Donna Cena Inglesa',
        preco: 'R$ 382,90',
        codigoPix: '00020126780014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250216Multiprocessador5204000053039865406145.125802BR5922Rafael Henrique Campos6008Brasilia62090505zhdqr6304EA04',
        linkProduto: 'https://www.amazon.com.br/dp/B09RGTPPT7?ref=cm_sw_r_apan_dp_D6A6Z8WH3S9VRBSSAWF7&ref_=cm_sw_r_apan_dp_D6A6Z8WH3S9VRBSSAWF7&language=pt-BR',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/Q161RMJR', // Adicione o link real de pagamento aqui
        enderecoEntrega: 2
    },
    {
        id: '16',
        imagem: '/images/presentes/batedeira.webp',
        nome: 'Batedeira',
        descricao: 'Batedeira Planetária Britânia BBPE01 12 Velocidades 4L 500W 110v',
        preco: 'R$ 279,90',
        codigoPix: '00020126780014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250216Multiprocessador5204000053039865406145.125802BR5922Rafael Henrique Campos6008Brasilia62090505zhdqr6304EA04',
        linkProduto: 'https://www.amazon.com.br/Batedeira-Planet%C3%A1ria-Brit%C3%A2nia-BBPE01-Velocidades/dp/B0CN1PFKTL/ref=sr_1_3?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=9PYUI8XG8HI7&dib=eyJ2IjoiMSJ9.5rQ1kTa_pTQj8qDG6r8etDrMexbGMHRc615eu2t3QFp7b77u8TR0W9kcs-6-sENsAaB2qFLc-zrVzlLYQn9Z5MtX7rP0QiB17JleYTSK2FSf4lcGY0UrmdD0UMexjwCEXxErFXd4qZxl35jQ_u8uYK1XtkATRIk663EiYYXPX3b8Fcg7yk8FiUVszR678VjSMl9WRIX1UFjuKd_b_GM-aNVgY1LATWedzj3wQ5fXGiw.bLOYfgh_G7p0a4Li2n0-EewEXKQYg9XMefXjOtGYx6M&dib_tag=se&keywords=Batedeira+Planet%C3%A1ria+Brit%C3%A2nia+BBPE01+12+Velocidades+4L+500W+110V&qid=1717087488&s=kitchen&sprefix=batedeira+planet%C3%A1ria+brit%C3%A2nia+bbpe01+12+velocidades+4l+500w+110v%2Ckitchen%2C281&sr=1-3&ufe=app_do%3Aamzn1.fos.a492fd4a-f54d-4e8d-8c31-35e0a04ce61e',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/QHHDGX4L', // Adicione o link real de pagamento aqui
        enderecoEntrega: 1
    },
    {
        id: '17',
        imagem: '/images/presentes/mixer.webp',
        nome: 'Mixer',
        descricao: 'Mixer 3 em 1, 400W, 2 velocidades, Bmx400, Preto, 110v, Britânia',
        preco: 'R$ 199,00',
        codigoPix: '00020126780014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250216Multiprocessador5204000053039865406145.125802BR5922Rafael Henrique Campos6008Brasilia62090505zhdqr6304EA04',
        linkProduto: 'https://www.amazon.com.br/dp/B08YHR9C4S?ref=cm_sw_r_apan_dp_DF9TQMEFGR2PVV7DN8VD&ref_=cm_sw_r_apan_dp_DF9TQMEFGR2PVV7DN8VD&language=pt-BR&th=1',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/QV1HPUUH', // Adicione o link real de pagamento aqui
        enderecoEntrega: 2
    },
    {
        id: '18',
        imagem: '/images/presentes/organizador.webp',
        nome: 'Organizador de geladeira',
        descricao: 'Organizador de geladeira',
        preco: 'R$ 114,99',
        codigoPix: '00020126780014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250216Multiprocessador5204000053039865406145.125802BR5922Rafael Henrique Campos6008Brasilia62090505zhdqr6304EA04',
        linkProduto: 'https://www.amazon.com.br/dp/B0CCLM43XP?ref=cm_sw_r_apan_dp_C7DS3PXQTDA2DTMJFYR2&ref_=cm_sw_r_apan_dp_C7DS3PXQTDA2DTMJFYR2&language=pt-BR',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/QO361MUC', // Adicione o link real de pagamento aqui
        enderecoEntrega: 1
    }
    // ... seus outros presentes ...
];

const PresentePage: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;
    const [copied, setCopied] = useState(false);

    const presente = presentes.find((p) => p.id === id);

    const copyPixCode = () => {
        if (presente) {
            navigator.clipboard.writeText(presente.codigoPix);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const openLinkInNewTab = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    if (!presente) {
        return <div>Presente não encontrado</div>;
    }

    // Lógica para exibir o endereço de entrega correto
    const enderecoEntrega = presente.enderecoEntrega === 1 
        ? (
            <address className="not-italic mt-4 text-gray-600">
                Rua Fiscal José Pedro, 426<br />
                Vila Santa Terezinha<br />
                São João del Rei, MG
            </address>
          )
        : (
            <address className="not-italic mt-4 text-gray-600">
                Rua Ernesto Braga, 61<br />
                Rio das Mortes<br />
                São João del Rei, MG
            </address>
          );

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <Navbar />

            <div className="bg-gray-100 py-20">
                <div className="container mx-auto px-4">
                    <div className="flex justify-center items-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-800 mr-4">{presente.nome}</h2>
                        <FaHeart className="text-2xl text-red-500" />
                    </div>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                        <div className="md:w-1/2 text-center">
                            <img
                                src={presente.imagem}
                                alt={presente.nome}
                                className="rounded-lg mb-4 mx-auto"
                                style={{ maxWidth: '300px', height: 'auto' }}
                            />
                            <p className="text-gray-600 text-sm">{presente.descricao}</p>
                            <p className="text-2xl font-bold text-gray-800 mt-4">{presente.preco}</p>
                        </div>

                        <div className="md:w-1/2 text-center flex flex-col items-center">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Contribua com o nosso sonho!</h3>
                            <p className="text-gray-600 text-sm mb-4">
                                Escaneie o QR Code para enviar um Pix com o valor do presente.
                            </p>
                            {presente.codigoPix && (
                                <QRCode
                                    value={presente.codigoPix}
                                    size={192}
                                    bgColor="#FFFFFF"
                                    fgColor="#000000"
                                    level="Q"
                                    className="mb-4"
                                />
                            )}
                            <button onClick={copyPixCode} className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-1 px-8 rounded-lg font-medium text-lg cursor-pointer shadow-md hover:from-blue-600 hover:to-blue-700 transition-colors flex items-center justify-center">
                                <FaCopy className="mr-2" />
                                {copied ? 'Copiado!' : 'Copiar Pix'}
                            </button>
                            <button onClick={() => openLinkInNewTab(presente.linkPagamentoCartao)} className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-1 px-8 rounded-lg font-medium text-lg cursor-pointer shadow-md hover:from-blue-600 hover:to-blue-700 transition-colors flex items-center justify-center mt-4">
                                Pagar com Cartão
                            </button>
                        </div>
                    </div>

                    <div className="mt-16 bg-white rounded-lg shadow-md p-8 text-center">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Endereço para Envio de Presentes</h3>
                        <p className="text-gray-600 text-sm">
                            Caso deseje nos presentear pessoalmente, ficaremos honrados em recebê-los na seguinte localização:
                        </p>
                        {enderecoEntrega} 
                        <FaGift className="text-4xl text-blue-600 mx-auto my-4" />
                        <button onClick={() => openLinkInNewTab(presente.linkProduto)} className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 text-white py-1 px-6 rounded-lg font-medium text-lg cursor-                       pointer shadow-md hover:from-blue-700 hover:to-blue-800 transition-colors">
                            Ver Produto na Loja
                        </button>
                    </div>

                    {/* Nova área para contatos do WhatsApp */}
                    <div className="mt-8 bg-white rounded-lg shadow-md p-8 text-center">
                        <p className="text-gray-800">
                            Deseja nos presentear com algo diferente ou está com dificuldades para enviar o presente pelo site? Entre em contato conosco!
                        </p>
                        <div className="mt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
                            <a 
                                href="https://wa.me/5532999057760" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition duration-300"
                            >
                                <FaWhatsapp className="mr-2 " /> Falar com Rafael
                            </a>
                            <a 
                                href="https://wa.me/5532984387925" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition duration-300"
                            >
                                <FaWhatsapp className="mr-2" /> Falar com Mirelle
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <Tooltip title="Dúvidas?">
                <a
                    href="https://wa.me/553299057760"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fixed bottom-6 right-6 md:w-14 w-10 h-10 p-2 md:p-3 md:h-14 bg-green-500 hover:bg-green-900 flex items-center justify-center rounded-full transition-colors duration-300 z-50 mx-[3%] mb-[2%] text-white"
                >
                    <FaWhatsapp size="80%" />
                </a>
            </Tooltip>
        </motion.div>
    );
};

export default PresentePage;