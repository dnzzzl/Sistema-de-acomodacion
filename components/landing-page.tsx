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
const Landing = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
        {/* Hero Section */}
        <section className="bg-white py-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap md:grid md:grid-cols-2 items-center justify-between gap-4">
                    <div className="w-full flex flex-col justify-start h-full">
                        <h1 className="text-4xl font-bold mb-4">XXI Meeting of the Results-Based Budgeting Network for Latin America and the Caribbean</h1>
                        <p className="text-gray-600 mb-8">
                            Following the closure of the United Nations Climate Change Conference - COP 28, in December 2023 in Dubai, and in line with the agreements reached during the XX Meeting of the Results-Based Budgeting Network for Latin America and the Caribbean in May 2023 in Panama City, this twenty-first meeting of the Network aims to strengthen the exchange of experiences regarding strategies and specific challenges related to the governance and governmental management involved in implementing green budgeting. This serves as a tool to assess and drive improvements in aligning national expenditure and revenue processes with climate goals and other environmental objectives.
                        </p>
                        <div className="bg-white flex items-center justify-center py-8 mb-8">
            <div className="text-gray-600 font-semibold ">2024</div>
                <CalendarIcon size={64} className="text-gray-600 mr-2" />
            <div className="text-gray-600 font-semibold">April 10th - April 12th</div>
        </div>
                    </div>
                    <div className="flex flex-col w-full justify-center items-center ">
                    <h2 className='font-bold text-xl md:text-3xl mb-4'>Book Your Stay</h2>
                        <div className='border-2 border-gray-300 rounded-md  p-4'>
                            <FormSection/></div>
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