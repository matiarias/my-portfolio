import type { Project } from "@/types";

// Fix #7: IDs de technologies ahora son globalmente únicos entre todos los proyectos.
//         Formato: <projectId><techIndex> (ej: proyecto 1, tech 1 → id: 11)
export const projects: Project[] = [
  {
    id: 1,
    image: "/assets/projects/ciudades-fascinantes.png",
    technologies: [
      {
        id: 11,
        title: "Next.js",
        icon: "/assets/skills/nextjs.png",
      },

      {
        id: 12,
        title: "React.js",
        icon: "/assets/skills/react.png",
      },

      {
        id: 13,
        title: "Material UI",
        icon: "/assets/skills/material-ui.png",
      },

      {
        id: 14,
        title: "Firebase",
        icon: "/assets/skills/firebase.png",
      },
    ],
    links: {
      github: {
        url: "https://github.com/matiarias/ciudades-fascinantes-next-js-app",
      },

      deploy: {
        url: "https://folcademy-next-app.vercel.app",
      },
    },
  },

  {
    id: 2,
    image: "/assets/projects/videoclub-app.png",
    technologies: [
      {
        id: 21,
        title: "React.js",
        icon: "/assets/skills/react.png",
      },

      {
        id: 22,
        title: "JavaScript",
        icon: "/assets/skills/javascript.png",
      },

      {
        id: 23,
        title: "Tailwind",
        icon: "/assets/skills/tailwind.png",
      },

      {
        id: 24,
        title: "Firebase",
        icon: "/assets/skills/firebase.png",
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
        icon: "/assets/skills/react.png",
      },

      {
        id: 32,
        title: "JavaScript",
        icon: "/assets/skills/javascript.png",
      },

      {
        id: 33,
        title: "Tailwind",
        icon: "/assets/skills/tailwind.png",
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
        icon: "/assets/skills/react.png",
      },

      {
        id: 42,
        title: "JavaScript",
        icon: "/assets/skills/javascript.png",
      },

      {
        id: 43,
        title: "Tailwind",
        icon: "/assets/skills/tailwind.png",
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
        icon: "/assets/skills/react.png",
      },

      {
        id: 52,
        title: "JavaScript",
        icon: "/assets/skills/javascript.png",
      },

      {
        id: 53,
        title: "Tailwind",
        icon: "/assets/skills/tailwind.png",
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
        icon: "/assets/skills/react.png",
      },

      {
        id: 62,
        title: "JavaScript",
        icon: "/assets/skills/javascript.png",
      },

      {
        id: 63,
        title: "Tailwind",
        icon: "/assets/skills/tailwind.png",
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

  {
    id: 7,
    image: "/assets/projects/infonews-app.png",
    technologies: [
      {
        id: 71,
        title: "React.js",
        icon: "/assets/skills/react.png",
      },

      {
        id: 72,
        title: "JavaScript",
        icon: "/assets/skills/javascript.png",
      },

      {
        id: 73,
        title: "Tailwind",
        icon: "/assets/skills/tailwind.png",
      },
    ],
    links: {
      github: {
        url: "https://github.com/matiarias/news-app-with-react",
      },

      deploy: {
        url: "https://news-app-with-react.vercel.app",
      },
    },
  },

  {
    id: 8,
    image: "/assets/projects/todolist-react-app.png",
    technologies: [
      {
        id: 81,
        title: "React.js",
        icon: "/assets/skills/react.png",
      },

      {
        id: 82,
        title: "JavaScript",
        icon: "/assets/skills/javascript.png",
      },

      {
        id: 83,
        title: "Bootstrap",
        icon: "/assets/skills/bootstrap.png",
      },

      {
        id: 84,
        title: "CSS",
        icon: "/assets/skills/css.png",
      },
    ],
    links: {
      github: {
        url: "https://github.com/matiarias/Todo-List-with-React",
      },

      deploy: {
        url: "https://todo-list-with-react.vercel.app/",
      },
    },
  },
];
