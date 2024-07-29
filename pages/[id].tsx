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
    codigoPix?: string; // Opcional para presentes fictícios
    linkProduto?: string; // Opcional para presentes fictícios
    linkPagamentoCartao?: string; // Opcional para presentes fictícios
    enderecoEntrega?: number; // 1: Endereço 1, 2: Endereço 2, undefined: Presente fictício
    tipo: 'real' | 'ficticio';
}

// Dados fictícios dos presentes (Agora com o link de pagamento)
const presentes: Presente[] = [
    {
        id: '1',
        imagem: '/images/presentes/jardim.webp',
        nome: 'Jardim Vertical',
        descricao: 'Para colocar plantinhas',
        preco: 'R$ 95,50',
        codigoPix: '00020126780014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250216jardim vertical 520400005303986540595.505802BR5922Rafael Henrique Campos6008Brasilia62090505a942063041F87',
        linkProduto: 'https://www.amazon.com.br/Brit%C3%A2nia-SANDUICHEIRA-GRILL-PRESS-BGR27I/dp/B09WWY48B7/ref=asc_df_B09WWY48B7/?tag=googleshopp00-20&linkCode=df0&hvadid=555495720867&hvpos=&hvnetw=g&hvrand=5768162328902286780&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001585&hvtargid=pla-1689628867581&psc=1&mcid=6811c2f452653d3781966c110612a833',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/QSL8FG3G',
        enderecoEntrega: 1,
        tipo: 'real',
    },
    {
        id: '2',
        imagem: '/images/presentes/chaleira.webp',
        nome: 'Chaleira Eletrica',
        descricao: 'Esquentar agua pro cafe',
        preco: 'R$ 89,90',
        codigoPix: '00020126790014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250217chaleira eletrica520400005303986540589.905802BR5922Rafael Henrique Campos6008Brasilia62090505vlqey63041894',
        linkProduto: 'https://www.amazon.com.br/Brit%C3%A2nia-SANDUICHEIRA-GRILL-PRESS-BGR27I/dp/B09WWY48B7/ref=asc_df_B09WWY48B7/?tag=googleshopp00-20&linkCode=df0&hvadid=555495720867&hvpos=&hvnetw=g&hvrand=5768162328902286780&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001585&hvtargid=pla-1689628867581&psc=1&mcid=6811c2f452653d3781966c110612a833',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/QRSI0NHZ',
        enderecoEntrega: 1,
        tipo: 'real',
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
        enderecoEntrega: 1,
        tipo: 'real',
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
        enderecoEntrega: 2,
        tipo: 'real',
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
        enderecoEntrega: 1,
        tipo: 'real',
    },
    {
        id: '6',
        imagem: '/images/presentes/potes.webp',
        nome: 'Potes Hermeticos',
        descricao: 'Para os noivos guardarem salada',
        preco: 'R$ 172,00',
        codigoPix: '00020126670014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250205Potes5204000053039865406172.005802BR5922Rafael Henrique Campos6008Brasilia620905058di5p630494CE',
        linkProduto: 'https://www.amazon.com.br/dp/B07QJXQHQ3?ref=cm_sw_r_apan_dp_PZ7BZ7Y28B4ZD37W0TV6&ref_=cm_sw_r_apan_dp_PZ7BZ7Y28B4ZD37W0TV6&language=pt-BR',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/QSP1RJ1T',
        enderecoEntrega: 1,
        tipo: 'real',
    },
    {
        id: '7',
        imagem: '/images/presentes/chocolate.webp',
        nome: 'Chocolate',
        descricao: 'Chocolate para adocar os noivos',
        preco: 'R$ 85,00',
        codigoPix: '00020126710014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250209chocolate520400005303986540585.005802BR5922Rafael Henrique Campos6008Brasilia62090505gcq866304D7EC',
        linkProduto: 'https://www.amazon.com.br/dp/B07QJXQHQ3?ref=cm_sw_r_apan_dp_PZ7BZ7Y28B4ZD37W0TV6&ref_=cm_sw_r_apan_dp_PZ7BZ7Y28B4ZD37W0TV6&language=pt-BR',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/QSBS0AWX',
        enderecoEntrega: 1,
        tipo: 'real',
    },
   
    {
        id: '8',
        imagem: '/images/presentes/multiprocessador.webp',
        nome: 'Multiprocessador',
        descricao: 'Multiprocessador ',
        preco: 'R$ 145,12',
        codigoPix: '00020126790014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250217multiprocessador 5204000053039865406145.125802BR5922Rafael Henrique Campos6008Brasilia62090505uxx8l630452D7',
        linkProduto: 'https://www.amazon.com.br/dp/B0876XRYGT?ref=cm_sw_r_apan_dp_4Y5NADY0Y0TBVF58M3WH&ref_=cm_sw_r_apan_dp_4Y5NADY0Y0TBVF58M3WH&language=pt-BR',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/QIOXQLD7',
        enderecoEntrega: 1,
        tipo: 'real',
    },
    {
        id: '9',
        imagem: '/images/presentes/travessa.webp',
        nome: 'Travessa',
        descricao: 'Multiprocessador ',
        preco: 'R$ 134,99',
        codigoPix: '00020126780014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250216Multiprocessador5204000053039865406145.125802BR5922Rafael Henrique Campos6008Brasilia62090505zhdqr6304EA04',
        linkProduto: 'https://www.casasbahia.com.br/conjunto-de-travessas-refratarias-marinex-em-vidro---10-pecas-55058982.html',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/Q1EG3C9J',
        enderecoEntrega: 1,
        tipo: 'real',
    },
    {
        id: '10',
        imagem: '/images/presentes/quadro.webp',
        nome: 'Quadro Decorativo',
        descricao: 'Quadro decorativo',
        preco: 'R$ 215,00',
        codigoPix: '00020126800014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250218quadro decorativo 5204000053039865406215.005802BR5922Rafael Henrique Campos6008Brasilia62090505e7mjh63045B4A',
        linkProduto: 'https://www.casaevideo.com.br/panela-de-pressao-eletrica-5l-mondial-pe38-preto-com-prata-127v/p',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/QAO8NZT6',
        enderecoEntrega: 1,
        tipo: 'real',
    },

    {
        id: '11',
        imagem: '/images/presentes/compra.webp',
        nome: 'Primeira compra',
        descricao: 'Primeira compra de mercado do casal',
        preco: 'R$ 600,00',
        codigoPix: '00020126890014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250227primeira compra no mercado 5204000053039865406600.005802BR5922Rafael Henrique Campos6008Brasilia62090505lve5l63041AC1',
        linkProduto: 'https://www.casaevideo.com.br/panela-de-pressao-eletrica-5l-mondial-pe38-preto-com-prata-127v/p',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/QCETHI8L',
        enderecoEntrega: 1,
        tipo: 'real',
    },
  
    {
        id: '12',
        imagem: '/images/presentes/aparador.webp',
        nome: 'Aparador Balcão/Buffet',
        descricao: 'Aparador Balcão/Buffet para Sala de Jantar Freijo ',
        preco: 'R$ 363,90',
        codigoPix: '00020126770014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250215jogo de panelas5204000053039865406394.205802BR5922Rafael Henrique Campos6008Brasilia620905059bw42630454E7',
        linkProduto: 'https://www.amazon.com.br/dp/B0B46V83KV?tag=presente5-20&linkCode=ogi&th=1',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/QMJ75WTM',
        enderecoEntrega: 1,
        tipo: 'real',
    },
    {
        id: '13',
        imagem: '/images/presentes/kitchurrasco.webp',
        nome: 'kit de churrasco',
        descricao: 'Kit Churrasco Ou Cozinha 25 Peças Com Maleta Em Couro ',
        preco: 'R$ 193,00',
        codigoPix: '00020126790014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250217kit de churrasco 5204000053039865406193.005802BR5922Rafael Henrique Campos6008Brasilia62090505exkgm63043892',
        linkProduto: 'https://produto.mercadolivre.com.br/MLB-1251203109-kit-churrasco-ou-cozinha-25-pecas-com-maleta-em-couro-_JM?attributes=COLOR_SECONDARY_COLOR:QmxhY2s=',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/QR3BUQP1',
        enderecoEntrega: 2,
        tipo: 'real',
    },
    {
        id: '14',
        imagem: '/images/presentes/jogotalheres.webp',
        nome: 'Jogo de talheres',
        descricao: 'Jogo Talheres Aço Inox Faqueiro Malibu 91 Peças Tramontina ',
        preco: 'R$ 284,05',
        codigoPix: '00020126750014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250213jogo talheres5204000053039865406284.055802BR5922Rafael Henrique Campos6008Brasilia62090505dy3i76304865C',
        linkProduto: 'https://produto.mercadolivre.com.br/MLB-3662020297-jogo-talheres-aco-inox-faqueiro-malibu-91-pecas-tramontina-_JM?attributes=COLOR_SECONDARY_COLOR:UHJhdGVhZG8=',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/QFDJRQED',
        enderecoEntrega: 1,
        tipo: 'real',
    },
    {
        id: '15',
        imagem: '/images/presentes/jogocama.webp',
        nome: 'Jogo de cama',
        descricao: 'Jogo De Cama Lençol Premium Casal ',
        preco: 'R$ 206,99',
        codigoPix: '00020126810014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250219aparelho de jantar 5204000053039865406382.905802BR5922Rafael Henrique Campos6008Brasilia62090505qntrh63048B1E',
        linkProduto: 'https://www.amazon.com.br/dp/B09H8Q1S3P?tag=presente5-20&linkCode=ogi&th=1&psc=1',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/Q161RMJR',
        enderecoEntrega: 1,
        tipo: 'real',
    },
    {
        id: '16',
        imagem: '/images/presentes/batedeira.webp',
        nome: 'Batedeira',
        descricao: 'Batedeira Planetária Britânia BBPE01 12 Velocidades 4L 500W 110v',
        preco: 'R$ 279,90',
        codigoPix: '00020126710014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250209batedeira5204000053039865406279.905802BR5922Rafael Henrique Campos6008Brasilia620905055jcc663046AE1',
        linkProduto: 'https://www.amazon.com.br/Batedeira-Planet%C3%A1ria-Brit%C3%A2nia-BBPE01-Velocidades/dp/B0CN1PFKTL/ref=sr_1_3?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=9PYUI8XG8HI7&dib=eyJ2IjoiMSJ9.5rQ1kTa_pTQj8qDG6r8etDrMexbGMHRc615eu2t3QFp7b77u8TR0W9kcs-6-sENsAaB2qFLc-zrVzlLYQn9Z5MtX7rP0QiB17JleYTSK2FSf4lcGY0UrmdD0UMexjwCEXxErFXd4qZxl35jQ_u8uYK1XtkATRIk663EiYYXPX3b8Fcg7yk8FiUVszR678VjSMl9WRIX1UFjuKd_b_GM-aNVgY1LATWedzj3wQ5fXGiw.bLOYfgh_G7p0a4Li2n0-EewEXKQYg9XMefXjOtGYx6M&dib_tag=se&keywords=Batedeira+Planet%C3%A1ria+Brit%C3%A2nia+BBPE01+12+Velocidades+4L+500W+110V&qid=1717087488&s=kitchen&sprefix=batedeira+planet%C3%A1ria+brit%C3%A2nia+bbpe01+12+velocidades+4l+500w+110v%2Ckitchen%2C281&sr=1-3&ufe=app_do%3Aamzn1.fos.a492fd4a-f54d-4e8d-8c31-35e0a04ce61e',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/QHHDGX4L',
        enderecoEntrega: 1,
        tipo: 'real',
    },
    {
        id: '17',
        imagem: '/images/presentes/mixer.webp',
        nome: 'Mixer',
        descricao: 'Mixer 3 em 1, 400W, 2 velocidades, Bmx400, Preto, 110v, Britânia',
        preco: 'R$ 199,00',
        codigoPix: '00020126670014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250205mixer5204000053039865406199.005802BR5922Rafael Henrique Campos6008Brasilia62090505m9mb26304C863',
        linkProduto: 'https://www.amazon.com.br/dp/B08YHR9C4S?ref=cm_sw_r_apan_dp_DF9TQMEFGR2PVV7DN8VD&ref_=cm_sw_r_apan_dp_DF9TQMEFGR2PVV7DN8VD&language=pt-BR&th=1',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/QV1HPUUH',
        enderecoEntrega: 1,
        tipo: 'real',
    },
    {
        id: '18',
        imagem: '/images/presentes/organizador.webp',
        nome: 'Organizador de geladeira',
        descricao: 'Organizador de geladeira',
        preco: 'R$ 114,99',
        codigoPix: '00020126820014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250220realizador geladeira5204000053039865406114.995802BR5922Rafael Henrique Campos6008Brasilia62090505neqvn63049DEA',
        linkProduto: 'https://www.amazon.com.br/dp/B0CCLM43XP?ref=cm_sw_r_apan_dp_C7DS3PXQTDA2DTMJFYR2&ref_=cm_sw_r_apan_dp_C7DS3PXQTDA2DTMJFYR2&language=pt-BR',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/QO361MUC',
        enderecoEntrega: 1,
        tipo: 'real',
    },
    {
        id: '19',
        imagem: '/images/presentes/barro.webp',
        nome: 'Filtro de barro',
        descricao: 'Filtro de barro',
        preco: 'R$ 110,00',
        codigoPix: '00020126780014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250216filtro de barro 5204000053039865406110.005802BR5922Rafael Henrique Campos6008Brasilia620905053ivhn6304F84A',
        linkProduto: 'https://www.amazon.com.br/dp/B07FY23K8B/ref=cm_sw_r_cso_wa_apan_dp_6F69S45Q5GKVJ0M32GJR?starsLeft=1&skipTwisterOG=2&th=1',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/QQ0UAE71',
        enderecoEntrega: 2,
        tipo: 'real',
    },
    {
        id: '20',
        imagem: '/images/presentes/lavadora.webp',
        nome: 'Lavadora',
        descricao: 'Maquina de lavar ',
        preco: 'R$ 1619,00',
        codigoPix: '00020126700014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250208lavadora52040000530398654071619.005802BR5922Rafael Henrique Campos6008Brasilia62090505yxksk630458D6',
        linkProduto: 'https://www.amazon.com.br/dp/B0BTTDB3GF/ref=cm_sw_r_cso_wa_apan_dp_ER9YCTMV98DFTR85NER3?starsLeft=1&skipTwisterOG=2',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/QPUOJKZB',
        enderecoEntrega: 2,
        tipo: 'real',
    },
    {
        id: '21',
        imagem: '/images/presentes/dialogo.webp',
        nome: 'Dialogo',
        descricao: 'Dialogo e a base do relacionamento',
        preco: 'R$ 100,00',
        codigoPix: '00020126690014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250207dialogo5204000053039865406100.005802BR5922Rafael Henrique Campos6008Brasilia62090505lw3t863045458',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/QKQS3A13',
        tipo: 'ficticio',
    },
    {
        id: '22',
        imagem: '/images/presentes/mesacentro.webp',
        nome: 'Mesa de centro',
        descricao: 'Mesa de sala de estar',
        preco: 'R$ 164,36',
        codigoPix: '00020126760014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250214mesa de centro5204000053039865406164.365802BR5922Rafael Henrique Campos6008Brasilia62090505nhsmd6304F3EC',
        linkProduto: 'https://www.casasbahia.com.br/mesa-centro-estilo-industrial-berlin-decorativa-moderna-klm-moveis-1558160587.html',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/QHV1S76I',
        enderecoEntrega: 2,
        tipo: 'real',
    },
    {
        id: '23',
        imagem: '/images/presentes/mesaapoio.webp',
        nome: 'Mesa de apoio',
        descricao: 'Mesa de apoio para sofa',
        preco: 'R$ 183,59',
        codigoPix: '00020126760014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250214mesa de apoio 5204000053039865406183.595802BR5922Rafael Henrique Campos6008Brasilia62090505bioxo63047DD6',
        linkProduto: 'https://www.casasbahia.com.br/mesa-apoio-lateral-sofa-industrial-vintage-metal-e-madeira-1539488465.html',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/Q8T1TNQF',
        enderecoEntrega: 2,
        tipo: 'real',
    },
    {
        id: '24',
        imagem: '/images/presentes/bancada.webp',
        nome: 'Bancada de cozinha',
        descricao: 'Bancada branca de cozinha',
        preco: 'R$ 177,88',
        codigoPix: '00020126800014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250218bancada de cozinha5204000053039865406177.885802BR5922Rafael Henrique Campos6008Brasilia62090505umlek6304971A',
        linkProduto: 'https://www.magazineluiza.com.br/bancada-de-cozinha-2-prateleiras-branco-565-soluzione/p/gjh52074g9/mo/bccz/?partner_id=64068&utm_source=pdp&utm_medium=share',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/QNIMI78D',
        enderecoEntrega: 2,
        tipo: 'real',
    },
    {
        id: '25',
        imagem: '/images/presentes/cadeirajantar.webp',
        nome: 'Cadeiras',
        descricao: 'Cadeiras para mesa de jantar',
        preco: 'R$ 187,11',
        codigoPix: '00020126700014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250208cadeiras5204000053039865406187.115802BR5922Rafael Henrique Campos6008Brasilia6209050589dsd630407CC',
        linkProduto: 'https://www.magazineluiza.com.br/bancada-de-cozinha-2-prateleiras-branco-565-soluzione/p/gjh52074g9/mo/bccz/?partner_id=64068&utm_source=pdp&utm_medium=share',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/QFXXNVNO',
        enderecoEntrega: 2,
        tipo: 'real',
    },
    {
        id: '26',
        imagem: '/images/presentes/pipoca.webp',
        nome: 'Pipoqueira',
        descricao: 'Pipoquera',
        preco: 'R$ 189,90',
        codigoPix: '00020126720014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250210pipoqueira5204000053039865406189.005802BR5922Rafael Henrique Campos6008Brasilia62090505ppwbv6304F057',
        linkProduto: 'https://www.amazon.com.br/dp/B07G1HWM9D?ref=cm_sw_r_apan_dp_NSZV46V04R1ZMGNHQ068&ref_=cm_sw_r_apan_dp_NSZV46V04R1ZMGNHQ068&social_share=cm_sw_r_apan_dp_NSZV46V04R1ZMGNHQ068&language=pt-BR&th=1',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/QEDSVIWR',
        enderecoEntrega: 2,
        tipo: 'real',
    },
    {
        id: '27',
        imagem: '/images/presentes/rack.webp',
        nome: 'rack',
        descricao: 'rack de tv para sala',
        preco: 'R$ 575,37',
        codigoPix: '00020126660014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250204rack5204000053039865406575.375802BR5922Rafael Henrique Campos6008Brasilia62090505582c263049CD7',
        linkProduto: 'https://www.magazineluiza.com.br/rack-para-tv-75-ripado-1-porta-ravena-mavaular-facilita-decor/p/kh8790b09d/mo/racm/?partner_id=64068&utm_source=pdp&utm_medium=share',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/QTPRJPS4',
        enderecoEntrega: 2,
        tipo: 'real',
    },
    {
        id: '28',
        imagem: '/images/presentes/deus.webp',
        nome: 'Intervenção',
        descricao: 'Se por uma intervenção divina vc se sentir tocado.',
        preco: 'R$ 2000,00',
        codigoPix: '00020126810014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250219intervencao divina 52040000530398654072000.005802BR5922Rafael Henrique Campos6008Brasilia62090505z4fqh6304BDB4',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/Q9M2WGSZ',
        tipo: 'ficticio',
    },
    {
        id: '29',
        imagem: '/images/presentes/casaljantar.webp',
        nome: 'Jantar Casal',
        descricao: 'Primeiro jantar romântico do casal',
        preco: 'R$ 200,00',
        codigoPix: '00020126790014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250217jantar romantico 5204000053039865406200.005802BR5922Rafael Henrique Campos6008Brasilia6209050515be863043100',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/QN66EBRV',
        tipo: 'ficticio',
    },
    {
        id: '30',
        imagem: '/images/presentes/idosos.webp',
        nome: 'Aposentadoria Casal',
        descricao: 'Ajudinha para a aposentadoria dos noivos',
        preco: 'R$ 1000,00',
        codigoPix: '00020126750014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250213aposentadoria52040000530398654071000.005802BR5922Rafael Henrique Campos6008Brasilia620905056s5ru63048077',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/QWOL0YK1',
        tipo: 'ficticio',
    },
    {
        id: '31',
        imagem: '/images/presentes/louca.webp',
        nome: 'Escorredor de Louça',
        descricao: 'Escorredor de Louça',
        preco: 'R$ 129,90',
        codigoPix: '00020126810014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250219escorregou de louca5204000053039865406129.905802BR5922Rafael Henrique Campos6008Brasilia620905053ocd063043C90',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/QEYCVZDS',
        tipo: 'ficticio',
    },
    {
        id: '32',
        imagem: '/images/presentes/ventilador.webp',
        nome: 'Ventilador',
        descricao: 'Ventilador',
        preco: 'R$ 199,99',
        codigoPix: '00020126720014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250210ventilador5204000053039865406199.995802BR5922Rafael Henrique Campos6008Brasilia62090505o29m56304B65E',
        linkProduto: 'https://www.amazon.com.br/Ventilador-Mallory-Coluna-Chronos-Preto/dp/B0BTR4S17X/ref=asc_df_B0BTQY3GMZ/?tag=googleshopp00-20&linkCode=df0&hvadid=647495206723&hvpos=&hvnetw=g&hvrand=9579775561028479258&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001585&hvtargid=pla-2204609642395&mcid=2f940c302baa39bebfce40e3ec7dbfe4&th=1',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/Q9JFTKC2',
        tipo: 'real',
    },

    {
        id: '33',
        imagem: '/images/presentes/cafeteira.webp',
        nome: 'Cafeteira',
        descricao: 'Cafeteira',
        preco: 'R$ 194,90',
        codigoPix: '00020126710014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250209cafeteira5204000053039865406194.905802BR5922Rafael Henrique Campos6008Brasilia62090505rkh3i6304095F',
        linkProduto: 'https://www.amazon.com.br/Cafeteira-Pcf17-53902049-Philco-Vermelho/dp/B07DNKHGTD?tag=unicafe09-20&ref_=as_li_ss_tl&th=1',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/QAXGX77W',
        tipo: 'real',
    },
    {
        id: '34',
        imagem: '/images/presentes/netflix.webp',
        nome: '1 ano de netflix',
        descricao: '1 ano de netflix para os noivos',
        preco: 'R$ 250,80',
        codigoPix: '00020126750014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae22502131 ano Netflix5204000053039865406250.805802BR5922Rafael Henrique Campos6008Brasilia620905058tr916304FCBF',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/QE9P6V02',
        tipo: 'ficticio',
    },
    {
        id: '35',
        imagem: '/images/presentes/alexa.webp',
        nome: 'Alexa',
        descricao: 'Alexa para noiva não mandar so no noivo',
        preco: 'R$ 300,00',
        codigoPix: '00020126670014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250205alexa5204000053039865406300.005802BR5922Rafael Henrique Campos6008Brasilia62090505wijz5630486A7',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/QFXAF9XW',
        tipo: 'ficticio',
    },
    {
        id: '36',
        imagem: '/images/presentes/mop.webp',
        nome: 'Mop Giratorio',
        descricao: 'Mop Giratorio',
        preco: 'R$ 96,00',
        codigoPix: '00020126760014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250214mop giratorio 520400005303986540596.005802BR5922Rafael Henrique Campos6008Brasilia620905057i127630403E9',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/QY47BHYX',
        tipo: 'ficticio',
    },
    {
        id: '37',
        imagem: '/images/presentes/armario.webp',
        nome: 'Aarmario',
        descricao: 'Armario de cozinha',
        preco: 'R$ 949,99',
        linkProduto: 'https://www.americanas.com.br/produto/3484486376',
        codigoPix: '00020126780014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250216armario cozinha 5204000053039865406949.995802BR5922Rafael Henrique Campos6008Brasilia62090505ovo7b6304A876',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/Q2T0489C',
        tipo: 'real',
    },
    {
        id: '38',
        imagem: '/images/presentes/nupicias.webp',
        nome: 'Roupa para noiva na noite de nupicias',
        descricao: 'Roupa para noiva na noite de nupcias',
        preco: 'R$ 120,00',
        codigoPix: '00020126900014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250228roupa para noite de nupcias 5204000053039865406120.005802BR5922Rafael Henrique Campos6008Brasilia620905051eshn6304CE73',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/Q4NOXS5S',
        tipo: 'ficticio',
    },
    {
        id: '39',
        imagem: '/images/presentes/despertador.webp',
        nome: 'Despertador para noiva',
        descricao: 'Despertador para noiva acordar',
        preco: 'R$ 110,00',
        codigoPix: '00020126850014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250223despertador para noiva 5204000053039865406110.005802BR5922Rafael Henrique Campos6008Brasilia62090505w1dq56304C539',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/QKSRBEF4',
        tipo: 'ficticio',
    },
    {
        id: '40',
        imagem: '/images/presentes/culinaria.webp',
        nome: 'Curso de culinaria para o noivo',
        descricao: 'Curso de culinaria para o noivo',
        preco: 'R$ 220,00',
        codigoPix: '00020126910014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250229curso culinaria para o noivo 5204000053039865406220.005802BR5922Rafael Henrique Campos6008Brasilia62090505mcxs8630482D3',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/QXQ4AVRQ',
        tipo: 'ficticio',
    },
    {
        id: '41',
        imagem: '/images/presentes/maracujina.webp',
        nome: 'Maracujina',
        descricao: 'Maracujina para os noivos se acalmarem',
        preco: 'R$ 70,00',
        codigoPix: '00020126720014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250210maracujina520400005303986540570.005802BR5922Rafael Henrique Campos6008Brasilia62090505wd2pl63042344',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/Q146FPWI',
        tipo: 'ficticio',
    },
    {
        id: '42',
        imagem: '/images/presentes/tampao.webp',
        nome: 'Tampão de ouvido',
        descricao: 'Tampão de ouvido para noiva enquanto noivo ronca',
        preco: 'R$ 80,00',
        codigoPix: '00020126790014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250217tampao de ouvido 520400005303986540580.005802BR5922Rafael Henrique Campos6008Brasilia620905055o5ws6304E2E7',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/QR1K1O5E',
        tipo: 'ficticio',
    },
    {
        id: '43',
        imagem: '/images/presentes/engov.webp',
        nome: 'Open engov',
        descricao: 'Open engov para festa',
        preco: 'R$ 100,00',
        codigoPix: '00020126720014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250210open engov5204000053039865406100.005802BR5922Rafael Henrique Campos6008Brasilia62090505w79g46304C1DB',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/QA8TQIE0',
        tipo: 'ficticio',
    },
    {
        id: '44',
        imagem: '/images/presentes/visita.webp',
        nome: 'Proridade visita',
        descricao: 'Prioridade visita na casa dos novos',
        preco: 'R$ 230,00',
        codigoPix: '00020126830014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250221prioridade de visita 5204000053039865406230.005802BR5922Rafael Henrique Campos6008Brasilia62090505khyk463040C0C',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/Q61LE5EQ',
        tipo: 'ficticio',
    },
    {
        id: '45',
        imagem: '/images/presentes/lanchiinho.webp',
        nome: 'Lanchinho da madrugada',
        descricao: 'Para os noivos não sentirem fome de madrugada e terem o que atacar na geladeiira',
        preco: 'R$ 90,00',
        codigoPix: '00020126840014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250222lanchinho da madrugada520400005303986540590.005802BR5922Rafael Henrique Campos6008Brasilia62090505gfqbp6304E2BE',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/QY1V0SPE',
        tipo: 'ficticio',
    },
    {
        id: '46',
        imagem: '/images/presentes/jogarbuque.webp',
        nome: 'Jogar buquê na sua direção',
        descricao: 'Jogar buquê na sua direção',
        preco: 'R$ 240,00',
        codigoPix: '00020126770014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250215chance de buque5204000053039865406240.005802BR5922Rafael Henrique Campos6008Brasilia620905050v1h96304E0C6',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/QMWHYZO6',
        tipo: 'ficticio',
    },
   
    {
        id: '47',
        imagem: '/images/presentes/parente.webp',
        nome: 'Boleto atrasado',
        descricao: 'seja o parente favorito',
        preco: 'R$ 1200,00',
        codigoPix: '00020126790014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250217parente prederido52040000530398654071200.005802BR5922Rafael Henrique Campos6008Brasilia620905051bbxq63045E46',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/QIBUSMY0',
        tipo: 'ficticio',
    },
    {
        id: '48',
        imagem: '/images/presentes/boletoatrasado.webp',
        nome: 'Boleto atrasado',
        descricao: 'Salve um boleto atrasado dos noivos',
        preco: 'R$ 800,00',
        codigoPix: '00020126780014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250216boleto atrasado 5204000053039865406800.005802BR5922Rafael Henrique Campos6008Brasilia62090505ly3tr630482C2',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/XGO8VAKM23',
        tipo: 'ficticio',
    },
    {
        id: '49',
        imagem: '/images/presentes/pedidocasamento.webp',
        nome: 'Fazer pediido de casamento',
        descricao: 'Fazer pedido de casamento durante a festa',
        preco: 'R$ 900,00',
        codigoPix: '00020126840014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250222lanchinho da madrugada520400005303986540590.005802BR5922Rafael Henrique Campos6008Brasilia62090505gfqbp6304E2BE',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/X4IGA3X6G4',
        tipo: 'ficticio',
    },
    {
        id: '50',
        imagem: '/images/presentes/garantesol.webp',
        nome: 'Garantir o sol',
        descricao: 'Garantir o sol no casamento',
        preco: 'R$ 1100,00',
        codigoPix: '00020126840014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250222lanchinho da madrugada520400005303986540590.005802BR5922Rafael Henrique Campos6008Brasilia62090505gfqbp6304E2BE',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/XFWANDLWQ8',
        tipo: 'ficticio',
    },
    {
        id: '51',
        imagem: '/images/presentes/t43.webp',
        nome: 'Tv',
        descricao: 'tv sansumg 43',
        preco: 'R$ 1763,00',
        codigoPix: '00020126840014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250222lanchinho da madrugada520400005303986540590.005802BR5922Rafael Henrique Campos6008Brasilia62090505gfqbp6304E2BE',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/XQVS6U1ZIT',
        tipo: 'real',
    },
    {
        id: '52',
        imagem: '/images/presentes/pixdevendo.webp',
        nome: 'Pix devendo',
        descricao: 'Toma aqui um pix que estou te devendo a muito tempo',
        preco: 'R$ 1300,00',
        codigoPix: '00020126840014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250222lanchinho da madrugada520400005303986540590.005802BR5922Rafael Henrique Campos6008Brasilia62090505gfqbp6304E2BE',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/XYK1LU7E0S',
        tipo: 'ficticio',
    },
    {
        id: '53',
        imagem: '/images/presentes/luademel.webp',
        nome: 'Lua de mel',
        descricao: 'De uma viagem para os noivos curtirem a lua de mel',
        preco: 'R$ 1500,00',
        codigoPix: '00020126840014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250222lanchinho da madrugada520400005303986540590.005802BR5922Rafael Henrique Campos6008Brasilia62090505gfqbp6304E2BE',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/QQ2T45AG',
        tipo: 'ficticio',
    },
    {
        id: '54',
        imagem: '/images/presentes/massagem.webp',
        nome: 'Massagem',
        descricao: 'De uma massagem',
        preco: 'R$ 240,00',
        codigoPix: '00020126840014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250222lanchinho da madrugada520400005303986540590.005802BR5922Rafael Henrique Campos6008Brasilia62090505gfqbp6304E2BE',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/QK9F2RFU',
        tipo: 'ficticio',
    },
    {
        id: '55',
        imagem: '/images/presentes/luademel.webp',
        nome: 'Hotel fazenda',
        descricao: 'Fim de semana num hotel fazenda',
        preco: 'R$ 750,00',
        codigoPix: '00020126840014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250222lanchinho da madrugada520400005303986540590.005802BR5922Rafael Henrique Campos6008Brasilia62090505gfqbp6304E2BE',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/Q1JDCYS2',
        tipo: 'ficticio',
    },
    {
        id: '56',
        imagem: '/images/presentes/ferro.webp',
        nome: 'Ferro de passar roupa',
        descricao: 'Ferro de passar roupa',
        preco: 'R$ 69,90',
        codigoPix: '00020126770014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250215ferro de passar520400005303986540569.905802BR5922Rafael Henrique Campos6008Brasilia620905058kxjx63041653',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/Q74HNMJN',
        tipo: 'real',
    },
    {
        id: '57',
        imagem: '/images/presentes/passadeira.webp',
        nome: 'Passadeira de roupa a vapor ',
        descricao: 'Passadeira de roupa a vapor',
        preco: 'R$ 145,00',
        codigoPix: '00020126810014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250219Passadeira a vapor 5204000053039865406145.005802BR5922Rafael Henrique Campos6008Brasilia62090505ib2qe6304989B',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/QQ6Z3TL7',
        tipo: 'real',
    },
    {
        id: '58',
        imagem: '/images/presentes/purificador.webp',
        nome: 'Purificador de agua ',
        descricao: 'Purificador de agua',
        preco: 'R$ 139,00',
        codigoPix: '00020126730014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250211purificador5204000053039865406139.005802BR5922Rafael Henrique Campos6008Brasilia62090505eepnd6304A60B',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/QVPIMZR7',
        tipo: 'real',
    },
    {
        id: '59',
        imagem: '/images/presentes/mangueira.webp',
        nome: 'Mangueira de led',
        descricao: 'Mangueira de led para decorar o quarto de pole da noiva',
        preco: 'R$ 180,00',
        codigoPix: '00020126750014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250213mangueira led5204000053039865406180.005802BR5922Rafael Henrique Campos6008Brasilia62090505ymkc96304EC1B',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/Q3BC0EMD',
        tipo: 'real',
    },
    {
        id: '60',
        imagem: '/images/presentes/kitbanheiro.webp',
        nome: 'Kit Acessórios Para Banheiro ',
        descricao: 'Kit Acessórios Para Banheiro',
        preco: 'R$ 80,00',
        codigoPix: '00020126750014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250213kit banheiro 520400005303986540580.005802BR5922Rafael Henrique Campos6008Brasilia62090505u84k263041C9F',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/QLKSHS5U',
        tipo: 'real',
    },
    {
        id: '61',
        imagem: '/images/presentes/toalhas.webp',
        nome: 'Jogo de toalhas ',
        descricao: 'Jogo de toalhas',
        preco: 'R$ 180,00',
        codigoPix: '00020126690014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250207toalhas5204000053039865406180.005802BR5922Rafael Henrique Campos6008Brasilia62090505cnu4563040C0F',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/X2ENJDZU8T',
        tipo: 'real',
    },
    {
        id: '62',
        imagem: '/images/presentes/cabeceira.webp',
        nome: 'Mesa de Cabeceira Paris ',
        descricao: 'Mesa de Cabeceira Paris',
        preco: 'R$ 170,00',
        codigoPix: '00020126790014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250217mesa de cabeceira5204000053039865406170.005802BR5922Rafael Henrique Campos6008Brasilia62090505ynd5a63047BE1',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/QHKZ4B3N',
        tipo: 'real',
    },
    {
        id: '63',
        imagem: '/images/presentes/suporte.webp',
        nome: 'Estante de parede',
        descricao: 'Estante de parede',
        preco: 'R$ 230,00',
        codigoPix: '00020126760014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250214estante parede5204000053039865406230.005802BR5922Rafael Henrique Campos6008Brasilia62090505bbm9363043EEF',
        linkProduto: 'https://www.casaevideo.com.br/panela-de-pressao-eletrica-5l-mondial-pe38-preto-com-prata-127v/p',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/QJN5CC2B',
        enderecoEntrega: 1,
        tipo: 'real',
    },
    {
        id: '64',
        imagem: '/images/presentes/pousada.webp',
        nome: 'Fim de semana na pousada',
        descricao: 'Fim de semana na pousada',
        preco: 'R$ 400,00',
        codigoPix: '00020126870014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250225fim de semana na pousada 5204000053039865406400.005802BR5922Rafael Henrique Campos6008Brasilia62090505yn7ot63044132',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/QSU9YM0O',
        tipo: 'ficticio',
    },
    {
        id: '65',
        imagem: '/images/presentes/cadeira.webp',
        nome: 'Cadeira escritorio',
        descricao: 'Cadeira escritorio',
        preco: 'R$ 220,00',
        codigoPix: '00020126840014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250222cadeira de escritorio 5204000053039865406220.005802BR5922Rafael Henrique Campos6008Brasilia62090505w4r9u63040624',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/QMT0U2A5',
        tipo: 'ficticio',
    },
    {
        id: '66',
        imagem: '/images/presentes/mantimentos.webp',
        nome: 'Potes de mantiemtnos',
        descricao: 'Potes de mantiemtnos',
        preco: 'R$ 116,00',
        codigoPix: '00020126790014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250217pote mantimentos 5204000053039865406116.005802BR5922Rafael Henrique Campos6008Brasilia62090505fxu4g63045117',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/QOX7XS6R',
        tipo: 'ficticio',
    },
    {
        id: '67',
        imagem: '/images/presentes/jarra.webp',
        nome: 'Jarra de vidro',
        descricao: 'Jarra de vidro',
        preco: 'R$ 96,90',
        codigoPix: '00020126770014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250215jarra de vidro 520400005303986540596.905802BR5922Rafael Henrique Campos6008Brasilia6209050550ciy630459B8',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/QFW9WP35',
        tipo: 'ficticio',
    },
    {
        id: '68',
        imagem: '/images/presentes/suco.webp',
        nome: 'Espremedor de Frutas',
        descricao: 'Espremedor de Frutas',
        preco: 'R$ 77,50',
        codigoPix: '00020126820014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250220espremedor de frutas520400005303986540577.505802BR5922Rafael Henrique Campos6008Brasilia62090505ekkp86304BCE8',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/Q2IDA2H3',
        tipo: 'ficticio',
    },
    {
        id: '69',
        imagem: '/images/presentes/cochao.webp',
        nome: 'Colchao para visita',
        descricao: 'Colchao para visita',
        preco: 'R$ 400,00',
        codigoPix: '00020126700014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250208colchao 5204000053039865406400.005802BR5922Rafael Henrique Campos6008Brasilia62090505knnul6304C486',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/QEI9OXAQ',
        tipo: 'ficticio',
    },
    {
        id: '70',
        imagem: '/images/presentes/pousada.webp',
        nome: 'Base da cama',
        descricao: 'Base da cama',
        preco: 'R$ 357,00',
        codigoPix: '00020126870014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250225fim de semana na pousada 5204000053039865406400.005802BR5922Rafael Henrique Campos6008Brasilia62090505yn7ot63044132',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/QU4QNQD7',
        tipo: 'ficticio',
    },

    {
        id: '71',
        imagem: '/images/presentes/fruteira.webp',
        nome: 'Fruteira Multiuso prateleira',
        descricao: 'Fruteira Multiuso prateleira',
        preco: 'R$ 380,00',
        codigoPix: '00020126710014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250209fruteira 5204000053039865406380.005802BR5922Rafael Henrique Campos6008Brasilia620905052h3k46304410A',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/QC76J7SP',
        tipo: 'ficticio',
    },
    {
        id: '72',
        imagem: '/images/presentes/cabeceira.webp',
        nome: 'Cabeceira',
        descricao: 'Cabeceira para cama de casal',
        preco: 'R$ 137,75',
        codigoPix: '00020126710014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250209cabeceira5204000053039865406137.755802BR5922Rafael Henrique Campos6008Brasilia62090505q1dfx63049D51',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/Q4BMKXLG',
        tipo: 'ficticio',
    },
    {
        id: '73',
        imagem: '/images/presentes/ferramenta.webp',
        nome: 'Ferramenta',
        descricao: 'Kit ferramenta',
        preco: 'R$ 88,00',
        codigoPix: '00020126730014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250211ferramentas520400005303986540588.005802BR5922Rafael Henrique Campos6008Brasilia62090505dgwk963049FC4',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/Q7EXTAB6',
        tipo: 'ficticio',
    },
    {
        id: '74',
        imagem: '/images/presentes/furadeira.webp',
        nome: 'Furadeira',
        descricao: 'Furadeira',
        preco: 'R$ 162,00',
        codigoPix: '00020126710014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250209furadeira5204000053039865406162.005802BR5922Rafael Henrique Campos6008Brasilia62090505525jk6304D958',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/Q7G56EZ2',
        tipo: 'ficticio',
    },
    {
        id: '75',
        imagem: '/images/presentes/tabua.webp',
        nome: 'Tabua giratoria',
        descricao: 'Tabua giratoria',
        preco: 'R$ 73,00',
        codigoPix: '00020126670014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250205tabua520400005303986540573.005802BR5922Rafael Henrique Campos6008Brasilia6209050505i6r6304F05',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/Q4YA5ZYD',
        tipo: 'ficticio',
    },
    {
        id: '76',
        imagem: '/images/presentes/extrator.webp',
        nome: 'Extratpr de suco',
        descricao: 'Extratpr de suco',
        preco: 'R$ 150,00',
        codigoPix: '00020126790014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250217extrator de suco 5204000053039865406150.005802BR5922Rafael Henrique Campos6008Brasilia62090505zzcir63040411',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/QKJ3MMGO',
        tipo: 'ficticio',
    },
    {
        id: '77',
        imagem: '/images/presentes/bowl.webp',
        nome: 'bowl inox',
        descricao: 'bowl inox',
        preco: 'R$ 129,00',
        codigoPix: '00020126660014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250204bowl5204000053039865406129.005802BR5922Rafael Henrique Campos6008Brasilia62090505bkq5k6304E1CD',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/QVVTQTIC',
        tipo: 'ficticio',
    },
    {
        id: '78',
        imagem: '/images/presentes/aquecedor.webp',
        nome: 'Aquecedor de ar',
        descricao: 'Aquecedor de ar',
        preco: 'R$ 98,00',
        codigoPix: '00020126710014br.gov.bcb.pix013692fb26d6-62d7-40fc-a775-c6ba8f2ae2250209aquecedor520400005303986540598.005802BR5922Rafael Henrique Campos6008Brasilia62090505h4y8e6304CD3E',
        linkPagamentoCartao: 'https://pay.sumup.com/b2c/QI849VQW',
        tipo: 'ficticio',
    },
    
    // ... seus outros presentes ...
];

