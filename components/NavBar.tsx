import Link from "next/link";

import { useState, useCallback } from "react";

import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { BsGithub, BsLinkedin } from "react-icons/bs";

import OvniNavBar from "@/subComponents/OvniNavBar";

import { useEffect } from "react";

// Fix #12: Imports estandarizados con alias @/
// Fix #13: Corregida semántica HTML — los <li> ahora son padres de <Link>,
//           no hijos. La estructura correcta es ul > li > a (Link).
const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [blurNav, setBlurNav] = useState(false);

  useEffect(() => {
    const scrollNav = () => {
      setBlurNav(window.scrollY >= 80);
    };

    window.addEventListener("scroll", scrollNav);

    return () => {
      window.removeEventListener("scroll", scrollNav);
    };
  }, []);

  const handleNav = useCallback(() => {
    setNav((prev) => !prev);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div
      className={
        blurNav
          ? "fixed top-0 left-0 h-20 w-full backdrop-filter backdrop-blur-xl shadow-md shadow-indigo-800 z-[100]"
          : "fixed top-0 left-0 h-20 w-full shadow-md shadow-indigo-800 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-4 md:px-8 lg:px-12">
        <div className="h-[75px] w-[75px]">
          <OvniNavBar />
        </div>

        {/* Fix #13: ul > li > Link (semántica HTML correcta) */}
        <ul className="hidden md:flex justify-between items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="nav-items text-gray-200 text-base md:text-xl 2xl:text-2xl uppercase tracking-[1px]"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          onClick={handleNav}
          className="md:hidden"
          aria-label="Open navigation menu"
        >
          <AiOutlineMenu size={30} className="text-gray-200" />
        </button>
      </div>

      <div
        className={
          nav ? "fixed md:hidden top-0 left-0 h-screen w-full bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed top-0 left-0 h-screen w-[80%] sm:w-[60%] bg-gradient-to-b from-[#140429] via-[#371764] to-[#5b2b7e] ease-in duration-200 px-4"
              : "fixed left-[-100%]"
          }
        >
          <div className="w-full flex justify-between items-center">
            <div className="max-[380px]:h-[60px] max-[380px]:w-[60px] h-[90px] w-[90px] sm:h-[110px] sm:w-[110px]">
              <OvniNavBar />
            </div>

            <button
              onClick={handleNav}
              className="rounded-full shadow-lg shadow-gray-300 p-1 sm:p-2 cursor-pointer"
              aria-label="Close navigation menu"
            >
              <AiOutlineClose size={30} className=" text-white" />
            </button>
          </div>

          <div className="h-full w-full flex flex-col justify-start items-center border-t-2 border-gray-300 mt-2">
            {/* Fix #13: ul > li > Link en el menú mobile también */}
            <ul className="w-full flex flex-col justify-center items-center max-[380px]:gap-6 max-[380px]:mt-12 gap-10 mt-20">
              {navLinks.map(({ href, label }) => (
                <li key={href} className="w-full">
                  <Link
                    href={href}
                    onClick={handleNav}
                    className="block w-full py-2 text-white uppercase rounded-lg shadow-lg shadow-gray-300 text-center"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

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
