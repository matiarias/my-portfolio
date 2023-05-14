import Image from "next/image";

import { useEffect } from "react";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import MatiasPhoto from "../public/assets/mati-arias-photo.jpg";
import TitleSections from "../subComponents/TitleSections";

const About = () => {
  const { ref, inView } = useInView();

  const { ref: photoRef, inView: inViewPhoto } = useInView();

  const animationText = useAnimation();

  const animationPhoto = useAnimation();

  //   --------------------------- useEffect for the Text animation -------------------------

  useEffect(() => {
    if (inView) {
      animationText.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 0.7,
          bounce: 0.2,
        },
      });
    }

    if (!inView) {
      animationText.start({
        x: "-100%",
      });
    }
  }, [inView]);

  //   ---------------------------- useEffect for the Photo animation -------------------------

  useEffect(() => {
    if (inViewPhoto) {
      animationPhoto.start({
        opacity: 1,
        filter: "blur(0px)",
        transition: { duration: 0.9 },
      });
    }

    if (!inViewPhoto) {
      animationPhoto.start({
        opacity: 0,
        filter: "blur(15px)",
      });
    }
  }, [inViewPhoto]);

  return (
    <section id="about" className="w-full py-8 xl:py-16 px-6 md:px-8">
      <TitleSections title="About Me" />

      <div className="w-full max-w-screen-xl mx-auto mt-16">
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
          <motion.div animate={animationText} className="col-span-2">
            <h3 className="text-sky-400 text-xl md:text-2xl font-bold">
              Who I Am
            </h3>
            <p className="text-gray-200 font-bold text-base md:text-lg tracking-wide leading-relaxed mt-2">
              Frontend Developer Focused on JavaScript, React and Next.js. I
              took an intensive 8-month Full Stack bootcamp at RollingCode
              School in which we learned the MERN Stack and developed many
              projects with HTML, CSS, Bootstrap, Javascript, React.js and we
              learned how to create a REST API with Node.js, Express.js and
              MongoDB. In the last months of 2022 I did another training where I
              learned the fundamentals and advanced hooks of Next.js and React,
              Material UI and Firebase. In the beginning of 2023 I did another
              intensive 2-month bootcamp at MindHub LA, focused on React.js,
              Redux Toolkit, Testing with Jest, JavaScript and Node.js with
              Express.js and MongoDB.
            </p>

            <p className="text-gray-200 font-bold text-base md:text-lg tracking-wide leading-relaxed mt-2">
              I study and prepare myself every day in a self-taught way by
              taking different courses and developing a lot of projects. I love
              learning new technologies all the time.
            </p>

            <p className="text-gray-200 font-bold text-base md:text-lg tracking-wide leading-relaxed mt-3">
              I consider myself a very calm and kind person, I love everything
              about traveling the world and learning different languages. I
              speak native Spanish, English (C1) and Catalan (A1).
            </p>
          </motion.div>

          <motion.div
            ref={photoRef}
            animate={animationPhoto}
            className="relative w-full h-[500px] xl:h-[450px] border-2 border-indigo-900 rounded-3xl saturate-150 overflow-hidden"
          >
            <Image
              className="object-cover rounded-3xl"
              src={MatiasPhoto}
              alt="Matias Arias Photo"
              fill
              sizes="(max-width: 600px) 100vw,
                (max-width: 500px) 50vw,
                33vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
