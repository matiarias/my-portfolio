import Image from "next/image";

import { motion } from "framer-motion";

import { AiOutlineGithub } from "react-icons/ai";
import { TbPlanet } from "react-icons/tb";

import { projects } from "@/data/projectsData";
import TitleSections from "@/subComponents/TitleSections";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { usePortfolioContent } from "@/hooks/usePortfolioContent";

// Fix #1: Usa el hook centralizado en lugar de duplicar useInView + useAnimation + useEffect
// Fix #12: Imports estandarizados con alias @/
const Projects = () => {
  const { ref, controls, initial } = useScrollAnimation();
  const content = usePortfolioContent();

  return (
    <motion.section id="projects" ref={ref} initial={initial} animate={controls} className="section-shell">
      <TitleSections title={content.projects.title} />

      <div className="mt-10">

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => {
            const localizedProject = content.projects.items[project.id];

            return (
              <div
                key={project.id}
                className="panel overflow-hidden transition hover:-translate-y-1 hover:border-cosmic-cyan-300/40"
              >
              <div className="relative h-[200px] w-full">
                <Image
                  className="object-cover object-center"
                  src={project.image}
                  alt={localizedProject.title}
                  fill
                  sizes="(max-width: 768px) 100vw,
                         (max-width: 1200px) 50vw,
                         33vw"
                />
              </div>

              <div className="w-full flex flex-col p-6">
                <div className="flex flex-col justify-center gap-4">
                  <h4 className="text-xl font-bold text-cosmic-signal-300">
                    {localizedProject.title}
                  </h4>

                  <p className="text-sm leading-relaxed text-slate-300">
                    {localizedProject.description}
                  </p>

                  <ul className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <li
                        key={tech.id}
                        className="border border-violet-300/25 px-3 py-1 text-sm text-slate-300"
                      >
                        {tech.title}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-2 flex flex-wrap gap-3">
                    <a
                      href={project.links.github.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-violet-300/25 px-4 py-2 text-sm font-bold text-slate-100 transition hover:border-cosmic-cyan-300 hover:bg-cosmic-cyan-300/10 hover:text-cosmic-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cosmic-cyan-300"
                    >
                      <AiOutlineGithub className="text-lg" aria-hidden="true" />
                      {content.projects.githubLabel}
                    </a>

                    <a
                      href={project.links.deploy.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-cosmic-signal-300 bg-cosmic-signal-300 px-4 py-2 text-sm font-bold text-cosmic-space transition hover:-translate-y-0.5 hover:bg-cosmic-signal-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cosmic-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-cosmic-surface"
                    >
                      <TbPlanet className="text-lg" aria-hidden="true" />
                      {content.projects.deployLabel}
                    </a>
                  </div>
                </div>
              </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
