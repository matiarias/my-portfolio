import { useEffect } from "react";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import TitleSections from "@/subComponents/TitleSections";

import { workExperience } from "@/data/experienceData";

import { v4 as uuidv4 } from "uuid";

const newWorkExperience = workExperience.map((experience) => {
  // Create a new object with a unique ID for the work experience
  const updatedExperience = {
    ...experience,
    id: uuidv4().slice(0, 8),
  };

  // Update the skills array within the work experience with unique IDs
  const updatedSkills = experience.skills.map((skill) => ({
    ...skill,
    id: uuidv4().slice(0, 8),
  }));

  // Update the work experience object with the updated skills array
  updatedExperience.skills = updatedSkills;

  return updatedExperience;
});

// console.log(newWorkExperience);

const Experience = () => {
  const { ref: experienceRef, inView } = useInView();

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        filter: "blur(0px)",
        transition: { duration: 0.8 },
      });
    }

    if (!inView) {
      animation.start({
        opacity: 0,
        filter: "blur(15px)",
      });
    }
  }, [inView]);

  return (
    <section id="experience" className="w-full py-8 px-6 md:px-8">
      <TitleSections title="Experience" />

      <div className="w-full max-w-screen-xl mx-auto mt-16">
        <h3 className="text-sky-400 text-xl md:text-2xl font-bold">
          Work Experience
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {newWorkExperience.map((work) => (
            <motion.div
              ref={experienceRef}
              animate={animation}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
