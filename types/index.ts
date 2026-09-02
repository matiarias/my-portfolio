import type { SVGProps } from "react";

export interface ProjectTechnology {
  id: number;
  title: string;
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
  skills: WorkSkill[];
}

export interface TitleSectionsProps {
  title: string;
}

export interface SvgAlienProps extends SVGProps<SVGSVGElement> {
  fill?: string;
}

export type PortfolioLocale = "en" | "es";

export interface PortfolioContent {
  metadata: {
    title: string;
    description: string;
    keywords: string;
  };
  navigation: {
    primaryLabel: string;
    mobileLabel: string;
    openMenu: string;
    closeMenu: string;
    changeLanguage: string;
    links: Array<{ href: string; label: string }>;
  };
  social: {
    linkedin: string;
    github: string;
    email: string;
  };
  hero: {
    eyebrow: string;
    titlePrefix: string;
    titleEmphasis: string;
    titleSuffix: string;
    description: string;
    contactCta: string;
  };
  about: {
    title: string;
    description: string;
    highlights: Array<{ title: string; description: string }>;
  };
  experience: {
    title: string;
    items: Record<number, {
      position: string;
      startDate: string;
      endDate: string;
      highlights: string[];
    }>;
  };
  projects: {
    title: string;
    githubLabel: string;
    deployLabel: string;
    items: Record<number, { title: string; description: string }>;
  };
  contact: {
    title: string;
    email: string;
    linkedin: string;
  };
  footer: {
    role: string;
  };
  music: {
    play: string;
    pause: string;
    error: string;
  };
}
