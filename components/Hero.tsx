import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

import MusicBar from "@/subComponents/MusicBar";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen w-full text-center overflow-hidden"
    >
      <div className="h-full max-w-screen-xl w-full flex flex-col justify-center items-center max-[380px]:gap-2 gap-6 md:gap-8 lg:gap-4 mx-auto p-4">
        <h1 className="text-gray-200 font-bold max-[380px]:text-3xl text-4xl sm:text-5xl lg:text-6xl">
          Hi, I&apos;m{" "}
          <span className="text-sky-500 font-bold text">Matias Arias</span>
        </h1>

        <h2 className="text-gray-200 font-bold max-[380px]:text-2xl text-3xl md:text-4xl lg:text-5xl">
          A <span className="text-yellow-500 font-bold">Front-End</span>{" "}
          Engineer
        </h2>

        <div className="w-full max-w-4xl">
          <p className="text-gray-200 font-bold max-[380px]:text-sm text-lg md:text-xl lg:text-2xl">
            Building with React, TypeScript, and agentic development.
          </p>
        </div>

        <div className="flex justify-center items-center gap-8 md:gap-16 mt-4">
          <a
            href="https://www.linkedin.com/in/matiasarias27"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Visit Matias Arias's LinkedIn profile"
          >
            <div className="max-[380px]:text-lg text-2xl 2xl:text-3xl rounded-full shadow-lg shadow-gray-300 p-3">
              <BsLinkedin className=" text-white" />
            </div>
          </a>

          <a
            href="https://github.com/matiarias"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Visit Matias Arias's GitHub profile"
          >
            <div className=" max-[380px]:text-lg text-2xl 2xl:text-3xl rounded-full shadow-lg shadow-gray-300 p-3">
              <BsGithub className=" text-white" />
            </div>
          </a>

          <a
            href="mailto:matt.arias182@gmail.com"
            aria-label="Email Matias Arias"
          >
            <div className="max-[380px]:text-lg text-2xl 2xl:text-3xl rounded-full shadow-lg shadow-gray-300 p-3">
              <AiOutlineMail className=" text-white" />
            </div>
          </a>
        </div>
      </div>

      <MusicBar />
    </section>
  );
};

export default Hero;
