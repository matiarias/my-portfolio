import type { SVGProps } from "react";

export interface ProjectTechnology {
  id: number;
  title: string;
  icon: string;
}

export interface ProjectLink {
  url: string;
}

export interface ProjectLinks {
  github: ProjectLink;
  deploy: ProjectLink;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: ProjectTechnology[];
  links: ProjectLinks;
}

export interface Skill {
  id: number;
  title: string;
  image: string;
}

export interface WorkSkill {
  id: number;
  skillJob: string;
}

export interface WorkExperience {
  id: number;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  highlights: string[];
  skills: WorkSkill[];
}

export interface TitleSectionsProps {
  title: string;
}

export interface SvgAlienProps extends SVGProps<SVGSVGElement> {
  fill?: string;
}
