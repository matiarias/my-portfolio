import { useEffect } from "react";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

import OvniHero from "../subComponents/OvniHero";
import MusicBar from "@/subComponents/MusicBar";

const Hero = () => {
  // const { ref, inView } = useInView();

  const { ref: ovniRef, inView: inViewOvni } = useInView();

  // const animationOverlay = useAnimation();

  const animationOvni = useAnimation();

  //   --------------------------- useEffect for the Overlay animation -------------------------

  // useEffect(() => {
  //   if (inView) {
  //     animationOverlay.start({
  //       opacity: 1,
  //       filter: "blur(0px)",
  //       transition: { duration: 1 },
  //     });
  //   }

  //   if (!inView) {
  //     animationOverlay.start({
  //       opacity: 0,
  //       filter: "blur(10px)",
  //     });
  //   }
  // }, [inView]);

  //   ---------------------------- useEffect for the ovni animation -------------------------

  useEffect(() => {
    if (inViewOvni) {
      animationOvni.start({
        x: 0,
        transition: {
          duration: 2.5,
          type: "spring",
          bounce: "0.50",
        },
      });
    }

    if (!inViewOvni) {
      animationOvni.start({
        x: "-100%",
      });
    }
  }, [inViewOvni]);

  return (
    <section
      id="home"
      className="relative h-screen w-full text-center overflow-hidden"
    >
      <motion.div
        // ref={ref}
        // animate={animationOverlay}
        className="h-full max-w-screen-xl w-full flex flex-col justify-center items-center max-[380px]:gap-2 gap-6 md:gap-8 lg:gap-4 mx-auto p-4"
      >
        <h1 className="text-gray-200 font-bold max-[380px]:text-3xl text-4xl sm:text-5xl lg:text-6xl">
          Hi, I&apos;m{" "}
          <span className="text-sky-500 font-bold text">Matias Arias</span>
        </h1>

        <h2 className="text-gray-200 font-bold max-[380px]:text-2xl text-3xl md:text-4xl lg:text-5xl">
          A <span className="text-yellow-500 font-bold">Front-End</span>{" "}
          Developer
        </h2>

        <div className="w-full max-w-4xl">
          <p className="text-gray-200 font-bold max-[380px]:text-sm text-lg md:text-xl lg:text-2xl">
            I&apos;m a Frontend Developer based in Argentina. I want to create
            websites that make an impact on people.
          </p>
        </div>

        <div className="flex justify-center items-center gap-8 md:gap-16 mt-4">
          <a
            href="https://www.linkedin.com/in/matiasarias27"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className="max-[380px]:text-lg text-2xl 2xl:text-3xl rounded-full shadow-lg shadow-gray-300 p-3">
              <BsLinkedin className=" text-white" />
            </div>
          </a>

          <a
            href="https://github.com/matiarias"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className=" max-[380px]:text-lg text-2xl 2xl:text-3xl rounded-full shadow-lg shadow-gray-300 p-3">
              <BsGithub className=" text-white" />
            </div>
          </a>

          <a
            href="mailto:matt.arias182@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className="max-[380px]:text-lg text-2xl 2xl:text-3xl rounded-full shadow-lg shadow-gray-300 p-3">
              <AiOutlineMail className=" text-white" />
            </div>
          </a>
        </div>
      </motion.div>

      <motion.div
        ref={ovniRef}
        animate={animationOvni}
        className="absolute max-[380px]:bottom-24 bottom-24 sm:bottom-12 md:bottom-40 lg:bottom-4 xl:bottom-6 2xl:bottom-16 left-0 right-0 m-auto flex flex-col justify-center items-center"
      >
        <div className="max-[380px]:h-[90px] max-[380px]:w-[90px] h-[110px] w-[110px] md:h-[130px] md:w-[130px] lg:h-[100px] lg:w-[100px]">
          <OvniHero />
        </div>

        <a
          href="https://drive.google.com/file/d/1xOHUJ9I7jSR5PS4lgbW6LotV8S-n59Py/view?usp=sharing"
          target="_blank"
          rel="noreferrer noopener"
        >
          <div className="relative overflow-hidden rounded-lg bg-black max-[380px]:py-4 py-5 md:py-6 xl:py-5 px-20 md:px-24 ring-violet-500 ring-offset-black will-change-transform focus:outline-none focus:ring-1 focus:ring-offset-2">
            <span className="absolute inset-px z-10 grid place-items-center rounded-lg bg-black/80 bg-gradient-to-t from-indigo-600 text-gray-200 font-bold">
              Download CV
            </span>
            <span className="absolute inset-0 z-0 scale-x-[2.0] blur before:absolute before:inset-0 before:top-1/2 before:aspect-square before:animate-disco before:bg-gradient-conic before:from-purple-500 before:via-indigo-800 before:to-yellow-400" />
          </div>
        </a>
      </motion.div>

      <MusicBar />
    </section>
  );
};

export default Hero;
