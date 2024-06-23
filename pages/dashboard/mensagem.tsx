import SideBarPainelAdministrativo from "@/components/SideBarPainelAdministrativo";
import { api } from "@/services/apiClient";
import { Popconfirm, PopconfirmProps, message } from "antd";
import { useEffect, useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { toast } from "react-toastify";

interface Mensagem {
    id: string;
    nome: string;
    recado: string;
    created_at: Date
}
export default function Mensagem() {
    const [mensagens, setMensagens] = useState<Mensagem[]>([])
    const [atualizar,setAtualizar] = useState<boolean>(false)

    useEffect(() => {
        api.get('mensagem').then((resposta) => {
            setMensagens(resposta.data)
        })
    }, [atualizar])
    
    function Confirm(id: string){
        console.log(id)
        api.delete('mensagem/' + id).then((resposta) => {
            toast.success('Mensagem deletada com sucesso!')
            setAtualizar(!atualizar)
        })
    }

    console.log(mensagens)
    return (
        <SideBarPainelAdministrativo>
            <div className="overflow-y-auto h-[100vh] ">
                <p className="mt-10 text-center text-3xl font-bold font-dancing"> Mensagens enviadas para voces</p>
                <div className=" flex justify-center mt-6 pb-6">
                    <div className="flex w-[70%] flex-wrap gap-8 justify-center  ">
                        <table className="w-full ">
                            <thead className="rounded-xl bg-green-700 sticky-header">
                                <tr>
                                    <th className="py-4 px-4">
                                        <p className="font-bold text-start text-base text-white leading-none">Nome</p>
                                    </th>
                                    <th className="py-4 px-4">
                                        <p className="font-bold text-start text-base text-white leading-none">Mensagem</p>
                                    </th>
                                    <th className="py-4">

                                    </th>
                                </tr>
                            </thead>
                            <tbody className="rounded-b-xl">
                                {mensagens.map((mensagem) => (
                                    <tr key={mensagem.id} className="border-[1px] ">
                                        <th className="py-2 text-start px-4 border-[1px]">{mensagem.nome}</th>
                                        <th className="py-2 text-start px-4 border-[1px]">{mensagem.recado}</th>
                                        <th className="py-2">
                                            <Popconfirm
                                                title="Excluir recado"
                                                description="Tem certeza que quer excluir este recado?"
                                                onConfirm={() => Confirm(mensagem.id)}
                                                okText="Sim"
                                                cancelText="Não"
                                            >
                                                <button ><IoIosCloseCircle size={24} className="text-red-500" /></button>
                                            </Popconfirm>
                                        </th>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </SideBarPainelAdministrativo>
    )

}