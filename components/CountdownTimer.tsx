import React, { useState, useEffect } from 'react';

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

    return (
        <div className='text-center text-2xl font-bold'>
            <p>Contagem Regressiva</p>
            <div className='flex flex-wrap gap-2 justify-center mt-2'>
                <div className='bg-white text-black w-24 h-20 md:w-32 md:h-24'>
                    <div className='h-7 md:h-10 w-full bg-blue-200'>
                        <p className='font-bold text-lg md:text-xl'>Dias</p>
                    </div>
                    <div className='flex justify-center items-center h-12 md:h-14 text-3xl md:text-4xl font-bold'>
                        {timeLeft.days}
                    </div>
                </div>
                <div className='bg-white text-black w-24 h-20 md:w-32 md:h-24'>
                    <div className='h-7 md:h-10 w-full bg-blue-200'>
                        <p className='font-bold text-lg md:text-xl'>Horas</p>
                    </div>
                    <div className='flex justify-center items-center h-12 md:h-14 text-3xl md:text-4xl font-bold'>
                        {timeLeft.hours}
                    </div>
                </div>
                <div className='bg-white text-black w-24 h-20 md:w-32 md:h-24'>
                    <div className='h-7 md:h-10 w-full bg-blue-200'>
                        <p className='font-bold text-lg md:text-xl'>Minutos</p>
                    </div>
                    <div className='flex justify-center items-center h-12 md:h-14 text-3xl md:text-4xl font-bold'>
                        {timeLeft.minutes}
                    </div>
                </div>
                <div className='bg-white text-black w-24 h-20 md:w-32 md:h-24'>
                    <div className='h-7 md:h-10 w-full bg-blue-200'>
                        <p className='font-bold text-lg md:text-xl'>Segundos</p>
                    </div>
                    <div className='flex justify-center items-center h-12 md:h-14 text-3xl md:text-4xl font-bold'>
                        {timeLeft.seconds}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountdownTimer;
