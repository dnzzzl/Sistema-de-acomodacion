import React from 'react'
import { CalendarIcon} from 'lucide-react'
import coplac_logo from "@/public/coplac_logo.png"
import idb_logo from  "@/public/IDB.svg"
import minprep_logo from  "@/public/minprep_logo.png"
import minhac_logo from "@/public/minhac_logo.png"
import Image from 'next/image'
import EventSchedule from './schedule-component'
import Link from 'next/link'
import FormSection from './form-section'
import {useTranslations} from 'next-intl';

const Landing = () => {
    const t = useTranslations('Index');
    const t2 = useTranslations('FormSection');

    const form_texts =  {
        stay_type_label: t2('stay_type_label'),
        room_type_single: t2('room_type_single'),
        room_type_double: t2('room_type_double'),
        calendar_heading: t2('calendar_heading'),
        calendar_description: t2('calendar_description'),
        name_label: t2('name_label'),
        name2_label: t2('name2_label'),
        submit_label:t2('submit_label')
       }

  return (
    <div className="bg-gray-100 min-h-screen">
        {/* Hero Section */}
        <section className="bg-white py-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap md:grid md:grid-cols-2 items-center justify-between gap-4">
                    <div className="w-full flex flex-col justify-start h-full">
                        <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
                        <p className="text-gray-600 mb-8">
                            {t('paragraph')}
                        </p>
                        <div className="bg-white flex items-center justify-center py-8 mb-8">
            <div className="text-gray-600 font-semibold ">2024</div>
                <CalendarIcon size={64} className="text-gray-600 mr-2" />
            <div className="text-gray-600 font-semibold">{t('date')}</div>
        </div>
                    </div>
                    <div className="flex flex-col w-full justify-center items-center ">
                    <h2 className='font-bold text-xl md:text-3xl mb-4'>{t('form_title')}</h2>
                        <div className='border-2 border-gray-300 rounded-md  p-4'>
                            <FormSection {...form_texts}/>
                        </div>
                    </div>
                </div>
            </div>    
        </section>
        <div className=" flex flex-row items-center justify-around mx-auto max-w-7xl ">
            <div className='max-w-64 flex-1 overflow-hidden'><Image src={minprep_logo} alt="Ministerio de Presupuestos Logo"  objectFit="contain" /></div>
            <div className='max-w-64 flex-1 overflow-hidden'><Image src={minhac_logo} alt="Ministerio de Hacienda Logo"  objectFit="contain" /></div>
            <div className='max-w-64 flex-1 overflow-hidden'><Image src={idb_logo} alt="IDB Logo"  objectFit="contain" className='mx-auto'/></div>
            <div className='max-w-64 flex-1 overflow-hidden'><Image src={coplac_logo} alt="COPLAC Logo"  objectFit="contain" /></div>
        </div>
       
        <hr className='py-10'/>
        <div className="container mx-auto px-4 min-h-screen">
            <EventSchedule/>
        </div>
    </div>
  )
}

export default Landing