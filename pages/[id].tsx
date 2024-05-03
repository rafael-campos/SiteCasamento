import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { FaHeart } from 'react-icons/fa';
import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar';

// Interface para definir a estrutura de cada presente
interface Presente {
    id: string;
    imagem: string;
    nome: string;
    descricao: string;
    preco: string;
}

// Dados fictícios dos presentes
const presentes: Presente[] = [
    {
        id: '1',
        imagem: '/images/presentes/jantar.webp',
        nome: 'Jogo de Jantar de Porcelana',
        descricao: 'Um elegante jogo de jantar para 12 pessoas, perfeito para ocasiões especiais.',
        preco: 'R$ 1.200,00',
    },
    {
        id: '2',
        imagem: '/images/presentes/faqueiro.webp',
        nome: 'Jogo de Faqueiro de Aço Inoxidável',
        descricao: 'Um conjunto completo de faqueiros de alta qualidade para 12 pessoas.',
        preco: 'R$ 800,00',
    },
    {
        id: '3',
        imagem: '/images/presentes/cafeteira.webp',
        nome: 'Cafeteira Expresso',
        descricao: 'Uma cafeteira expresso para os amantes de café, perfeita para preparar deliciosas bebidas em casa.',
        preco: 'R$ 500,00',
    },
    // Adicione mais presentes aqui com IDs diferentes
];

const PresentePage: React.FC = () => {
    const router = useRouter();
    const { id } = router.query; // Extrai o ID da URL

    // Encontra o presente com o ID correspondente
    const presente = presentes.find((p) => p.id === id);

    if (!presente) {
        return <div>Presente não encontrado</div>;
    }

    // Fotos do presente (adicione mais imagens se necessário)
    const fotos = [
        {
            original: presente.imagem,
            thumbnail: presente.imagem,
        },
        // ... adicione mais imagens aqui
    ];

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

                    {/* Galeria de imagens */}
                    <ImageGallery items={fotos} thumbnailPosition="left" autoPlay infinite />

                    {/* Descrição e preço */}
                    <div className="bg-white rounded-lg shadow-md p-8 mt-8">
                        <p className="text-gray-600 text-sm">{presente.descricao}</p>
                        <p className="text-2xl font-bold text-gray-800 mt-4">{presente.preco}</p>
                    </div>

                    {/* Seção de QR Code para Pix (adicione sua própria implementação de QR Code) */}
                    <div className="bg-white rounded-lg shadow-md p-8 mt-8 text-center">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Contribua com o nosso sonho!</h3>
                        <p className="text-gray-600 text-sm">
                            Escaneie o QR Code para enviar um Pix com o valor do presente.
                        </p>
                        {/* Substitua pelo seu componente de QR Code */}
                        <div className="w-48 h-48 mx-auto mt-4 bg-gray-300">
                            {/* QR Code aqui */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PresentePage;
