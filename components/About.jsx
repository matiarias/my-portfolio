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
          duration: 1.5,
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
        transition: { duration: 1.2 },
      });
    }

    if (!inViewPhoto) {
      animationPhoto.start({
        opacity: 0,
        filter: "blur(10px)",
      });
    }
  }, [inViewPhoto]);

  return (
    <section id="about" className="w-full md:h-screen py-12 px-6 md:px-8">
      <TitleSections title="About Me" />

      <div
        ref={ref}
        className="w-full max-w-screen-xl grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 mx-auto"
      >
        <motion.div animate={animationText} className="col-span-2">
          <h3 className="text-sky-400 text-xl md:text-2xl font-bold">
            Who I Am
          </h3>
          <p className="text-gray-200 text-base md:text-lg tracking-wide leading-relaxed indent-2 mt-2">
            Frontend Developer Focused on JavaScript, React and Next.js. I took
            an intensive 8-month Full Stack course at RollingCode School in
            which we learned the MERN Stack and developed many projects with
            HTML, CSS, Bootstrap, Javascript, React.js and we learned how to
            create a rest api with Node.js, Express.js and MongoDB. In the last
            months of 2022 I did another training where I learned the
            fundamentals and advanced hooks of Next.js and React, Material UI
            and Firebase.
          </p>

          <p className="text-gray-200 text-base md:text-lg tracking-wide leading-relaxed indent-2 mt-2">
            I study and prepare myself every day in a self-taught way by taking
            different courses and developing a lot of projects. I love learning
            new technologies all the time and I know that I can contribute a lot
            of value and great things. I'm looking for my first experience as a
            frontend developer.
          </p>

          <p className="text-gray-200 text-base md:text-lg tracking-wide leading-relaxed indent-2 mt-3">
            I consider myself a very calm and kind person, I love everything
            about traveling the world and learning different languages. I speak
            native Spanish, English (C1) and Catalan (A1).
          </p>
        </motion.div>

        <motion.div
          ref={photoRef}
          animate={animationPhoto}
          className="relative w-full h-[500px] md:h-[400px] xl:h-[450px] border-2 border-indigo-900 rounded-[30px] saturate-150"
        >
          <Image
            src={MatiasPhoto}
            alt="Matias Arias Photo"
            fill
            style={{ objectFit: "cover", borderRadius: "30px" }}
            sizes="(max-width: 600px) 100vw,
                (max-width: 500px) 50vw,
                33vw"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
