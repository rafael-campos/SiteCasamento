import { url } from "@/global/variaveis";
import { Form, Input } from "antd";
import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
const { TextArea } = Input;
import 'moment/locale/pt-br'
import { atom, useAtom } from "jotai";
import { toast } from "react-toastify";
import { useForm } from "antd/es/form/Form";
moment.locale('pt-br')
interface Mensagem {
    id: string;
    nome: string;
    recado: string;
    created_at: Date;
}

interface MensagemEntrada {
    recado: string;
    nome: string;
}
const controleAtom = atom(false)
export default function MandarMensagem() {
    const [controle, setControle] = useAtom(controleAtom)
    const [mensagem, setMensagem] = useState<Mensagem[]>([])
    const [form] = Form.useForm();
    useEffect(() => {

        axios.get(url + 'mensagem').then((resposta) => {
            setMensagem(resposta.data)
        })
    }, [controle])
    const enviar = async (data: MensagemEntrada) => {
        console.log(data)
        axios.post(url + 'mensagem', data).then((resposta) => {
            toast.success("Mensagem enviada!")
            setControle(!controle)
            form.setFieldsValue(
                {
                    recado: null,
                    nome: null
                }
            )
        }).catch((err) => { console.log(err) })
    };
    return (
        <div className="w-full">
            <p className="md:text-5xl text-4xl text-center mt-10 font-dancing font-bold text-blue-600">Deixe o seu recado de carinho!</p>
            <div className="md:w-[30%] mx-auto pt-10 pb-10 md:px-0 px-6">
                <Form form={form} onFinish={enviar} layout="vertical" >
                    <div className="bg-[#f6d598] px-6 py-8 ">
                        <p className="font-dancing text-2xl">Rafael e Mirelle,</p>
                        <Form.Item name={'recado'} className="mt-4" label={<p className=" text-black text-lg ">Recado</p>} rules={[{ required: true, message: 'Por favor insira o recado!' }]}>
                            <TextArea className="font-dancing text-md" rows={4} />
                        </Form.Item>
                        <Form.Item name={'nome'} label={<p className=" text-black text-lg ">Nome</p>} rules={[{ required: true, message: 'Por favor insira seu nome!' }]}>
                            <Input className="font-dancing text-md" />
                        </Form.Item>
                    </div>


                    <div className="flex justify-center mt-6">
                        <button className="bg-blue-600 px-6 py-2 text-2xl font-dancing text-white font-bold rounded-lg">
                            Enviar Recado
                        </button>
                    </div>

                </Form>
            </div>

            <div className="flex flex-wrap justify-center gap-6 md:px-[10%] px-6 pb-6">
                {mensagem.map((mensagem_single) => (
                    <div key={mensagem_single.id} className="bg-[#f6d598] px-8 py-8 shadow-2xl w-[350px] ">
                        <p className="font-dancing text-2xl">Rafael e Mirelle</p>
                        <div className="flex flex-col justify-between h-full pb-8">
                            <p className="font-dancing  text-md text-justify mt-4">{mensagem_single.recado.split('\n').map((str, index) => (
                                <span key={index}>
                                    {str}
                                    <br />
                                </span>
                            ))}</p>
                            <div>
                                <p className="text-end mt-2 font-dancing text-md font-bold">{mensagem_single.nome}</p>
                                <p className="text-end mt-1  text-sm font-dancing ">{moment(mensagem_single.created_at).format('LLL')}</p>
                            </div>
                        </div>


                    </div>
                ))}





            </div>

        </div>
    )
}