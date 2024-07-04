import React, { useEffect, useState } from 'react';
import SideBarPainelAdministrativo from '@/components/SideBarPainelAdministrativo';
import { api } from '@/services/apiClient';
import moment from 'moment';
import { toast } from 'react-toastify';
import diacritics from 'diacritics';
import { IoMdSearch } from 'react-icons/io';

interface Confirmacao {
  id: string;
  nome: string;
  telefone: string;
  status: string;
  created_at: Date;
  updated_at: Date;
}

export default function Dashboard() {
  const [confirmacao, setConfirmacao] = useState<Confirmacao[]>([]);
  const [filteredData, setFilteredData] = useState<Confirmacao[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [atualizar, setAtualizar] = useState<boolean>(false);

  useEffect(() => {
    api.get('confirmacao').then((resposta) => {
      setConfirmacao(resposta.data);
      setFilteredData(resposta.data);
    });
  }, [atualizar]);

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
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  function highlightSearchTerm(text: string, searchTerm: string): React.ReactNode {
    if (!text || !searchTerm || typeof text !== 'string' || typeof searchTerm !== 'string') {
      return text;
    }

    const normalizedText = removeAccentsAndLowercase(text);
    const normalizedSearchTerm = removeAccentsAndLowercase(searchTerm);
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
    console.log(id, valor);

    api
      .patch('confirmacao/' + id, { status: valor })
      .then((resposta) => {
        setAtualizar(!atualizar);
        toast.success('Alterado Status com sucesso!');
      });

    setConfirmacao((prevConfirmado) =>
      prevConfirmado.map((confirmado) => {
        if (confirmado.id === id) {
          return { ...confirmado, status: valor };
        } else {
          return confirmado;
        }
      })
    );
  }

  useEffect(() => {
    const dados = confirmacao.filter((configuracao) => {
      const searchRegex = new RegExp(searchTerm, 'i');

      return (
        searchRegex.test(removeAccents(configuracao.nome)) ||
        searchRegex.test(removeAccents(configuracao.telefone)) ||
        searchRegex.test(removeAccents(configuracao.status))
      );
    });

    setFilteredData(dados);
  }, [searchTerm]);

  return (
    <SideBarPainelAdministrativo>
      <div className="overflow-y-auto h-[100vh] bg-gray-100">
        <div className="w-[90%] mx-auto flex justify-between items-center mt-10 ">
          <p className="text-3xl font-bold">Lista de Confirmação</p>
          <div className="flex justify-center items-center bg-white px-2 border-2 rounded-lg focus-within:border-blue-500">
            <input
              onChange={handleSearch}
              className="w-[400px] h-10 focus:outline-none"
              placeholder="Busque por nome, telefone ou status do usuário"
            />
            <IoMdSearch size={20} />
          </div>
          <div className="flex gap-4">
            <div className="gap-1 flex items-center">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <p className="text-green-500">
                Confirmado: {filteredData.filter((valor) => valor.status === 'CONFIRMADO').length}
              </p>
            </div>
            <div className="gap-1 flex items-center">
              <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
              <p className="text-orange-500">
                Pendente: {filteredData.filter((valor) => valor.status === 'PENDENTE').length}
              </p>
            </div>
            <div className="gap-1 flex items-center">
              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              <p className="text-red-500">
                Desconhecido: {filteredData.filter((valor) => valor.status === 'DESCONHECIDO').length}
              </p>
            </div>
            <div>
              <p className="font-bold">
                Total: {filteredData.length}/{confirmacao.length}
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-6 pb-6">
          <div className="w-[90%]">
            <table className="w-full bg-white rounded-lg shadow-md">
              <thead className="bg-green-700 text-white">
                <tr>
                  <th className="py-4 px-4 text-left">Nome</th>
                  <th className="py-4 px-4 text-left">Telefone</th>
                  <th className="py-4 px-4 text-left">Data</th>
                  <th className="py-4 px-4 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((confirmacao) => (
                  <tr key={confirmacao.id} className="border-t hover:bg-gray-100 transition duration-200">
                    <td className="py-2 px-4 font-bold">{confirmacao.nome}</td>
                    <td className="py-2 px-4 font-bold">
                      <a href={`https://wa.me/55${confirmacao.telefone.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer">
                        {confirmacao.telefone}
                      </a>
                    </td>
                    <td className="py-2 px-4">{moment(confirmacao.created_at).format('DD-MM-YYYY HH:mm')}</td>
                    <td className="py-2 px-4">
                      <select
                        value={confirmacao.status}
                        onChange={(e) => onChange(confirmacao.id, e.target.value)}
                        className={`w-full h-8 rounded-lg px-2 ${
                          confirmacao.status === 'PENDENTE'
                            ? 'text-orange-500 bg-orange-100'
                            : confirmacao.status === 'CONFIRMADO'
                            ? 'text-green-500 bg-green-100'
                            : 'text-red-500 bg-red-100'
                        }`}
                      >
                        <option value="PENDENTE" className="text-orange-500 bg-orange-100">
                          Pendente
                        </option>
                        <option value="CONFIRMADO" className="text-green-500 bg-green-100">
                          Confirmado
                        </option>
                        <option value="DESCONHECIDO" className="text-red-500 bg-red-100">
                          Desconhecido
                        </option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </SideBarPainelAdministrativo>
  );
}