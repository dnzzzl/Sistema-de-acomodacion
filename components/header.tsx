"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import todo_incl_logo from "@/public/todo_incl.png"
import Link from 'next/link';
import { Globe, MenuIcon, PanelTopCloseIcon } from 'lucide-react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <button
                type="button"
                className="text-white hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white sm:hidden"
                onClick={toggleMenu}
              >
                {isOpen ? <PanelTopCloseIcon/> : <MenuIcon/>}
              </button>
            </div>
            <div className="ml-4">
              <Image src={todo_incl_logo} alt="Logo" width={125} height={125} />
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                    <Link href="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                    Home
                    </Link>
                    <Link href="/about" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                    About
                    </Link>
                    <Link href="/form" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                    Booking Form
                    </Link>
                    <Link href="/contact" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                    Contact
                    </Link>
                </div>
                </div>
            <div className="ml-3 relative">
              <div>
                <button
                  type="button"
                  className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span className="sr-only">Open language menu</span>
                  <Globe className="text-white h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link href="/about" className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
              About
            </Link>
            <Link href="/form" className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
              Booking Form
            </Link>
            <Link href="/contact" className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;