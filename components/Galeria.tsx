import React from 'react';
import PhotoAlbum, { Photo } from 'react-photo-album';

// Substitua os caminhos das imagens pelos caminhos das suas imagens reais
const photos: Photo[] = [

  {
    src: '/images/foto-1.webp',
    width: 3,
    height: 4,
    alt: 'Descrição da imagem'
  },
  {
    src: '/images/foto-7.webp',
    width: 4,
    height: 3,
    alt: 'Descrição da imagem'
  },

  {
    src: '/images/foto-2.webp',
    width: 3,
    height: 4,
    alt: 'Descrição da imagem'
  },

  {
    src: '/images/foto-3.webp',
    width: 3,
    height: 4,
    alt: 'Descrição da imagem'
  },
  {
    src: '/images/foto-5.webp',
    width: 3,
    height: 4,
    alt: 'Descrição da imagem'
  },


  {
    src: '/images/foto-6.webp',
    width: 3,
    height: 4,
    alt: 'Descrição da imagem'
  },
  {
    src: '/images/foto-8.webp',
    width: 3,
    height: 4,
    alt: 'Descrição da imagem'
  },
  {
    src: '/images/foto-07.webp',
    width: 3,
    height: 4,
    alt: 'Descrição da imagem'
  },
  {
    src: '/images/foto-4.webp',
    width: 4,
    height: 3,
    alt: 'Descrição da imagem'
  },
  

  // Repita este objeto para adicionar mais imagens
];

const Galeria: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-10"> 
      <h2 className="text-center text-3xl font-cursive mb-8">Nossa Galeria</h2>

      <PhotoAlbum
        layout="masonry"
        photos={photos}
        columns={(containerWidth) => {
          if (containerWidth < 640) return 1; // 1 coluna em telas pequenas
          if (containerWidth < 768) return 2; // 2 colunas em telas médias
          if (containerWidth < 1024) return 3; // 3 colunas em telas grandes
          return 4; // 4 colunas em telas extra grandes
        }}
      />
    </div>
  );
};

export default Galeria;