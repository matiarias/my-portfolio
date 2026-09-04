import type { Project } from "@/types";

// Fix #7: IDs de technologies ahora son globalmente únicos entre todos los proyectos.
//         Formato: <projectId><techIndex> (ej: proyecto 1, tech 1 → id: 11)
export const projects: Project[] = [
  {
    id: 2,
    image: "/assets/projects/videoclub-app.png",
    technologies: [
      {
        id: 21,
        title: "React.js",
      },

      {
        id: 22,
        title: "JavaScript",
      },

      {
        id: 23,
        title: "Tailwind",
      },

      {
        id: 24,
        title: "Firebase",
      },
    ],
    links: {
      github: {
        url: "https://github.com/matiarias/video-club-app",
      },

      deploy: {
        url: "https://video-club-app.vercel.app/",
      },
    },
  },

  {
    id: 3,
    image: "/assets/projects/search-images-app.png",
    technologies: [
      {
        id: 31,
        title: "React.js",
      },

      {
        id: 32,
        title: "JavaScript",
      },

      {
        id: 33,
        title: "Tailwind",
      },
    ],
    links: {
      github: {
        url: "https://github.com/matiarias/search-images-app",
      },

      deploy: {
        url: "https://mil-imagenes-app.vercel.app/",
      },
    },
  },

  {
    id: 4,
    image: "/assets/projects/weather-app.png",
    technologies: [
      {
        id: 41,
        title: "React.js",
      },

      {
        id: 42,
        title: "JavaScript",
      },

      {
        id: 43,
        title: "Tailwind",
      },
    ],
    links: {
      github: {
        url: "https://github.com/matiarias/the-weather-app",
      },

      deploy: {
        url: "https://the-world-weather-app.vercel.app/",
      },
    },
  },

  {
    id: 5,
    image: "/assets/projects/books-app.png",
    technologies: [
      {
        id: 51,
        title: "React.js",
      },

      {
        id: 52,
        title: "JavaScript",
      },

      {
        id: 53,
        title: "Tailwind",
      },
    ],
    links: {
      github: {
        url: "https://github.com/matiarias/the-new-york-times-books-app",
      },

      deploy: {
        url: "https://the-new-york-times-books-app.vercel.app/",
      },
    },
  },

  {
    id: 6,
    image: "/assets/projects/poetry-quotes-app.png",
    technologies: [
      {
        id: 61,
        title: "React.js",
      },

      {
        id: 62,
        title: "JavaScript",
      },

      {
        id: 63,
        title: "Tailwind",
      },
    ],
    links: {
      github: {
        url: "https://github.com/matiarias/poetry-random-quotes-app",
      },

      deploy: {
        url: "https://poetry-random-quotes-app.vercel.app",
      },
    },
  },

];
