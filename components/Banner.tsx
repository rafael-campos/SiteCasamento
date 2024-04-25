import Image from "next/image";
import { useEffect, useState } from "react";
import CountdownTimer from "./CountdownTimer";

export default function Banner() {
    
    return (
        <div className="w-full h-[100vh] bg-home bg-cover bg-center">
            <div className="bg-black/70 w-full h-[100vh] flex justify-center items-center">
                <div>
                    <Image src='/images/logo.png' width={560} height={560} alt="imagem da moldura" />
                    <div className="text-white">
                        <div>

                        </div>
                        <CountdownTimer targetDate={new Date('2024-08-24T15:30:00')} />
                    </div>
                </div>

            </div>
        </div>
    )
}