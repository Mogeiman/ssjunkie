'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsDiscord } from "react-icons/bs";
import { SiBuymeacoffee, SiFandom } from "react-icons/si";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <nav className=" bg-slate-50 p-4 relative top-0 drop-shadow-xl w-full z-50">
      <div className=" w-full  text-lg font-semibold mx-auto flex items-center justify-between flex-row ">
        <div className="w-full h-full flex items-center">
          <div className="w-16 h-16 relative">
            <Image
              src="/images/junkie.png"
              fill
              alt="junkieLogo"
              className="object-cover w-full h-full"
            />
          </div>
          <Link
            href="/"
            className="text-black/90 no-underline hover:text-black text-2xl font-bold"
          >
            Shadow Slave Junkie
          </Link>
        </div>

        <ul className="hidden md:flex lg:flex items-center justify-center  capitalize landscape:hidden landscape:md:flex">
          <li className="ml-8 text-blue-950 cursor-pointer hover:scale  hover:text-blue-700 ">
            <Link href="/">
              <h3>home</h3>
            </Link>
          </li>
          <li className="ml-8 text-blue-950 cursor-pointer hover:scale  hover:text-blue-700 ">
            <Link
              href="https://shadowslave.fandom.com/"
              className="flex items-center justify-evenly gap-2 border-2 p-2 rounded-lg  text-orange-600  hover:text-slate-50 hover:bg-orange-700 transition-colors ease-in-out duration-500"
            >
              <SiFandom />
              <h3>Fandom</h3>
            </Link>
          </li>
          <li className="ml-8 cursor-pointer hover:scale ">
            <Link
              href="https://discord.gg/NpDgaxRA6Y"
              className="flex items-center justify-evenly gap-2 border-2 p-2 rounded-lg  text-blue-800  hover:text-slate-50 hover:bg-blue-800 transition-colors ease-in-out duration-500"
            >
              <BsDiscord />
              <h3>discord</h3>
            </Link>
          </li>
          <li className="ml-8 cursor-pointer hover:scale ">
            <a
              href="https://www.buymeacoffee.com/imaamy01S"
              className="flex items-center justify-evenly gap-2 border-2 p-2 rounded-lg  text-yellow-500  hover:text-slate-50 hover:bg-yellow-500 transition-colors ease-in-out duration-500"
            >
              <SiBuymeacoffee />
              <h3>Donate</h3>
            </a>
          </li>
        </ul>
        {isOpen ? (
          <Image
            className={`${
              !isOpen && "hidden"
            } block md:hidden lg:hidden landscape:block  landscape:md:hidden`}
            src="/images/menu-outline.svg"
            height={30}
            width={30}
            alt="menu"
            onClick={() => {
              setIsOpen(false);
            }}
          />
        ) : (
          <Image
            className="block md:hidden lg:hidden landscape:block"
            src="/images/close-outline.svg"
            height={30}
            width={30}
            alt="close"
            onClick={() => {
              setIsOpen(true);
            }}
          />
        )}

        <div
          className={`${
            isOpen ? "hidden" : "flex landscape:flex"
          }  z-40 flex-col md:hidden w-60 h-64 items-center justify-evenly rounded-xs capitalize top-14 right-0  absolute bg-slate-100`}
        >
          <Link
            href="/"
            className="mb-5  text-blue-950 cursor-pointer hover:scale  hover:text-blue-500"
          >
            <h3>home</h3>
          </Link>
          <Link
            href="https://shadowslave.fandom.com/"
            className="mb-5 flex items-center justify-evenly gap-2 border-2 p-2 rounded-lg  text-orange-600  hover:text-slate-50 hover:bg-orange-700 transition-colors ease-in-out duration-500"
          >
            <SiFandom />
            <h3>Fandom</h3>
          </Link>
          <Link
            href="https://discord.gg/NpDgaxRA6Y"
            className="flex items-center justify-evenly gap-2 border-2 p-2 rounded-lg  text-blue-800  hover:text-slate-50 hover:bg-blue-800 transition-colors ease-in-out duration-500 mb-5"
          >
            <BsDiscord />
            <h3>discord</h3>
          </Link>
          <Link
            href="https://www.buymeacoffee.com/imaamy01S"
            className="flex items-center justify-evenly gap-2 border-2 p-2 rounded-lg  text-yellow-500  hover:text-slate-50 hover:bg-yellow-500 transition-colors ease-in-out duration-500"
          >
            <SiBuymeacoffee />
            <h3>Donate</h3>
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
