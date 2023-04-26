'use client';

import Link from "next/link"
import Image from "next/image"
import {SiBuymeacoffee} from "react-icons/si"
const  Footer = () => {
  return (
    <footer className=" bg-slate-700 p-4 h-52 relative bottom-0 drop-shadow-xl w-full z-50 m-0" >
<div className="w-full relative md:w-5/6 h-full grid grid-cols-3 grid-rows-3 md:flex-row md:flex justify-evenly md:items-center mx-auto gap-10">
  <div className="col-span-1 row-span-2 md:row-span-3 flex justify-start items-center md:items-center md:justify-center">
    <div className="w-14 h-14 md:w-28 md:h-28 relative">
      <Image 
        src="/images/junkieFooter.png"
        fill
        alt='junkieFooter'
        className="object-cover w-full h-full"
      />
    </div>
    <Link href="/" className="text-white/90 no-underline hover:text-white text-xs md:text-base font-bold">
      Shadow Slave Junkie
    </Link>  
  </div>
  <div className="col-span-2 row-span-1 md:row-span-3 flex flex-col items-start justify-start md:items-center">
    <h1 className="text-slate-50 text-xl font-semibold">
      Why?
    </h1>
    <p className="w-full text-xs md:text-base text-slate-100 font-light">
      This is a project built, run and financed by me alone. I made it so that SS fans who can not get access to the privilege chapters, to read it on here.cough Definitely not me before cough. Please consider supporting and contributing anyway you can. I will keep solely financing it until my pockets run dry.
    </p>  
  </div>
  <div className="col-span-3 row-span-1 flex items-start justify-center md:justify-end">
    <a href='https://www.buymeacoffee.com/imaamy01S' className="flex items-center justify-evenly gap-2 border-2 cursor-pointer hover:scale rounded-lg text-yellow-500 hover:text-slate-50 bg-slate-50 hover:bg-yellow-500 transition-colors ease-in-out duration-500 h-10 p-2">
      <SiBuymeacoffee/>
      <h3>Donate</h3>
    </a>
  </div>
</div>

    </footer>
  )
}
export default Footer;