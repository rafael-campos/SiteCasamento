import Image from "next/image";
import CountdownTimer from "./CountdownTimer";

export default function Banner() {
    return (
        <div className="w-full min-h-screen bg-home bg-cover bg-center">
            <div className="bg-black/70 w-full min-h-screen flex justify-center items-center">
                <div className="text-center">
                    <div className="inline-block">
                        <Image src='/images/logo.png' width={560} height={560} alt="imagem da moldura" />
                    </div>
                    <div className="text-white mt-8">
                        <CountdownTimer targetDate={new Date('2024-08-24T15:30:00')} />
                    </div>
                </div>
            </div>
        </div>
    );
}
