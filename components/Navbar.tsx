import { useEffect, useState } from 'react';
import { Menu } from 'antd';
import { BarsOutlined, HomeOutlined, UserOutlined, TeamOutlined, CoffeeOutlined, GiftOutlined, CheckCircleOutlined, MessageOutlined } from '@ant-design/icons';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('home');

  const handleMenuClick = (e: any) => {
    setSelectedTab(e.key);
  };

  return (
    <nav className="bg-white p-3 fixed w-full z-30 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Menu
          mode="horizontal"
          selectedKeys={[selectedTab]}
          onClick={handleMenuClick}
        >
          <Menu.Item key="home" icon={<HomeOutlined />}>
            <Link href="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="couple" icon={<UserOutlined />}>
            <Link href="/couple">O Casal</Link>
          </Menu.Item>
          <Menu.Item key="bridesmaids" icon={<TeamOutlined />}>
            <Link href="/bridesmaids">Padrinhos</Link>
          </Menu.Item>
          <Menu.Item key="reception" icon={<CoffeeOutlined />}>
            <Link href="/reception">Recepção</Link>
          </Menu.Item>
          <Menu.Item key="gifts" icon={<GiftOutlined />}>
            <Link href="/gifts">Lista de Presentes</Link>
          </Menu.Item>
          <Menu.Item key="confirm" icon={<CheckCircleOutlined />}>
            <Link href="/confirm">Confirme sua Presença</Link>
          </Menu.Item>
          <Menu.Item key="messages" icon={<MessageOutlined />}>
            <Link href="/messages">Recados</Link>
          </Menu.Item>
        </Menu>
      </div>
    </nav>
  );
};

export default Navbar;
