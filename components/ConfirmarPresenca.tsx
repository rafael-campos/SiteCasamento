
import { url } from "@/global/variaveis";
import { api } from "@/services/apiClient";
import { Form } from "antd";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";

export default function ConfirmarPresenca() {
    const [open, setOpen] = useState<boolean>(false)
    const [nome, setNome] = useState<string>('')
    const [telefone, setTelefone] = useState<string>('');
    const [telefoneError, setTelefoneError] = useState<boolean>(false)
    const [telefoneNull, setTelefoneNull] = useState<boolean>(false)

    function formatPhoneNumber(value: string) {
        // Remove todos os caracteres não numéricos
        const val = value.replace(/\D/g, "");

        // Verifica se o valor possui o DDD e formata de acordo
        if (val.length <= 2) {
            return val;
        } else if (val.length <= 6) {
            return `(${val.substring(0, 2)}) ${val.substring(2)}`;
        } else if (val.length <= 10) {
            return `(${val.substring(0, 2)}) ${val.substring(2, 6)}-${val.substring(6)}`;
        } else {
            return `(${val.substring(0, 2)}) ${val.substring(2, 7)}-${val.substring(7, 11)}`;
        }
    }
    function handleTelefoneChange(event: React.ChangeEvent<HTMLInputElement>) {
        const formattedTelefone = formatPhoneNumber(event.target.value);
        if (event.target.value.length === 0) {
            setTelefoneNull(true)
        } else {
            setTelefoneNull(false)
        }
        setTelefone(formattedTelefone);
        setTelefoneError(false)
    }
    const onFinish = (e: any) => {
        console.log(nome)
        console.log(telefone)
        if (telefone.length < 15) {
            setTelefoneError(true)
        }
        if (telefone.length === 15) {
            axios.post(url + 'confirmacao', {
                nome: nome,
                telefone: telefone,
                status: 'PENDENTE'
            }).then((resposta) => {
                setNome('')
                setTelefone('')
                toast.success('Presença confirmada com sucesso!')
                setOpen(false)
            })
        }

    }
    return (
        <div className="overflow-y-hidden h-[100vh]">
            <p className="md:text-5xl text-4xl text-center mt-20 font-dancing font-bold text-blue-600">Confirme sua presença</p>
            <p className="text-center text-gray-400 text-2xl  mt-2">A confirmação é individual</p>
            <div onClick={() => setOpen(true)} className="container flex justify-center items-end h-[50vh]  md:mt-32 mt-20 ">
                <div className={` ${open === false ? 'blink w-0 h-0 md:bottom-[260px] bottom-[160px] z-40 relative ' : 'hidden'}`}>
                    <div className="md:w-[500px] w-[300px] md:h-[300px] h-[200px] flex justify-center items-center">
                    <p className="font-bold text-white">Clique para abrir</p>
                    </div>
                    
                </div>
                <div className={`md:w-[500px] w-[300px] md:h-[300px] h-[200px] relative bg-orange-400 shadow-2xl `}>
                    <div className={`relative md:border-t-[150px] border-t-[100px]  border-t-orange-200 md:border-r-[250px] border-r-[150px]   border-r-transparent md:border-l-[250px] border-l-[150px] border-l-transparent origin-top ${open === true ? 'rotate-180 z-0 ' : 'z-30'}   `}>
                        <div className="w-12 h-12 ">
                            <Image alt="logo juju" width={1430} height={1430} src={'/images/logo.webp'} className=" relative bottom-6 right-6 z-30 bg-white rounded-full  " />
                        </div>
                    </div>

                    <div className="absolute z-20  h-full w-full top-0 md:border-t-[150px]  border-t-[100px] border-t-transparent md:border-b-[150px] border-b-[100px] border-b-orange-300 md:border-r-[250px] border-r-[150px] border-r-orange-300 md:border-l-[250px] border-l-[150px] border-l-orange-300 ">

                    </div>
                    <div className="">
                        <Form onFinish={onFinish} className="flex justify-center">
                            <div className={`absolute mx-auto w-[85%] z-10 md:h-[280px] h-[180px] border-[1px] border-gray-200 bg-white top-4 transition-transform  duration-[2000ms] ease-in-out ${open === true ? '-translate-y-[180px] z-10 h-[190px]' : ''} `}>
                                <div className="md:px-16 px-6 md:py-10 py-4">


                                    <div className="space-y-1 ">
                                        <p className="md:text-2xl text-lg font-dancing text-black ">Nome</p>
                                        <input name="nome" value={nome} onChange={(e) => setNome(e.target.value)} required className="border-b-[1px] border-blue-600 w-full text-black px-2 input-custom " />
                                    </div>
                                    <div className="space-y-1 md:mt-4 mt-1">
                                        <p className="md:text-2xl text-lg font-dancing text-black ">Telefone</p>
                                        <input placeholder="(32) 99999 9999" name="telefone" value={telefone} required onChange={handleTelefoneChange} className="border-b-[1px] border-blue-600 text-black w-full px-2 input-custom  " />
                                        {telefoneError && (<p className="text-[12px] text-red-500">telefone invalido!</p>)}
                                    </div>
                                    

                                </div>

                            </div>
                            <div className={`relative transition-all z-10 duration-[3100ms] ease-in-out ${open === true ? '-translate-y-[180px] z-30 h-[190px]' : ''} `}>
                                <div className="flex justify-center items-center md:pt-6 pt-3   ">
                                    <button type="submit" className="px-6 py-2 bg-blue-600 cursor-pointer text-white font-dancing md:text-xl text-base rounded-md">Enviar</button>
                                </div>
                            </div>
                        </Form>
                    </div>

                </div>



            </div>
        </div >
    )
}