// components/Galeria.tsx
import React from 'react';
import PhotoAlbum, { Photo } from 'react-photo-album';

// Substitua os caminhos das imagens pelos caminhos das suas imagens reais
const photos: Photo[] = [

  {
    src: '/images/foto-01.webp',
    width: 3,
    height: 4,
    alt: 'Descrição da imagem'
  },
  {
    src: '/images/capa.webp',
    width: 4,
    height: 3,
    alt: 'Descrição da imagem'
  },

  {
    src: '/images/foto-02.webp',
    width: 3,
    height: 4,
    alt: 'Descrição da imagem'
  },

  {
    src: '/images/foto-03.webp',
    width: 3,
    height: 4,
    alt: 'Descrição da imagem'
  },
  {
    src: '/images/foto-11.webp',
    width: 3,
    height: 4,
    alt: 'Descrição da imagem'
  },


  {
    src: '/images/foto-06.webp',
    width: 3,
    height: 4,
    alt: 'Descrição da imagem'
  },
  {
    src: '/images/foto-08.webp',
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
    src: '/images/foto-04.webp',
    width: 4,
    height: 3,
    alt: 'Descrição da imagem'
  },
  

  // Repita este objeto para adicionar mais imagens
];

const Galeria: React.FC = () => {
  return (
    <div style={{ padding: '50px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px', fontFamily: 'Elegant Script, cursive', fontSize: '3rem' }}>Nossa Galeria</h2>
      <PhotoAlbum layout="masonry" columns={4} photos={photos} />
    </div>
  );
};

export default Galeria;
