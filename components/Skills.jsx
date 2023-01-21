import Image from "next/image";

import { skills } from "@/data/skillsData";

import TitleSections from "../subComponents/TitleSections";

const Skills = () => {
  return (
    <section id="skills" className="w-full md:h-screen py-6 px-6 md:px-8">
      <TitleSections title="Skills" />

      <div className="w-full max-w-screen-xl flex flex-col justify-center gap-6 mt-8 mx-auto">
        <h3 className="text-sky-400 text-xl md:text-2xl font-bold mt-8">
          What I Can Do
        </h3>

        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="p-6 shadow-lg shadow-gray-300 rounded-xl hover:scale-105 ease-in duration-300"
            >
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="relative m-auto">
                  <Image
                    src={skill.image}
                    alt={skill.title}
                    height={64}
                    width={64}
                    style={{ objectFit: "cover" }}
                  />
                </div>

                <div className="flex flex-col justify-center items-center">
                  <h3 className="text-gray-200 text-lg lg:text-xl uppercase font-bold">
                    {skill.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
