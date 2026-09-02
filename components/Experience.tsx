import { motion } from "framer-motion";

import TitleSections from "@/subComponents/TitleSections";
import { workExperience } from "@/data/experienceData";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { usePortfolioContent } from "@/hooks/usePortfolioContent";

import type { WorkExperience } from "@/types";

const orderedWorkExperience: WorkExperience[] = workExperience;

const Experience = () => {
  const { ref: experienceRef, controls } = useScrollAnimation({
    visible: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.8 } },
    hidden: { opacity: 0, filter: "blur(15px)" },
  });
  const content = usePortfolioContent();

  return (
    <section id="experience" className="section-shell">
      <TitleSections title={content.experience.title} />

      <div className="mt-10">

        {/* Fix #5: ref en el contenedor, no en cada card individual */}
        <motion.div
          ref={experienceRef}
          animate={controls}
          className="grid grid-cols-1 gap-4 md:grid-cols-2"
        >
          {orderedWorkExperience.map((work) => {
            const localizedWork = content.experience.items[work.id];

            return (
              <div
                key={work.id}
                className="flex flex-col gap-5 border border-violet-300/20 bg-[#16052d] p-7 md:p-9"
              >
                <h3 className="text-2xl font-bold text-yellow-300">
                  {work.company}
                </h3>

                <h4 className="text-xl font-medium text-sky-300">
                  {localizedWork.position}
                </h4>

                <p className="text-sm uppercase tracking-widest text-slate-400">
                  <span>{localizedWork.startDate}</span> - <span>{localizedWork.endDate}</span>
                </p>

                <ul className="list-disc space-y-2 pl-5 text-slate-300 marker:text-sky-300">
                  {localizedWork.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>

                <ul className="flex flex-wrap gap-2">
                  {work.skills.map((skill) => (
                    <li
                      key={skill.id}
                      className="border border-violet-300/25 px-3 py-1 text-sm text-slate-300"
                    >
                      {skill.skillJob}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
