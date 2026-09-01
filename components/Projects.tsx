import Image from "next/image";

import { motion } from "framer-motion";

import { AiOutlineGithub } from "react-icons/ai";
import { TbPlanet } from "react-icons/tb";

import { projects } from "@/data/projectsData";
import TitleSections from "@/subComponents/TitleSections";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Fix #1: Usa el hook centralizado en lugar de duplicar useInView + useAnimation + useEffect
// Fix #12: Imports estandarizados con alias @/
const Projects = () => {
  const { ref: projectsRef, controls } = useScrollAnimation({
    visible: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.8 } },
    hidden: { opacity: 0, filter: "blur(15px)" },
  });

  return (
    <section id="projects" className="section-shell">
      <TitleSections title="Projects" />

      <div className="mt-10">

        <motion.div
          ref={projectsRef}
          animate={controls}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="panel overflow-hidden transition hover:-translate-y-1 hover:border-sky-300/40"
            >
              <div className="relative h-[200px] w-full">
                <Image
                  className="object-cover object-center"
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw,
                         (max-width: 1200px) 50vw,
                         33vw"
                />
              </div>

              <div className="w-full flex flex-col p-6">
                <div className="flex flex-col justify-center gap-4">
                  <h4 className="text-xl font-bold text-yellow-300">
                    {project.title}
                  </h4>

                  <p className="text-sm leading-relaxed text-slate-300">
                    {project.description}
                  </p>

                  <div className="flex justify-center items-center flex-wrap gap-4 md:gap-2">
                    {project.technologies.map((tech) => (
                      <div
                        key={tech.id}
                        className="relative flex justify-between items-center gap-2 py-1 px-4 rounded-2xl shadow-sm shadow-indigo-300"
                      >
                        <Image
                          src={tech.icon}
                          alt={tech.title}
                          height={16}
                          width={16}
                        />
                        <span className="text-gray-200 text-xs uppercase">
                          {tech.title}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center flex-wrap gap-8 mt-4">
                    <a
                      href={project.links.github.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="flex justify-between items-center gap-4 py-2 lg:py-1 px-4 lg:px-2 bg-gradient-to-r from-indigo-900/70 to-violet-700/90 shadow-md shadow-gray-300 rounded-lg">
                        <div className="text-xl text-gray-200">
                          <AiOutlineGithub />
                        </div>

                        <span className="text-gray-200 font-bold text-sm">
                          Github
                        </span>
                      </div>
                    </a>

                    <a
                      href={project.links.deploy.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="flex justify-between items-center gap-4 py-2 lg:py-1 px-4 lg:px-2 bg-black/50 shadow-md shadow-gray-300 rounded-lg">
                        <div className="text-xl text-gray-200">
                          <TbPlanet />
                        </div>

                        <span className="text-gray-200 font-bold text-sm">
                          Deploy
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
