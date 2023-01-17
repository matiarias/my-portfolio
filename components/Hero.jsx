import { motion } from "framer-motion";

import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

import OvniHero from "../subComponents/OvniHero";

const Hero = () => {
  return (
    <div className="relative h-screen w-full text-center overflow-hidden">
      <div className="h-full max-w-[1240px] w-full flex flex-col justify-center items-center gap-6 md:gap-4 mx-auto p-4">
        <h1 className="text-gray-200 font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          Hi, I'm{" "}
          <span className="text-sky-500 font-bold text">Matias Arias</span>
        </h1>

        <h2 className="text-gray-200 font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          A <span className="text-yellow-500 font-bold">Front-End</span>{" "}
          Developer
        </h2>

        <div className="w-full max-w-4xl">
          <p className="text-gray-200 font-bold text-base sm:text-lg md:text-xl lg:text-2xl">
            I'm a Frontend Developer based in Argentina. I want to create
            websites that make an impact on people.
          </p>
        </div>

        <div className="flex justify-center items-center gap-8 md:gap-16 mt-4">
          <a
            href="https://www.linkedin.com/in/matiasarias27"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className="text-xl lg:text-2xl rounded-full shadow-lg shadow-gray-300 p-3 md:p-4">
              <BsLinkedin className=" text-white" />
            </div>
          </a>

          <a
            href="https://github.com/matiarias"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className="text-xl lg:text-2xl rounded-full shadow-lg shadow-gray-300 p-3 md:p-4">
              <BsGithub className=" text-white" />
            </div>
          </a>

          <a
            href="mailto:matt.arias182@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className="text-xl lg:text-2xl rounded-full shadow-lg shadow-gray-300 p-3 md:p-4">
              <AiOutlineMail className=" text-white" />
            </div>
          </a>
        </div>
      </div>

      <motion.div
        initial={{
          x: "-100%",
        }}
        transition={{
          duration: 3.5,
          type: "spring",
          bounce: "0.50",
        }}
        animate={{
          x: 0,
        }}
        className="absolute bottom-6 sm:bottom-8 lg:bottom-4 left-0 right-0 m-auto flex flex-col justify-center items-center"
      >
        <div className="h-[130px] w-[130px] lg:h-[120px] lg:w-[120px]">
          <OvniHero />
        </div>

        <button className="relative overflow-hidden rounded-lg bg-black py-5 px-16 md:py-6 md:px-20 ring-violet-500 ring-offset-black will-change-transform focus:outline-none focus:ring-1 focus:ring-offset-2">
          <span className="absolute inset-px z-10 grid place-items-center rounded-lg bg-black/80 bg-gradient-to-t from-indigo-600 text-gray-200 font-bold">
            Download CV
          </span>
          <span className="absolute inset-0 z-0 scale-x-[2.0] blur before:absolute before:inset-0 before:top-1/2 before:aspect-square before:animate-disco before:bg-gradient-conic before:from-purple-500 before:via-indigo-800 before:to-yellow-400" />
        </button>
      </motion.div>
    </div>
  );
};

export default Hero;
