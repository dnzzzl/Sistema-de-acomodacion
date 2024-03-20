"use client";
import React, { useMemo } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import Image from "next/image";
import todoIncluidoLogo from "@/public/images/xxi.png";
import FormSection from "./form-section";
import { Button } from "./ui/button";
import EventSchedule from "./schedule-component";

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

const Landing = () => {
  const targetDate = "2024-04-10T00:00:00Z";
  const targetDateTimestamp = useMemo(() => new Date(targetDate).getTime(), []);

  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  React.useEffect(() => {
    const intervalId = setInterval(forceUpdate, 1000);
    return () => clearInterval(intervalId);
  }, [forceUpdate]);

  const timeLeft = calculateTimeLeft(targetDateTimestamp);

  return (
    <>
      <div className="flex items-center justify-center mt-4 mb-4">
        <Image src={todoIncluidoLogo} width={1200} alt=""></Image>
      </div>
      <div className="h-10" style={{ background: "#B3B5B6" }}></div>
      <section
        className="justify-center min-h-screen bg-cover bg-center relative py-8"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10">
          {" "}
          {/* Asegura que este div esté por encima del overlay */}
          <h3 className="text-center  font-medium text-gray-200 text-xl pt-32 mb-10">
            XXI Meeting of the Results-Based Budgeting Network for Latin America
            and the Caribbean
          </h3>
          <h1 className="text-8xl text-center font-bold mb-10 px-48 text-white">
            Welcome to our XXI Meeting for Latin America and the Caribbean
          </h1>
          <div className=" flex flex-row items-center justify-around mx-auto text-center px-48 text-gray-100">
            Following the closure of the United Nations Climate Change
            Conference - COP 28, in December 2023 in Dubai, and in line with the
            agreements reached during the XX Meeting of the Results-Based
            Budgeting Network for Latin America and the Caribbean in May 2023 in
            Panama City, this twenty-first meeting of the Network aims to
            strengthen the exchange of experiences regarding strategies and
            specific challenges related to the governance and governmental
            management involved in implementing green budgeting. This serves as
            a tool to assess and drive improvements in aligning national
            expenditure and revenue processes with climate goals and other
            environmental objectives.
          </div>
          <div className="flex items-center justify-center mb-20 mt-20">
            <Button
              size="lg"
              className="px-20 text-2xl py-10 bg-white hover:bg-gray-300 text-black"
            >
              Book today
            </Button>
          </div>
        </div>
        <section className="flex flex-row justify-between mx-auto max-w-7xl z-50 relative bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="flex-1 p-10 pt-20">
            <EventSchedule />
          </div>

          <div className="flex-1 py-10 rounded-md px-10">
            <FormSection />
          </div>
        </section>
        <div className="flex justify-center bg-cover bg-center relative gap-4 pb-20 pt-20">
          <section className="relative flex justify-center gap-4 ">
            <div className="flex flex-row gap-4 justify-center items-center">
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
          {/* Días */}
        </div>
      </section>

      {/* Aquí puedes continuar con el resto de tu componente */}
    </>
  );
};

export default Landing;
