import Image from 'next/image';

export default function Hero() {
  return (
    <div className="bg-[url('/image/capa.jpg')] w-full h-[100vh] bg-cover">
      <div className="flex flex-col items-center justify-center pt-32 pb-10 px-[12%]">
        <div className="text-center">
        <p className="text-[#b0cddf] font-alumni text-6xl font-bold">Rafael & Mirelle</p>
          <p className="text-black font-andika text-justify mt-4">
            Junte-se a nós para celebrar o nosso casamento!
          </p>
          <p className="text-black font-andika text-justify mt-2">
            Data: 24 de agosto de 20245
          </p>
          <div className="mt-8">
            <button className="inline-block bg-serenity text-white mt-3 py-1 px-6 rounded-lg font-medium text-lg cursor-pointer shadow-md hover:bg-serenity-dark transition-colors">
              Confirmar Presença
            </button>
          </div>
        </div>
        <div className="mt-8">
          <Image src='/image/capa.jpg' width={500} height={200} alt="Imagem do casal" />
        </div>
      </div>
    </div>
  );
}