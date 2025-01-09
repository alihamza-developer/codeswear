import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { GoSidebarExpand } from "react-icons/go";


const Navbar = () => {
  return (
    <nav className="text-gray-600 bg-white body-font border-b sticky top-0 mb-5">

      <div className="mx-5 flex justify-between p-3 items-center">

        <a className="flex title-font font-medium items-center text-gray-900">
          <Image src="/images/codeswearcircle.png" width={50} height={50} alt='Logo' />
          <span className="ml-2 text-xl">CodesWear</span>
        </a>

        <ul className="hidden md:flex flex-wrap cursor-pointer items-center text-base justify-center ">
          <Link href="/"><li className="mr-5 hover:text-gray-900">Home</li></Link>
          <Link href="/about"><li className="mr-5 hover:text-gray-900">About</li></Link>
          <Link href="/contact"><li className="mr-5 hover:text-gray-900">Contact</li></Link>
        </ul>

        <div className='hidden lg:block'>
          <button className="mx-1 inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Login
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          <button className="mx-1 inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Signup
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>

        <button className='block md:hidden'><GoSidebarExpand size={20} /></button>
      </div>

    </nav>
  )
}

export default Navbar
