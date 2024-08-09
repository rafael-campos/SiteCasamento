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
  tipo: string | null;
  idade: string;
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
      console.log(resposta.data);
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

  function onChangeTipo(id: string, valor: string) {
    console.log(id, valor);

    api
      .patch('confirmacao/' + id, { tipo: valor })
      .then((resposta) => {
        setAtualizar(!atualizar);
        toast.success('Alterado Convidado com sucesso!');
      });

    setConfirmacao((prevConfirmado) =>
      prevConfirmado.map((confirmado) => {
        if (confirmado.id === id) {
          return { ...confirmado, tipo: valor };
        } else {
          return confirmado;
        }
      })
    );
  }

  function onChangeIdade(id: string, valor: string) {
    console.log(id, valor);

    api
      .patch('confirmacao/' + id, { idade: valor })
      .then((resposta) => {
        setAtualizar(!atualizar);
        toast.success('Alterado Idade com sucesso!');
      });

    setConfirmacao((prevConfirmado) =>
      prevConfirmado.map((confirmado) => {
        if (confirmado.id === id) {
          return { ...confirmado, idade: valor };
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

  const handleSortAlphabetically = () => {
    const sortedData = [...filteredData].sort((a, b) =>
      a.nome.localeCompare(b.nome)
    );
    setFilteredData(sortedData);
  };

  const handlePrint = () => {
    const confirmados = filteredData.filter(
      (confirmacao) => confirmacao.status === 'CONFIRMADO'
    ).length;
    const reconfirmados = filteredData.filter(
      (confirmacao) => confirmacao.status === 'RECONFIRMADO'
    ).length;
    const convidadosBebe = filteredData.filter(
      (confirmacao) => confirmacao.idade === 'BEBE'
    ).length;
    const convidadosCrianca = filteredData.filter(
      (confirmacao) => confirmacao.idade === 'CRIANCA'
    ).length;

    const printContents = `
      Total Confirmados: ${confirmados}\n
      Total Reconfirmados: ${reconfirmados}\n
      Soma Total: ${confirmados + reconfirmados}\n
      Total Convidados 0 a 4 anos: ${convidadosBebe}\n
      Total Convidados 5 a 9 anos: ${convidadosCrianca}\n\n
      ${filteredData
        .filter(
          (confirmacao) => confirmacao.status === 'CONFIRMADO' || confirmacao.status === 'RECONFIRMADO'
        )
        .map(
          (confirmacao, index) =>
            `${index + 1}. ${confirmacao.status === 'RECONFIRMADO' ? '<b>' : ''}${
              confirmacao.nome
            }${confirmacao.status === 'RECONFIRMADO' ? '</b>' : ''}`
        )
        .join('\n')}
    `;

    const printWindow = window.open('', '', 'height=400,width=800');
    if (printWindow) {
      printWindow.document.write('<pre>' + printContents + '</pre>');
      printWindow.document.close();
      printWindow.print();
    }
  };

  return (
    <SideBarPainelAdministrativo>
      <div className="overflow-y-auto h-[100vh] bg-gray-100 flex flex-col items-center">
        <div className="w-[90%] flex justify-between items-center mt-10">
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
              <div className="w-4 h-4 bg-green-900 rounded-full"></div>
              <p className="text-green-900">
                Reconfirmado: {' '}
                {filteredData.filter((valor) => valor.status === 'RECONFIRMADO').length}
              </p>
            </div>
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
            <div className="gap-1 flex items-center">
              <div className="w-4 h-4 bg-orange-400 rounded-full"></div>
              <p className="text-orange-400">
                0 a 4 anos: {' '}
                {filteredData.filter((valor) => valor.idade === 'BEBE').length}
              </p>
            </div>
            <div className="gap-1 flex items-center">
              <div className="w-4 h-4 bg-yellow-300 rounded-full"></div>
              <p className="text-yellow-300">
                5 a 9 anos: {' '}
                {filteredData.filter((valor) => valor.idade === 'CRIANCA').length}
              </p>
            </div>
            <div>
              <p className="font-bold">
                Total: {filteredData.length}/{confirmacao.length}
              </p>
            </div>
          </div>
        </div>
        <div className="w-[90%] flex justify-end mt-6">
          <button
            onClick={handleSortAlphabetically}
            className="mr-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Ordenar Alfabeticamente
          </button>
          <button
            onClick={handlePrint}
            className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-700 transition duration-200"
          >
            Imprimir Lista
          </button>
        </div>
        <div className="w-[90%] flex justify-center mt-6 pb-6">
          <table className="w-full bg-white rounded-lg shadow-md">
            <thead className="bg-orange-400 text-white">
              <tr>
                <th className="py-4 px-4 text-left">Nome</th>
                <th className="py-4 px-4 text-left">Telefone</th>
                <th className="py-4 px-4 text-left">Data</th>
                <th className="py-4 px-4 text-left">Status</th>
                <th className="py-4 px-4 text-left">Convidado</th>
                <th className="py-4 px-4 text-left">Idade</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((confirmacao) => (
                <tr key={confirmacao.id} className="border-t hover:bg-gray-100 transition duration-200">
                  <td className={`py-2 px-4 font-bold ${confirmacao.status === 'RECONFIRMADO' ? 'font-bold' : ''}`}>
                    {highlightSearchTerm(confirmacao.nome, searchTerm)}
                  </td>
                  <td className="py-2 px-4 font-bold">
                    <a
                      href={`https://wa.me/55${confirmacao.telefone.replace(/\D/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {confirmacao.telefone}
                    </a>
                  </td>
                  <td className="py-2 px-4">
                    {moment(confirmacao.created_at).format('DD-MM-YYYY HH:mm')}
                  </td>
                  <td className="py-2 px-4">
                    <select
                      value={confirmacao.status}
                      onChange={(e) => onChange(confirmacao.id, e.target.value)}
                      className={`w-full h-8 rounded-lg px-2 ${
                        confirmacao.status === 'PENDENTE'
                          ? 'text-orange-500 bg-orange-100'
                          : confirmacao.status === 'CONFIRMADO'
                          ? 'text-green-500 bg-green-100'
                          : confirmacao.status === 'RECONFIRMADO'
                          ? 'text-white bg-green-900'
                          : 'text-red-500 bg-red-100'
                      }`}
                    >
                      <option value="PENDENTE" className="text-orange-500 bg-orange-100">
                        Pendente
                      </option>
                      <option value="CONFIRMADO" className="text-green-500 bg-green-100">
                        Confirmado
                      </option>
                      <option value="RECONFIRMADO" className="text-white bg-green-900">
                        Reconfirmado
                      </option>
                      <option value="DESCONHECIDO" className="text-red-500 bg-red-100">
                        Desconhecido
                      </option>
                    </select>
                  </td>
                  <td className="py-2 px-4">
                    <select
                      value={
                        confirmacao.tipo === null || confirmacao.tipo === undefined
                          ? undefined
                          : confirmacao.tipo
                      }
                      onChange={(e) => onChangeTipo(confirmacao.id, e.target.value)}
                      className={`w-full h-8 rounded-lg px-2 ${
                        confirmacao.tipo === null || confirmacao.tipo === 'NENHUM'
                          ? 'text-black bg-white'
                          : confirmacao.tipo === 'NOIVA'
                          ? 'text-white bg-blue-900'
                          : 'text-black bg-blue-300'
                      }`}
                    >
                      <option value="NENHUM" className="text-black  bg-white">
                        Nenhum
                      </option>
                      <option value="NOIVO" className="text-black  bg-blue-300">
                        Noivo
                      </option>
                      <option value="NOIVA" className="text-white  bg-blue-900">
                        Noiva
                      </option>
                    </select>
                  </td>
                  <td className="py-2 px-4">
                    <select
                      value={confirmacao.idade}
                      onChange={(e) => onChangeIdade(confirmacao.id, e.target.value)}
                      className={`w-full h-8 rounded-lg px-2 ${
                        confirmacao.idade === 'ADULTO' || confirmacao.idade === null
                          ? 'text-black bg-gray-300'
                          : confirmacao.idade === 'BEBE'
                          ? 'text-white bg-orange-400'
                          : 'text-black bg-yellow-300'
                      }`}
                    >
                      <option value="ADULTO" className="text-black bg-gray-300">
                        Adulto
                      </option>
                      <option value="BEBE" className="text-white bg-orange-400">
                        0 a 4 anos
                      </option>
                      <option value="CRIANCA" className="text-black bg-yellow-300">
                        5 a 9 anos
                      </option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </SideBarPainelAdministrativo>
  );
}