const PresentePage: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;
    const [copied, setCopied] = useState(false);

    const presente = presentes.find((p) => p.id === id);

    const copyPixCode = () => {
        if (presente?.codigoPix) {
            navigator.clipboard.writeText(presente.codigoPix);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const openLinkInNewTab = (url?: string) => {
        if (url) {
            window.open(url, '_blank', 'noopener,noreferrer');
        }
    };

    if (!presente) {
        return <div>Presente não encontrado</div>;
    }

    // Lógica para exibir o endereço de entrega correto
    let enderecoEntrega: React.ReactNode = null;

    if (presente.tipo === 'real') {
        enderecoEntrega = presente.enderecoEntrega === 1 ? (
            <address className="not-italic mt-4 text-gray-600">
                Avenida Josue de Queiroz, 681<br />
                Matozinhos<br />
                São João del Rei, MG<br />
                Cep: 36305-144
            </address>
        ) : (
            <address className="not-italic mt-4 text-gray-600">
                Rua Ernesto da Silva Braga, 181<br />
                Rio das Mortes<br />
                São João del Rei, MG<br />
                Cep: 36315-00
            </address>
        );
    } else if (presente.tipo === 'ficticio') {
        enderecoEntrega = (
            <p className="text-gray-600 text-sm mt-4">
                Este presente é fictício.
            </p>
        );
    }

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
                            {/* Removido a renderização condicional para mostrar os botões Pix e Cartão para todos os tipos de presentes */}
                            <>
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
                            </>
                        </div>
                    </div>

                    {/*
                    <div className="mt-16 bg-white rounded-lg shadow-md p-8 text-center">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Endereço para Envio de Presentes</h3>

                        {presente.tipo === 'real' && (
                            <>
                                <p className="text-gray-600 text-sm">
                                    Caso deseje nos presentear pessoalmente, ficaremos honrados em recebê-los na seguinte localização:
                                </p>
                                {enderecoEntrega}
                            </>
                        )}

                       
                        {presente.tipo === 'real' && presente.linkProduto && (
                            <>
                                <FaGift className="text-4xl text-blue-600 mx-auto my-4" />
                                <button onClick={() => openLinkInNewTab(presente.linkProduto)} className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 text-white py-1 px-6 rounded-lg font-medium text-lg cursor-pointer shadow-md hover:from-blue-700 hover:to-blue-800 transition-colors">
                                    Ver Produto na Loja
                                </button>
                            </>
                        )}
                    </div>
                    */}


                
                    {/* Nova área para contatos do WhatsApp */}
                    <div className="mt-8 bg-white rounded-lg shadow-md p-8 text-center">
                        <p className="text-gray-800">
                            Deseja nos presentear com algo diferente ou está com dificuldades para enviar o presente pelo site? Entre em contato conosco ou utilize a chave PIX abaixo!
                        </p>
                        {/* Área do QR Code Pix Geral */}
                        <div className="mt-4 flex flex-col items-center justify-center">

                            <p className="text-gray-600 text-sm">Chave PIX: 73a88d55-f7ea-4eb1-9b7b-88961e13db96</p>

                        </div>

                        {/* Botões do WhatsApp */}
                        <div className="mt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
                            <a
                                href="https://wa.me/5532999057760"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition duration-300 flex items-center"
                            >
                                <FaWhatsapp className="mr-2" /> Falar com Rafael
                            </a>
                            <a
                                href="https://wa.me/5532984387925"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition duration-300 flex items-center"
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