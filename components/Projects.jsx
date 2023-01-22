import Image from "next/image";

import { AiOutlineGithub } from "react-icons/ai";
import { IoRocketOutline } from "react-icons/io";
import { TbPlanet } from "react-icons/tb";

import { projects } from "../data/projectsData";

import TitleSections from "../subComponents/TitleSections";

const Projects = () => {
  return (
    <section id="projects" className="w-full py-16 px-6 md:px-8">
      <TitleSections title="Projects" />

      <div className="w-full max-w-screen-xl flex flex-col justify-center gap-6 mt-8 mx-auto">
        <h3 className="text-sky-400 text-xl md:text-2xl font-bold mt-8">
          Some of my best projects
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative h-auto w-full rounded-xl shadow-lg shadow-gray-300 overflow-hidden"
            >
              <div className="relative h-[200px] w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  style={{ objectFit: "cover", objectPosition: "top" }}
                  fill
                />
              </div>

              <div className="w-full flex flex-col p-4">
                <div className="flex flex-col justify-center gap-4">
                  <h4 className="text-yellow-500 text-lg md:text-xl font-bold">
                    {project.title}
                  </h4>

                  <p className="text-gray-200 font-bold text-sm md:text-base">
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
                      <div className="flex justify-between items-center gap-4 py-1 px-4 lg:px-2 bg-violet-900 shadow-md shadow-gray-300 rounded-lg">
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
                      <div className="flex justify-between items-center gap-4 py-1 px-4 lg:px-2 bg-black/70 shadow-md shadow-gray-300 rounded-lg">
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
        </div>
      </div>
    </section>
  );
};

export default Projects;
