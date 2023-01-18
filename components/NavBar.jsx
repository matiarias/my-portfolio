import Link from "next/link";

import { useState } from "react";

import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { BsGithub, BsLinkedin } from "react-icons/bs";

import OvniNavBar from "../subComponents/OvniNavBar";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed h-20 w-full shadow-md shadow-indigo-800 z-[100]">
      <div className="flex justify-between items-center w-full h-full px-4 md:px-8 lg:px-12">
        {/* -------------------------------- Desktop NavBar ---------------------------------- */}

        <div className="h-[75px] w-[75px]">
          <OvniNavBar />
        </div>

        <ul className="hidden md:flex justify-between items-center gap-8">
          <Link href="#home">
            <li className="nav-items text-white text-base md:text-xl 2xl:text-2xl uppercase tracking-[1px]">
              Home
            </li>
          </Link>
          <Link href="#about">
            <li className="nav-items text-white text-base md:text-xl 2xl:text-2xl uppercase tracking-[1px]">
              About
            </li>
          </Link>
          <Link href="/">
            <li className="nav-items text-white text-base md:text-xl 2xl:text-2xl uppercase tracking-[1px]">
              Skills
            </li>
          </Link>
          <Link href="/">
            <li className="nav-items text-white text-base md:text-xl 2xl:text-2xl uppercase tracking-[1px]">
              Projects
            </li>
          </Link>
          <Link href="/">
            <li className="nav-items text-white text-base md:text-xl :text-2xl uppercase tracking-[1px]">
              Contact
            </li>
          </Link>
        </ul>

        {/* ---------------------------- Mobile Hamburger Menu ----------------------------- */}

        <div onClick={handleNav} className="md:hidden">
          <AiOutlineMenu size={30} className="text-gray-200" />
        </div>
      </div>
      {/* --------------------------------- Mobile NavBar ----------------------------------- */}

      <div
        className={
          nav ? "fixed md:hidden top-0 left-0 h-screen w-full bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed top-0 left-0 h-screen w-[80%] sm:w-[60%] bg-gradient-to-b from-[#1a0435] via-[#371764] to-[#642c8b] ease-in duration-500 px-4"
              : "fixed left-[-100%]"
          }
        >
          <div className="w-full flex justify-between items-center">
            <div className="h-[90px] w-[90px] sm:h-[110px] sm:w-[110px]">
              <OvniNavBar />
            </div>

            <div
              onClick={handleNav}
              className="rounded-full shadow-lg shadow-gray-300 p-1 sm:p-2 cursor-pointer"
            >
              <AiOutlineClose size={30} className=" text-white" />
            </div>
          </div>

          <div className="h-full w-full flex flex-col justify-start items-center border-t-2 border-gray-300 mt-2">
            <div className="w-full flex flex-col justify-center items-center gap-10 mt-20">
              <Link
                href="#home"
                onClick={handleNav}
                className="block w-full py-2 text-white uppercase rounded-lg shadow-lg shadow-gray-300 text-center"
              >
                Home
              </Link>

              <Link
                href="#about"
                onClick={handleNav}
                className="block w-full py-2 text-white uppercase rounded-lg shadow-lg shadow-gray-300 text-center"
              >
                About
              </Link>

              <Link
                href="/"
                onClick={handleNav}
                className="block w-full py-2 text-white uppercase rounded-lg shadow-lg shadow-gray-300 text-center"
              >
                Skills
              </Link>

              <Link
                href="/"
                onClick={handleNav}
                className="block w-full py-2 text-white uppercase rounded-lg shadow-lg shadow-gray-300 text-center"
              >
                Projects
              </Link>

              <Link
                href="/"
                onClick={handleNav}
                className="block w-full py-2 text-white uppercase rounded-lg shadow-lg shadow-gray-300 text-center"
              >
                Contact
              </Link>
            </div>

            <div className="w-full flex justify-around items-center gap-4 mt-16">
              <a
                href="https://www.linkedin.com/in/matiasarias27"
                target="_blank"
                rel="noreferrer noopener"
              >
                <div className="rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer">
                  <BsLinkedin size={20} className=" text-white" />
                </div>
              </a>

              <a
                href="https://github.com/matiarias"
                target="_blank"
                rel="noreferrer noopener"
              >
                <div className="rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer">
                  <BsGithub size={20} className=" text-white" />
                </div>
              </a>

              <a
                href="mailto:matt.arias182@gmail.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <div className="rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer">
                  <AiOutlineMail size={20} className=" text-white" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
