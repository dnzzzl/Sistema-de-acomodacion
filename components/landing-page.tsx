import React from "react";
import FormSection from "./form-section";
import EventSchedule from "./schedule-component";
import {useTranslations} from 'next-intl';
import CounterComponent from "./date-counter";
import SimpleLogosHeader from "./simple_logos_header";

const Landing = () => {

  const t = useTranslations("Index");
  const t2 = useTranslations("FormSection");

  const form_texts = {
    stay_type_label: t2("stay_type_label"),
    room_type_single: t2("room_type_single"),
    room_type_double: t2("room_type_double"),
    calendar_heading: t2("calendar_heading"),
    calendar_description: t2("calendar_description"),
    name_label: t2("name_label"),
    name2_label: t2("name2_label"),
    submit_label: t2("submit_label"),
  };

  return (
    <>
      <SimpleLogosHeader/>
      <section
        className="justify-center min-h-screen bg-cover bg-center relative py-8"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10">
          <h1 className="text-3xl md:text-5xl lg:text-8xl text-center font-bold mb-10 px-12 md:px-48 text-white">
            {t("title")}
          </h1>
          <div className=" flex flex-row items-center justify-around mx-auto text-center text-sm md:text-lg px-8 md:px-48 text-gray-100">
            {t("paragraph")}
          </div>
          <div className="flex items-center justify-center mt-20"></div>
        </div>
        <section className="flex flex-col-reverse md:grid md:grid-cols-2 justify-between mx-4 md:mx-auto max-w-7xl z-50 relative bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="flex-1 p-10 pt-20">
            <EventSchedule />
          </div>
          
          <div className="flex-1 py-10 rounded-md px-10">
            <FormSection {...form_texts} />
          </div>
        </section>
        <div className="flex justify-center bg-cover bg-center relative gap-4 pb-20 pt-20">
          <CounterComponent />
        </div>
      </section>

      {/* Aquí puedes continuar con el resto de tu componente */}
    </>
  );
};

export default Landing;