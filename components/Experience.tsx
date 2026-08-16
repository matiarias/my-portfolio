import { motion } from "framer-motion";

import TitleSections from "@/subComponents/TitleSections";
import { workExperience } from "@/data/experienceData";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

import type { WorkExperience } from "@/types";

// Fix #2/#5: Eliminado UUID — los datos ya tienen IDs únicos.
//            El sort se hace directamente sobre los datos sin mutar el original.
// Fix #5:    El ref ahora está en el contenedor del grid (no en cada card).
// Fix #1:    Usa el hook centralizado.
// Fix #12:   Imports estandarizados con alias @/.
const sortedWorkExperience: WorkExperience[] = [...workExperience].sort(
  (a, b) => {
    if (a.endDate === "Present") return -1;
    if (b.endDate === "Present") return 1;
    return new Date(b.endDate).getTime() - new Date(a.endDate).getTime();
  }
);

const Experience = () => {
  const { ref: experienceRef, controls } = useScrollAnimation({
    visible: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.8 } },
    hidden: { opacity: 0, filter: "blur(15px)" },
  });

  return (
    <section id="experience" className="w-full py-8 px-6 md:px-8">
      <TitleSections title="Experience" />

      <div className="w-full max-w-screen-xl mx-auto mt-16">
        <h3 className="text-sky-400 text-xl md:text-2xl font-bold">
          Work Experience
        </h3>

        {/* Fix #5: ref en el contenedor, no en cada card individual */}
        <motion.div
          ref={experienceRef}
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
        >
          {sortedWorkExperience.map((work) => (
            <div
              key={work.id}
              className="w-full h-auto flex flex-col gap-4 rounded-xl shadow-lg shadow-gray-300 px-4 py-4"
            >
              <h3 className="text-3xl xl:text-4xl font-bold text-yellow-500">
                {work.company}
              </h3>

              <h4 className="text-2xl xl:text-3xl font-bold text-sky-400">
                {work.position}
              </h4>

              <h4 className="text-xl xl:text-2xl font-bold text-gray-200">
                <span>{work.startDate}</span> - <span>{work.endDate}</span>
              </h4>

              <div className="flex flex-col gap-2 px-6">
                {work.skills.map((skill) => (
                  <ul key={skill.id} className="list-disc list-outside">
                    <li className="text-xl text-gray-200 underline underline-offset-4 decoration-2 decoration-indigo-500 break-all">
                      {skill.skillJob}
                    </li>
                  </ul>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
