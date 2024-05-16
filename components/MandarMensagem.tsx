import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { motion, AnimatePresence } from "framer-motion";

const { TextArea } = Input;

interface Mensagem {
  id: number;
  nome: string;
  mensagem: string;
}

export default function MandarMensagem() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState(""); // Adicionado campo de email
  const [mensagem, setMensagem] = useState("");
  const [mensagens, setMensagens] = useState<Mensagem[]>([
    // Mensagens iniciais para exemplo
    { id: 1, nome: "Marcela e Rogerio", mensagem: "Que a união de vocês seja repleta de amor e felicidade! Desejamos toda a sorte do mundo nesse novo capítulo." },
    { id: 2, nome: "Amanda e Caio", mensagem: "Estamos muito felizes em celebrar este dia tão especial com vocês. Que a vida a dois seja um caminho de alegria, cumplicidade e muito amor!" },
  ]);

  const handleSubmit = () => {
    if (nome && mensagem) {
      const novaMensagem: Mensagem = {
        id: mensagens.length + 1,
        nome,
        mensagem,
      };

      setMensagens([...mensagens, novaMensagem]);
      setNome("");
      setEmail("");
      setMensagem("");
      message.success("Mensagem enviada com sucesso!");
    } else {
      message.error("Por favor, preencha o nome e a mensagem!");
    }
  };

  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl text-center font-dancing font-bold text-blue-900 mb-10">
          Deixe seu Recado de Carinho!
        </h2>

        <div className="w-full md:w-2/3 mx-auto">
          {/* Formulário */}
          <Form layout="vertical" onFinish={handleSubmit}>
            <Form.Item
              label={<p className="font-dancing text-blue-900 text-2xl font-bold">Nome</p>}
              name="nome"
              rules={[{ required: true, message: "Por favor, digite seu nome!" }]}
            >
              <Input value={nome} onChange={(e) => setNome(e.target.value)} />
            </Form.Item>

            <Form.Item
              label={<p className="font-dancing text-blue-900 text-2xl font-bold">Email (opcional)</p>}
              name="email"
            >
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Item>

            <Form.Item
              label={<p className="font-dancing text-blue-900 text-2xl font-bold">Recado</p>}
              name="mensagem"
              rules={[{ required: true, message: "Por favor, escreva seu recado!" }]}
            >
              <TextArea rows={4} value={mensagem} onChange={(e) => setMensagem(e.target.value)} />
            </Form.Item>

            <div className="flex justify-center">
              <Button
                type="primary"
                htmlType="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-dancing text-xl font-bold py-2 px-6 rounded-lg"
              >
                Enviar Recado
              </Button>
            </div>
          </Form>
        </div>

        {/* Mural de Mensagens */}
        <div className="flex flex-wrap justify-center gap-6 mt-12">
          <AnimatePresence>
            {mensagens.map((mensagem) => (
              <motion.div
                key={mensagem.id}
                className="bg-yellow-100 p-4 rounded-lg shadow-md w-full sm:w-96 relative border-l-4 border-blue-500"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
              >
                <p className="font-dancing text-lg text-gray-800">{mensagem.mensagem}</p>
                <p className="text-right mt-3 font-dancing text-lg font-bold text-blue-900">{mensagem.nome}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}