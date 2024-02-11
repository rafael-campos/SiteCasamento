import { Typography, Button } from 'antd';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { useEffect } from 'react';

const { Title, Text } = Typography;

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  useEffect(() => {
    // Código do lado do cliente aqui, se necessário

    return () => {
      // Limpeza, se necessário
    };
  }, []);

  return (
    <div className=" flex items-center justify-center min-h-screen ">
      <div className="mx-auto">
        <div className="container bg-white p-8 border border-yellow-50 text-center">
          <Title level={1}>Mirelle</Title>
          <Title level={2}>Rafael</Title>
          <Text>24/08/24</Text>
        </div>
      </div>



    
    </div>
  );
}
