import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import coplac_logo from "@/public/coplac_logo.png";
import idb_logo_es from  "@/public/idb_slogan_ES_color.png";
import idb_logo_en from  "@/public/idb_slogan_EN_color.png";
import minprep_logo from  "@/public/minprep_logo.png";
import { useLocale } from 'next-intl';

const SimpleLogosHeader = () => {
    
  const currentLocale = useLocale();


  return (
    <div className="bg-white flex flex-row items-center justify-around mx-auto max-w-3xl m-4">
        <Popover>
          <PopoverTrigger className="text-gray-600 ml-4">
            <Globe/> en/es
          </PopoverTrigger>
          <PopoverContent>
            <Link href={"/en"} className="hover:underline block ">English</Link>
            <Link href={"/es"} className="hover:underline block ">Espanol</Link>
          </PopoverContent>
        </Popover>
        
        <div className=' flex-1 overflow-hidden'><Image src={minprep_logo} alt="Ministerio de Presupuestos Logo"  /></div>
        <div className=' flex-1 overflow-hidden scale-75'>
            {currentLocale == "es" ? <Image src={idb_logo_es} alt="IDB Logo"  className='mx-auto'/>:<Image src={idb_logo_en} alt="IDB Logo"  objectFit="contain" className='mx-auto'/>}
        </div>
        <div className=' flex-1 overflow-hidden'><Image src={coplac_logo} alt="COPLAC Logo"  /></div>
    </div>
  )
}

export default SimpleLogosHeader