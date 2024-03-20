"use client"
import React from 'react'
import { CountdownCircleTimer } from "react-countdown-circle-timer";

type TimeLeft = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};
const calculateTimeLeft = (targetDateTimestamp: any) => {
    const nowTimestamp = new Date().getTime();
    const differenceInSeconds = Math.max(
      (targetDateTimestamp - nowTimestamp) / 1000,
      0
    );
  
    const days = Math.floor(differenceInSeconds / (3600 * 24));
    const hours = Math.floor((differenceInSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((differenceInSeconds % 3600) / 60);
    const seconds = Math.floor(differenceInSeconds % 60);
  
    return { days, hours, minutes, seconds };
  };

const CounterComponent = () => {
    
    const targetDate = "2024-04-10T00:00:00Z";
    const targetDateTimestamp = React.useMemo(() => new Date(targetDate).getTime(), []);
  
    const [, updateState] = React.useState({});
    const forceUpdate = React.useCallback(() => updateState({}), []);
  
    React.useEffect(() => {
      const intervalId = setInterval(forceUpdate, 1000);
      return () => clearInterval(intervalId);
    }, [forceUpdate]);

    const timeLeft = calculateTimeLeft(targetDateTimestamp);
  return (
    <section className="relative justify-center gap-4 ">
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <CountdownCircleTimer
                isPlaying
                duration={timeLeft.days * 86400} // Total de segundos en los días restantes
                initialRemainingTime={timeLeft.days * 86400}
                colors={["#9dfc03", "#F7B801", "#A30000", "#A30000"]}
                colorsTime={[7, 5, 2, 0]}
              >
                {({ remainingTime }) => (
                  <div className="text-center text-white text-2xl font-bold">
                    {Math.floor(remainingTime / 86400)}
                    <br />
                    Days
                  </div>
                )}
              </CountdownCircleTimer>

              {/* Horas */}
              <CountdownCircleTimer
                isPlaying
                duration={24 * 3600} // Total de segundos en un día
                initialRemainingTime={
                  timeLeft.hours * 3600 +
                  timeLeft.minutes * 60 +
                  timeLeft.seconds
                }
                colors={["#ff2a00", "#F7B801", "#A30000", "#A30000"]}
                colorsTime={[7, 5, 2, 0]}
              >
                {({ remainingTime }) => (
                  <div className="text-center text-white text-2xl font-bold">
                    {Math.floor((remainingTime % 86400) / 3600)}
                    <br />
                    Hours
                  </div>
                )}
              </CountdownCircleTimer>

              {/* Minutos */}
              <CountdownCircleTimer
                isPlaying
                duration={3600} // Total de segundos en una hora
                initialRemainingTime={timeLeft.minutes * 60 + timeLeft.seconds}
                colors={["#ff00d4", "#F7B801", "#A30000", "#A30000"]}
                colorsTime={[7, 5, 2, 0]}
              >
                {({ remainingTime }) => (
                  <div className="text-center text-white text-2xl font-bold">
                    {Math.floor((remainingTime % 3600) / 60)}
                    <br />
                    Minutes
                  </div>
                )}
              </CountdownCircleTimer>

              {/* Segundos */}
              <CountdownCircleTimer
                isPlaying
                duration={60} // Total de segundos en un minuto
                initialRemainingTime={timeLeft.seconds}
                colors={["#00ffe1", "#F7B801", "#A30000", "#A30000"]}
                colorsTime={[7, 5, 2, 0]}
                onComplete={() => ({ shouldRepeat: true, delay: 1 })} // Ajuste conforme a la nueva documentación
              >
                {({ remainingTime }) => (
                  <div className="text-center text-white text-2xl font-bold">
                    {remainingTime}
                    <br />
                    Seconds
                  </div>
                )}
              </CountdownCircleTimer>
            </div>
    </section>
  )
}

export default CounterComponent