import Image from "next/image";

import { motion } from "framer-motion";

import MatiasPhoto from "@/public/assets/mati-amsterdam.jpg";
import TitleSections from "@/subComponents/TitleSections";

import { useScrollAnimation, SLIDE_FROM_LEFT } from "@/hooks/useScrollAnimation";

// Fix #1: Usa el hook centralizado en lugar de duplicar useInView + useAnimation + useEffect
// Fix #12: Imports estandarizados con alias @/
const About = () => {
  const { ref, controls: controlsText } = useScrollAnimation(SLIDE_FROM_LEFT);
  const { ref: photoRef, controls: controlsPhoto } = useScrollAnimation();

  return (
    <section id="about" className="w-full py-8 xl:py-16 px-6 md:px-8">
      <TitleSections title="About Me" />

      <div className="w-full max-w-screen-xl mx-auto mt-16">
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
          <motion.div animate={controlsText} className="md:col-span-2">
            <h3 className="text-sky-400 text-xl md:text-2xl font-bold">
              Who I Am
            </h3>
            <p className="text-gray-200 font-bold text-base md:text-lg tracking-wide leading-relaxed mt-2">
              I&apos;m a Frontend Developer with +2 years of experience,
              specializing in JavaScript, TypeScript, React, and Next.js.
              Currently, I work at Santander Technology Argentina as a Software
              Engineer in the Investments team, where I develop solutions and
              projects for Santander, working on both Frontend and Backend for
              Frontend (BFF) using technologies like Next.js, React, TypeScript,
              Node.js, and Nest.js.
            </p>

            <p className="text-gray-200 font-bold text-base md:text-lg tracking-wide leading-relaxed mt-2">
              I see myself as a dedicated professional who cares about details
              and delivering high-quality, maintainable software. I enjoy
              teamwork and the personal and professional growth it brings.
              I&apos;m passionate about learning new technologies and
              continuously improving my skills to tackle new challenges.
            </p>
          </motion.div>

          <motion.div
            ref={photoRef}
            animate={controlsPhoto}
            className="relative w-full h-[500px] xl:h-[450px] border-2 border-indigo-900 rounded-3xl saturate-150 overflow-hidden"
          >
            <Image
              className="object-cover rounded-3xl"
              src={MatiasPhoto}
              alt="Matias Arias Photo"
              fill
              sizes="(max-width: 767px) 100vw, 33vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
