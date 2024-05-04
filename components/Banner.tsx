import Image from "next/image";
import CountdownTimer from "./CountdownTimer";

export default function Banner() {
    return (
        <div className="w-full min-h-screen bg-home bg-cover bg-center mt-12">
            <div className="bg-black/70 w-full min-h-screen flex justify-center items-center">
                <div className="text-center">
                    <div className="inline-block">
                        <Image src='/images/logo.webp' width={460} height={460} alt="imagem da moldura" />
                    </div>
                    <div className="text-white mt-2">
                        <CountdownTimer targetDate={new Date('2024-08-24T15:30:00')} />
                    </div>
                </div>
            </div>
        </div>
    );
}
