import React, { useState } from 'react';
import { FaHeart, FaCopy, FaGift } from 'react-icons/fa';
import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar';
import QRCode from 'react-qr-code';
import Link from 'next/link';

// Interface para definir a estrutura de cada presente
interface Presente {
    id: string;
    imagem: string;
    nome: string;
    descricao: string;
    preco: string;
    codigoPix: string; // Adicionado código Pix para cada presente
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
        codigoPix: '00020126720014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250210microondas520400005303986540511.005802BR5922Rafael Henrique Campos6008Brasilia62090505ovucr63042700', // Código Pix para o presente específico
    },
    // ... seus outros presentes ...
];

const PresentePage: React.FC = () => {
    const router = useRouter();
    const { id } = router.query; // Extrai o ID da URL
    const [copied, setCopied] = useState(false);

    // Encontra o presente com o ID correspondente
    const presente = presentes.find((p) => p.id === id);

    // Função para copiar o código Pix
    const copyPixCode = () => {
        if (presente) {
            navigator.clipboard.writeText(presente.codigoPix);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset copied status after 2 seconds
        }
    };

    if (!presente) {
        return <div>Presente não encontrado</div>;
    }

    return (
        <div>
            <Navbar />

            <div className="bg-gray-100 py-20">
                <div className="container mx-auto px-4">
                    {/* Título e ícone de coração */}
                    <div className="flex justify-center items-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-800 mr-4">{presente.nome}</h2>
                        <FaHeart className="text-2xl text-red-500" />
                    </div>

                    {/* Layout de duas colunas */}
                    <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                        {/* Coluna da esquerda: Imagem, descrição e valor */}
                        <div className="md:w-1/2 text-center">
                            <img
                                src={presente.imagem}
                                alt={presente.nome}
                                className="rounded-lg  mb-4 mx-auto"
                                style={{ maxWidth: '300px', height: 'auto' }}
                            />
                            <p className="text-gray-600 text-sm">{presente.descricao}</p>
                            <p className="text-2xl font-bold text-gray-800 mt-4">{presente.preco}</p>
                        </div>

                        {/* Coluna da direita: QR Code e botão de copiar */}
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

                    {/* Seção de endereço para envio de presentes */}
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
                        <a href="https://www.magazineluiza.com.br/aparelho-de-jantar-e-cha-20-pecas-biona-de-ceramica-redondo-branco-e-azul-claro-donna/p/143282000/ud/apja/" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 text-white py-1 px-6 rounded-lg font-medium text-lg cursor-pointer shadow-md hover:from-blue-700 hover:to-blue-800 transition-colors">
                            Ver Produto na Loja
                        </a>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default PresentePage;
