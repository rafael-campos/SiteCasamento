import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { CiLogout } from "react-icons/ci";
import { FaGifts, FaListCheck } from "react-icons/fa6";
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdMessage, MdOutlineDashboard } from "react-icons/md";
import { RxGear } from "react-icons/rx";

interface Dados {
  children: ReactNode;
}
export default function SideBarPainelAdministrativo({ children }: Dados) {
  return (
    <div className="flex ">
      <div className="bg-[#BFD7ED] w-32 h-[100vh] rounded-r-lg ">
        <Link href="/">
          <div className="flex justify-center items-center gap-1 mt-6">
            <IoMdArrowRoundBack color="#99A799" />
            <p className="text-[#99A799] font-libre font-bold text-sm">
              Voltar ao Site
            </p>
          </div>
        </Link>
        <Link href="/">
          <Image
            src="/images/logo.webp"
            width={80}
            height={50}
            alt="logo cafe boucher"
            className="mx-auto mt-6"
          />
        </Link>

        <div className="mt-4 p-1">
          <Link href="/dashboard">
            <div className="hover:bg-[#D7BA98]/30 rounded-xl h-20  flex items-center justify-center ">
              <div>
                <FaListCheck color="#99A799" size={28} className="mx-auto" />
                <p className="text-[#2A6F97] font-bold text-center font-libre text-sm mt-0.5">
                  Lista de Confirmação
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="mt-4 p-1">
          <Link href="/dashboard/mensagem">
            <div className="hover:bg-[#D7BA98]/30 rounded-xl h-20 flex justify-center items-center ">
              <div>
                <MdMessage color="#99A799" size={28} className="mx-auto" />
                <p className="text-[#2A6F97] font-bold text-center font-libre text-sm mt-0.5">
                  Mensagens
                </p>
              </div>
            </div>
          </Link>
        </div>

        <div className="mt-4 p-1">
          <Link href="/" className="">
            <div className="hover:bg-[#D7BA98]/30 rounded-xl h-20 flex justify-center items-center">
              <div>
                <CiLogout color="#99A799" size={32} className="mx-auto" />
                <p className="text-[#2A6F97] font-bold text-center font-libre text-sm  mt-0.5">
                  Deslogar
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className=" w-[calc(100%-128px)]">{children}</div>
    </div>
  );
}