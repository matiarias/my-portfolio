import Image from "next/image";

import { motion } from "framer-motion";

import { skills } from "@/data/skillsData";
import TitleSections from "@/subComponents/TitleSections";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Fix #1: Usa el hook centralizado en lugar de duplicar useInView + useAnimation + useEffect
// Fix #2: Eliminado UUID innecesario — los datos ya tienen IDs únicos en skillsData.ts
// Fix #12: Imports estandarizados con alias @/
const Skills = () => {
  const { ref: skillsRef, controls } = useScrollAnimation();

  return (
    <section id="skills" className="w-full py-6 px-6 md:px-8">
      <TitleSections title="Skills" />

      <div className="w-full max-w-screen-xl flex flex-col justify-center gap-6 mt-8 mx-auto">
        <h3 className="text-sky-400 text-xl md:text-2xl font-bold mt-8">
          What I Can Do
        </h3>

        <motion.div
          ref={skillsRef}
          animate={controls}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10"
        >
          {skills.map((skill) => (
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.4, ease: "easeInOut" },
              }}
              whileTap={{ scale: 1.1, transition: { duration: 1 } }}
              key={skill.id}
              className="bg-gradient-to-r from-gray-200/20 shadow-lg shadow-gray-300 rounded-xl p-6"
            >
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="relative m-auto">
                  <Image
                    src={skill.image}
                    alt={skill.title}
                    height={64}
                    width={64}
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col justify-center items-center">
                  <h3 className="text-gray-200 text-lg lg:text-xl uppercase font-bold">
                    {skill.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
