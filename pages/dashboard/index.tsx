import SideBarPainelAdministrativo from "@/components/SideBarPainelAdministrativo";
import { api } from "@/services/apiClient";
import moment from "moment";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import diacritics from "diacritics"
import { IoMdSearch } from "react-icons/io";
interface Confirmacao {
    id: string
    nome: string
    telefone: string
    status: string
    created_at: Date
    updated_at: Date
}
export default function Dashboard() {
    const [confirmacao, setConfirmacao] = useState<Confirmacao[]>([])
    const [filteredData, setFilteredData] = useState<Confirmacao[]>([])
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [atualizar, setAtualizar] = useState<boolean>(false)
    useEffect(() => {
        api.get('confirmacao').then((resposta) => {
            setConfirmacao(resposta.data);
            setFilteredData(resposta.data);
        })
    }, [atualizar])
    function removeAccentsAndLowercase(str: string): string {
        if (!str) {
            return '';
        }
        return diacritics.remove(str.toLowerCase());
    }
    function removeAccents(str: string): string {
        if (!str) {
            return '';
        }
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }
    function highlightSearchTerm(text: string, searchTerm: string): React.ReactNode {
        if (!text || !searchTerm || typeof text !== 'string' || typeof searchTerm !== 'string') {
            return text;
        }

        const normalizedText = removeAccentsAndLowercase(text); // Remover acentos e converter para minúsculas
        const normalizedSearchTerm = removeAccentsAndLowercase(searchTerm); // Remover acentos do termo de busca e converter para minúsculas
        const parts: React.ReactNode[] = [];
        let currentIndex = 0;

        while (currentIndex < text.length) {
            const matchIndex = normalizedText.indexOf(normalizedSearchTerm, currentIndex);

            if (matchIndex === -1) {
                parts.push(<span key={currentIndex}>{text.substring(currentIndex)}</span>);
                break;
            }

            parts.push(<span key={currentIndex}>{text.substring(currentIndex, matchIndex)}</span>);
            parts.push(<mark key={matchIndex}>{text.substring(matchIndex, matchIndex + searchTerm.length)}</mark>);

            currentIndex = matchIndex + searchTerm.length;
        }

        return parts;
    }
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const term = e.target.value;
        setSearchTerm(removeAccents(term));
    };
    function onChange(id: string, valor: string) {
        console.log(id, valor)

        api.patch('confirmacao/' + id, {
            status: valor
        }).then((resposta) => {
            setAtualizar(!atualizar)
            toast.success('Alterado Status com sucesso!')
        })
        setConfirmacao(prevConfirmado => prevConfirmado.map((confirmado) => {
            if (confirmado.id === id) {
                return {
                    ...confirmado,
                    status: valor
                }
            } else {
                return confirmado
            }
        }))
    }

    useEffect(() => {
        const dados = confirmacao.filter((configuracao) => {
            const searchRegex = new RegExp(searchTerm, 'i'); // 'i' faz a busca ser case insensitive

            return (
                searchRegex.test(removeAccents(configuracao.nome)) ||
                searchRegex.test(removeAccents(configuracao.telefone)) ||
                searchRegex.test(removeAccents(configuracao.status))
                // Adicione mais campos conforme necessário
            )
        })

        setFilteredData(dados)


    }, [searchTerm])

    return (
        <SideBarPainelAdministrativo>
            <div className="overflow-y-auto h-[100vh] ">
                <div className="w-[90%] mx-auto flex justify-between items-center mt-10 ">
                    <p className="text-center text-3xl font-bold font-dancing"> Lista de Confirmação</p>
                    <div className="flex justify-center items-center bg-white px-2 border-2 rounded-lg focus-within:border-azul-evler">
                        <input onChange={handleSearch} className="w-[400px] h-10 focus:outline-none" placeholder="Busque por nome telefone ou status do usuário" />
                        <IoMdSearch size={20} />
                    </div>
                    <div className="flex gap-4">
                        <div className="gap-1 flex items-center">
                            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                            <p className="text-green-500">Confirmado: {filteredData.filter((valor) => valor.status === 'CONFIRMADO').length}</p>
                        </div>
                        <div className="gap-1 flex items-center">
                            <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                            <p className="text-orange-500">Pendente: {filteredData.filter((valor) => valor.status === 'PENDENTE').length}</p>
                        </div>
                        <div className="gap-1 flex items-center">
                            <div className="w-4 h-4 bg-red-500 rounded-full">

                            </div>
                            <p className="text-red-500">Desconhecido: {filteredData.filter((valor) => valor.status === 'DESCONHECIDO').length}</p>
                        </div>
                        <div>
                            <p className="font-bold">Total: {filteredData.length}/{confirmacao.length}</p>
                        </div>
                    </div>
                </div>
                <div className=" flex justify-center mt-6 pb-6">
                    <div className="flex w-[90%] flex-wrap gap-8 justify-center  ">
                        <table className="w-full ">
                            <thead className="rounded-xl bg-green-700 sticky-header">
                                <tr>
                                    <th className="py-4 px-4">
                                        <p className="font-bold text-start text-base text-white leading-none">Nome</p>
                                    </th>
                                    <th className="py-4 px-4">
                                        <p className="font-bold text-start text-base text-white leading-none">Telefone</p>
                                    </th>
                                    <th>
                                        <p className="font-bold text-start text-base text-white leading-none">Data</p>
                                    </th>
                                    <th className="py-4 px-4 w-40">
                                        <p className="font-bold text-start text-base text-white leading-none ">Status</p>
                                    </th>

                                </tr>
                            </thead>
                            <tbody className="rounded-b-xl">
                                {filteredData.map((confirmacao) => (
                                    <tr key={confirmacao.id} className="border-[1px] ">
                                        <th className="py-2 text-start px-4 border-[1px]">{confirmacao.nome}</th>
                                        <th className="py-2 text-start px-4 border-[1px]">{confirmacao.telefone}</th>
                                        <th className="py-2 text-start px-4 border-[1px]">
                                            {moment(confirmacao.created_at).format('DD-MM-YYYY HH:mm')}
                                        </th>
                                        <th className="py-2 text-start px-4 border-[1px]">
                                            <select value={confirmacao.status} onChange={(e) => onChange(confirmacao.id, e.target.value)} className={`w-40 h-8 rounded-lg bg-white px-4 ${confirmacao.status === 'PENDENTE' ? 'text-orange-500 bg-orange-100' : confirmacao.status === 'CONFIRMADO' ? 'text-green-500 bg-green-100' : 'text-red-500 bg-red-100'}`}>
                                                <option value='PENDENTE' className="text-orange-500  h-16 py-2 font-bold bg-orange-100">
                                                    Pendente
                                                </option>
                                                <option value="CONFIRMADO" className="text-green-500 h-16 py-2 font-bold bg-green-100">
                                                    Confirmado
                                                </option>
                                                <option value="DESCONHECIDO" className="text-red-500 h-16 py-2 font-bold bg-red-100">
                                                    Desconhecido
                                                </option>
                                            </select>
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