import React from 'react'
import { CalendarIcon} from 'lucide-react'
import coplac_logo from "@/public/coplac_logo.jpg"
import idb_logo from  "@/public/IDB.svg"
import minprep_logo from  "@/public/minprep_logo.png"
import minhac_logo from "@/public/minhac_logo.png"
import Image from 'next/image'
import todo_incl_logo from "@/public/todo_incl.png"
import EventSchedule from './schedule-component'
import Link from 'next/link'
const Landing = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
        {/* Hero Section */}
        <section className="bg-white py-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap items-center justify-between">
                    <div className="w-full md:w-1/2">
                        <h1 className="text-4xl font-bold mb-4">XXI Meeting of the Results-Based Budgeting Network for Latin America and the Caribbean</h1>
                        <p className="text-gray-600 mb-8">
                            Following the closure of the United Nations Climate Change Conference - COP 28, in December 2023 in Dubai, and in line with the agreements reached during the XX Meeting of the Results-Based Budgeting Network for Latin America and the Caribbean in May 2023 in Panama City, this twenty-first meeting of the Network aims to strengthen the exchange of experiences regarding strategies and specific challenges related to the governance and governmental management involved in implementing green budgeting. This serves as a tool to assess and drive improvements in aligning national expenditure and revenue processes with climate goals and other environmental objectives.
                        </p>
                        <div className="flex flex-row items-center justify-around mb-8">
                            <div className=' flex-1 overflow-hidden'><Image src={minprep_logo} alt="Ministerio de Presupuestos Logo"  objectFit="contain" /></div>
                            <div className=' flex-1 overflow-hidden'><Image src={minhac_logo} alt="Ministerio de Hacienda Logo"  objectFit="contain" /></div>
                            <div className=' flex-1 overflow-hidden'><Image src={coplac_logo} alt="COPLAC Logo"  objectFit="contain" /></div>
                            <div className=' flex-1 overflow-hidden'><Image src={idb_logo} alt="IDB Logo"  objectFit="contain" /></div>
                        </div>
                        <div className="flex items-center justify-center mb-8">
                            <div className="text-gray-600 font-semibold ">2024</div>
                                <CalendarIcon size={64} className="text-gray-600 mr-2" />
                            <div className="text-gray-600 font-semibold">April 10th - April 12th</div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full md:w-1/2 justify-center items-center  py-10">
                        <Link href="/form" className="bg-gray-800 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-full">
                            Book Your Stay
                        </Link>
                        <p className="text-gray-600 my-8">courtesy of</p>
                        <Image src={todo_incl_logo} alt="Logo" width={250} height={250} />
                    </div>
                </div>
            </div>    
        </section>
        <hr className='py-10'/>
        <div className="container mx-auto px-4 min-h-screen">
            <EventSchedule/>
        </div>
    </div>
  )
}

export default Landing