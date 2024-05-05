import React, { useState } from 'react';
import { FaHeart, FaCopy, FaGift } from 'react-icons/fa';
import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar';
import QRCode from 'react-qr-code';

// Interface para definir a estrutura de cada presente
interface Presente {
    id: string;
    imagem: string;
    nome: string;
    descricao: string;
    preco: string;
    codigoPix: string;
    linkProduto: string; // Adicionado link do produto para cada presente
}

// Dados fictícios dos presentes
const presentes: Presente[] = [
    // ... seus outros presentes ...
    {
        id: '1',
        imagem: '/images/presentes/microondas.webp',
        nome: 'Microondas',
        descricao: 'Não tem como hoje em dia ficar sem Micro-ondas não é mesmo?',
        preco: 'R$ 667,00',
        codigoPix: '00020126890014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250227Presenteando um microondas 5204000053039865406667.005802BR5922Rafael Henrique Campos6008Brasilia620905052drin63049C84',
        linkProduto: 'https://www.magazineluiza.com.br/micro-ondas-electrolux-34-litros-meo44/p/eg3ff4ba14/ed/mond/?=&seller_id=carrefouroficial&utm_source=zoom&utm_medium=cpc&utm_content=-un_magalu-ce_b2c-cp&partner_id=62175&bigclid=eyJvZmZlcklkIjoxNjMyMjQ0MDUsInNrdSI6ImVnM2ZmNGJhMTQiLCJncm91cElkIjoiZWczZmY0YmExNCIsImxvZyI6IjAzLzA1LzIwMjQgMDk6MDMifQ&utm_term=3cb9c1cf671a4ce29b8458403f2ce64a&utm_campaign=3cb9c1cf671a4ce29b8458403f2ce64a'
    },
    {
        id: '2',
        imagem: '/images/presentes/aspirador.webp',
        nome: 'Aspirador de Pó',
        descricao: 'Presenteie com esse aspirador de pó',
        preco: 'R$ 142,49',
        codigoPix: '00020126930014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250231Estou enviado o aspirador dr po5204000053039865406142.495802BR5922Rafael Henrique Campos6008Brasilia62090505m1kef63040A10',
        linkProduto: 'https://www.pontofrio.com.br/aspirador-de-po-vertical-2-em-1-mondial-turbo-cycle-ap36-1100w-vermelho-15003643/p/15003651?utm_medium=cpc&utm_source=GP_PLA&IdSku=15003651&idLojista=16&tipoLojista=1P&gclsrc=aw.ds&&utm_campaign=gg_pmax_core_elpo&gad_source=1&gclid=CjwKCAjw3NyxBhBmEiwAyofDYS3_j4kyi1CPg6ENCUSRKW4bovK4nlMff1NVOYGGPg_uA6J5w9qkVBoCr5AQAvD_BwE'
    },
    {
        id: '3',
        imagem: '/images/presentes/sanduicheira.webp',
        nome: 'Misteira',
        descricao: 'Presenteie com essa sanduicheira ',
        preco: 'R$ 129,00',
        codigoPix: '00020126810014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250219Enviando a misteira5204000053039865406129.005802BR5922Rafael Henrique Campos6008Brasilia62090505siowv63043199',
        linkProduto: 'https://www.amazon.com.br/Brit%C3%A2nia-SANDUICHEIRA-GRILL-PRESS-BGR27I/dp/B09WWY48B7/ref=asc_df_B09WWY48B7/?tag=googleshopp00-20&linkCode=df0&hvadid=555495720867&hvpos=&hvnetw=g&hvrand=5768162328902286780&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001585&hvtargid=pla-1689628867581&psc=1&mcid=6811c2f452653d3781966c110612a833'
    },
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

    return (
        <div>
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
                        </div>
                    </div>

                    <div className="mt-16 bg-white rounded-lg shadow-md p-8 text-center">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Endereço para Envio de Presentes</h3>
                        <p className="text-gray-600 text-sm">
                            Caso deseje nos presentear pessoalmente, ficaremos honrados em recebê-los na seguinte localização:
                        </p>
                        <address className="not-italic mt-4 text-gray-600">
                            Rua Fiscal José Pedro, 426<br />
                            Vila Santa Terezinha<br />
                            São João del Rei, MG
                        </address>
                        <FaGift className="text-4xl text-blue-600 mx-auto my-4" />
                        <button onClick={() => openLinkInNewTab(presente.linkProduto)} className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 text-white py-1 px-6 rounded-lg font-medium text-lg cursor-pointer shadow-md hover:from-blue-700 hover:to-blue-800 transition-colors">
                            Ver Produto na Loja
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PresentePage;
