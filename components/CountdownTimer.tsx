import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Importa motion para animações

interface CountdownTimerProps {
    targetDate: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
    const calculateTimeLeft = (): { days: number; hours: number; minutes: number; seconds: number } => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const targetDateString = targetDate.toLocaleDateString('pt-BR', {
        day: '2-digit', 
        month: '2-digit', 
        year: 'numeric'
    });

    const targetTimeString = targetDate.toLocaleTimeString('pt-BR', {
        hour: '2-digit', 
        minute: '2-digit' 
    });

    return (
        <div className='text-center text-2xl font-bold mb-20'>
            <motion.p 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-4xl font-dancing text-white mb-4"
            >
                {targetDateString} às {targetTimeString}
            </motion.p> {/* Adiciona a data e hora formatadas */}

            <p className="text-xl md:text-2xl">Contagem Regressiva</p>

            <div className='flex flex-wrap gap-4 justify-center mt-4'>
                {/* Contador de Dias */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }} // Adiciona um pequeno atraso
                    className='bg-white text-black rounded-lg shadow-md p-4 flex flex-col items-center w-24 h-24 md:w-32 md:h-28' 
                >
                    <div className='h-8 md:h-10 w-full bg-blue-200 rounded-t-lg flex items-center justify-center'> 
                        <p className='font-bold text-lg md:text-xl'>Dias</p>
                    </div>
                    <div className='flex justify-center items-center h-16 md:h-18 text-3xl md:text-4xl font-bold'>
                        {timeLeft.days}
                    </div>
                </motion.div>

                {/* Contador de Horas */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }} 
                    className='bg-white text-black rounded-lg shadow-md p-4 flex flex-col items-center w-24 h-24 md:w-32 md:h-28'
                >
                    <div className='h-8 md:h-10 w-full bg-blue-200 rounded-t-lg flex items-center justify-center'>
                        <p className='font-bold text-lg md:text-xl'>Horas</p>
                    </div>
                    <div className='flex justify-center items-center h-16 md:h-18 text-3xl md:text-4xl font-bold'>
                        {timeLeft.hours}
                    </div>
                </motion.div>

                {/* Contador de Minutos */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className='bg-white text-black rounded-lg shadow-md p-4 flex flex-col items-center w-24 h-24 md:w-32 md:h-28' 
                >
                    <div className='h-8 md:h-10 w-full bg-blue-200 rounded-t-lg flex items-center justify-center'>
                        <p className='font-bold text-lg md:text-xl'>Minutos</p>
                    </div>
                    <div className='flex justify-center items-center h-16 md:h-18 text-3xl md:text-4xl font-bold'>
                        {timeLeft.minutes}
                    </div>
                </motion.div>

                {/* Contador de Segundos */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className='bg-white text-black rounded-lg shadow-md p-4 flex flex-col items-center w-24 h-24 md:w-32 md:h-28' 
                >
                    <div className='h-8 md:h-10 w-full bg-blue-200 rounded-t-lg flex items-center justify-center'>
                        <p className='font-bold text-lg md:text-xl'>Segundos</p>
                    </div>
                    <div className='flex justify-center items-center h-16 md:h-18 text-3xl md:text-4xl font-bold'>
                        {timeLeft.seconds}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default CountdownTimer;