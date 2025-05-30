import React, { useState } from 'react';
import Link from 'next/link';
import {
  HeartFilled,
  InfoCircleOutlined,
  PictureOutlined,
  GiftOutlined,
  UserOutlined, 
  MenuOutlined,
  MessageOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Drawer } from 'antd';

const { Header } = Layout;

const Navbar: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const handleLinkClick = () => {
    setVisible(false); 
  };

  return (
    <Layout>
      <Header className="flex items-center justify-between px-4 py-3 shadow-md w-full fixed top-0 z-50 bg-white/90 backdrop-blur-md">
        <Link href="/#inicio" scroll={true}>
          <div className="text-2xl font-bold text-blue-400 hover:text-blue-500 transition-all duration-300 cursor-pointer flex items-center">
            <HeartFilled style={{ color: '#91A8D0' }} className="mr-2" /> Rafael & Mirelle
          </div>
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link href="/#informacoes" scroll={true}>
            <div className="text-gray-600 hover:text-gray-800 transition-all duration-300 cursor-pointer flex items-center">
              <InfoCircleOutlined className="mr-2" /> Informações
            </div>
          </Link>
          <Link href="/#padrinhos" scroll={true}>
            <div className="text-gray-600 hover:text-gray-800 transition-all duration-300 cursor-pointer flex items-center">
              <UserOutlined className="mr-2" /> Padrinhos
            </div>
          </Link>
          <Link href="/#galeria" scroll={true}>
            <div className="text-gray-600 hover:text-gray-800 transition-all duration-300 cursor-pointer flex items-center">
              <PictureOutlined className="mr-2" /> Galeria
            </div>
          </Link>
          <Link href="/#lista-de-presentes" scroll={true}>
            <div className="text-gray-600 hover:text-gray-800 transition-all duration-300 cursor-pointer flex items-center">
              <GiftOutlined className="mr-2" /> Lista de Presentes
            </div>
          </Link>
          <Link href="/#mensagem" scroll={true}> {/* Novo link para Mensagem */}
            <div className="text-gray-600 hover:text-gray-800 transition-all duration-300 cursor-pointer flex items-center">
              <MessageOutlined className="mr-2" /> Recado
            </div>
          </Link>
        </div>
        <MenuOutlined className="md:hidden text-2xl" onClick={showDrawer} />
      </Header>
      <Drawer title="Menu" placement="right" onClose={onClose} visible={visible}>
        <Menu mode="inline" onClick={handleLinkClick}>
          {/* Itens do menu para dispositivos móveis */}
          <Menu.Item key="1">
            <Link href="/#informacoes" scroll={true}>
              Informações
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link href="/#padrinhos" scroll={true}>
              Padrinhos
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link href="/#galeria" scroll={true}>
              Galeria
            </Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link href="/#lista-de-presentes" scroll={true}>
              Lista de Presentes
            </Link>
          </Menu.Item>
          <Menu.Item key="5"> {/* Novo item para Mensagem */}
            <Link href="/#mensagem" scroll={true}>
              Recado
            </Link>
          </Menu.Item>
        </Menu>
      </Drawer>
    </Layout>
  );
};

export default Navbar;