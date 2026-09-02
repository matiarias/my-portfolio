import type { PortfolioContent, PortfolioLocale } from "@/types";

export const portfolioContent: Record<PortfolioLocale, PortfolioContent> = {
  en: {
    metadata: {
      title: "Matias Arias | Frontend Engineer — React, TypeScript, Node.js & NestJS",
      description: "Frontend Engineer specializing in React, TypeScript, Node.js and NestJS. I build accessible, production-ready web products with agentic development workflows.",
      keywords: "Frontend Engineer, React, TypeScript, Node.js, NestJS, Next.js, accessibility, WCAG, BFF development, agentic development, GitHub Copilot, Windsurf, Devin, Claude Code, Codex, banking products, investment products",
    },
    navigation: {
      primaryLabel: "Primary navigation",
      mobileLabel: "Mobile navigation",
      openMenu: "Open navigation menu",
      closeMenu: "Close navigation menu",
      changeLanguage: "Change language",
      links: [
        { href: "#home", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#experience", label: "Experience" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" },
      ],
    },
    social: {
      linkedin: "Visit Matias Arias's LinkedIn profile",
      github: "Visit Matias Arias's GitHub profile",
      email: "Email Matias Arias",
    },
    hero: {
      eyebrow: "Frontend Engineer",
      titlePrefix: "Specializing in ",
      titleEmphasis: "React, TypeScript,",
      titleSuffix: " Node.js and NestJS.",
      description: "I build accessible, production-ready web products with agentic development workflows.",
      contactCta: "Get in touch",
    },
    about: {
      title: "About Me",
      description: [
        "Frontend Engineer with 3+ years at Santander Tecnología Argentina, building production-critical banking and investment features with React and TypeScript.",
        "Experienced in high-volume transactional systems, BFF development with Node.js/NestJS, and production incident resolution.",
        "I integrate agentic workflows with GitHub Copilot, Windsurf, Devin, Claude Code and Codex into my daily development cycle.",
      ],
      highlights: [
        { title: "3+ years", description: "production engineering" },
        { title: "Agentic workflows", description: "Copilot · Windsurf · Devin · Claude Code · Codex" },
        { title: "React / TS", description: "frontend systems" },
        { title: "BFF", description: "Node.js & NestJS" },
      ],
    },
    experience: {
      title: "Experience",
      items: {
        1: {
          position: "Software Engineer",
          startDate: "SEP 2023",
          endDate: "JUN 2026",
          highlights: [
            "Built frontend and BFF functionality for Dólar MEP purchases through linked external accounts.",
            "Developed accessible, production-ready interfaces for Market & Tenders in Home Banking.",
            "Contributed frontend and BFF work to Voluntary Corporate Events for investment holdings.",
            "Investigated and resolved production incidents using Kibana, Grafana and OpenShift.",
          ],
        },
        2: {
          position: "Software Engineer",
          startDate: "MAR 2023",
          endDate: "SEP 2023",
          highlights: [
            "Improved the UI across the Dólar MEP purchase and sale transactional flow in Home Banking Web.",
            "Improved accessibility across Investment Tribe products, including the Dólar MEP transactional flow for Web and Mobile, following WCAG guidelines.",
          ],
        },
        3: {
          position: "Frontend Developer Intern",
          startDate: "AUG 2022",
          endDate: "OCT 2022",
          highlights: [
            "Rebuilt the public landing page using React and JavaScript.",
            "Implemented authentication form validation and state handling.",
          ],
        },
      },
    },
    projects: {
      title: "Projects",
      githubLabel: "GitHub",
      deployLabel: "View project",
      items: {
        1: { title: "Ciudades Fascinantes App", description: "Ciudades fascinantes it's an app about information of countries and cities. It's my final project for an intensive course of Next.js and React.js." },
        2: { title: "Videoclub App", description: "Movies app with a Netflix vibes. For the data requests i used TMDB Api. Built with Vite, React.js, JavaScript, TailwindCSS and Firebase." },
        3: { title: "Search Images App", description: "A simple app to search different images and photos using the Pixabay API. I Built the app with React, JavaScript, Tailwind, react-router-dom-V6, react infinite scroll component, react toastify, lottie react and react icons." },
        4: { title: "The Weather App", description: "A weather app built with React, JavaScript, Tailwind, React-hooks, Luxon.js. I used three APIs for the data. for the backgrounds images I used the unsplash API and for the weather data I used two open weather map APIs." },
        5: { title: "The New York Times Books App", description: "This is an application to allow us find a list through diferent categories of the best sellers books by the new york times. I built the entire app with React, JavaScript and Tailwind." },
        6: { title: "Poetry Quotes App", description: "Poetry ramdon quotes app gives you a ramdon quote everytime you click on the button. I built the app with React, JavaScript, Tailwind, react icons and framer motion for the animations." },
        7: { title: "Infonews App", description: "News app built with React, JavaScript and Tailwind. For the data I used the 'gnews' API" },
        8: { title: "Todo App", description: "Todo App built with React, JavaScript and Bootstrap. I used for the first time the React hot toast library to generate different notifications and also used local storage to save the data" },
      },
    },
    contact: { title: "Contact", email: "Email", linkedin: "LinkedIn" },
    footer: { role: "Frontend Engineer" },
    music: { play: "Play background music", pause: "Pause background music", error: "Music could not be played." },
  },
  es: {
    metadata: {
      title: "Matias Arias | Frontend Developer — React, TypeScript, Node.js y NestJS",
      description: "Frontend Developer especializado en React, TypeScript, Node.js y NestJS. Desarrollo productos web accesibles y listos para producción con flujos de desarrollo asistidos por agentes.",
      keywords: "Frontend Developer, React, TypeScript, Node.js, NestJS, Next.js, accesibilidad web, WCAG, desarrollo BFF, desarrollo asistido por agentes, GitHub Copilot, Windsurf, Devin, Claude Code, Codex, productos bancarios, productos de inversión",
    },
    navigation: {
      primaryLabel: "Navegación principal",
      mobileLabel: "Navegación móvil",
      openMenu: "Abrir menú de navegación",
      closeMenu: "Cerrar menú de navegación",
      changeLanguage: "Cambiar idioma",
      links: [
        { href: "#home", label: "Inicio" },
        { href: "#about", label: "Sobre mí" },
        { href: "#experience", label: "Experiencia" },
        { href: "#projects", label: "Proyectos" },
        { href: "#contact", label: "Contacto" },
      ],
    },
    social: {
      linkedin: "Visitar el perfil de LinkedIn de Matias Arias",
      github: "Visitar el perfil de GitHub de Matias Arias",
      email: "Enviar un email a Matias Arias",
    },
    hero: {
      eyebrow: "Frontend Developer",
      titlePrefix: "Especializado en ",
      titleEmphasis: "React, TypeScript,",
      titleSuffix: " Node.js y NestJS.",
      description: "Desarrollo productos web accesibles y listos para producción con flujos de desarrollo asistidos por agentes.",
      contactCta: "Contactarme",
    },
    about: {
      title: "Sobre mí",
      description: [
        "Frontend Developer con más de 3 años de experiencia en Santander Tecnología Argentina, desarrollando funcionalidades críticas para productos bancarios y de inversión con React y TypeScript.",
        "Tengo experiencia en sistemas transaccionales de alto volumen, desarrollo BFF con Node.js y NestJS, y resolución de incidentes en producción.",
        "Integro flujos de trabajo asistidos por agentes con GitHub Copilot, Windsurf, Devin, Claude Code y Codex en mi ciclo diario de desarrollo.",
      ],
      highlights: [
        { title: "Más de 3 años", description: "productos en producción" },
        { title: "Flujos de trabajo con agentes", description: "Copilot · Windsurf · Devin · Claude Code · Codex" },
        { title: "React / TS", description: "arquitectura frontend" },
        { title: "BFF", description: "Node.js y NestJS" },
      ],
    },
    experience: {
      title: "Experiencia",
      items: {
        1: {
          position: "Ingeniero de Software",
          startDate: "SEP 2023",
          endDate: "JUN 2026",
          highlights: [
            "Desarrollé funcionalidades frontend y BFF para la compra de Dólar MEP mediante cuentas externas vinculadas.",
            "Desarrollé interfaces accesibles y listas para producción para Market & Tenders en Home Banking.",
            "Realicé trabajo frontend y BFF en Eventos Corporativos Voluntarios para tenencias de inversión.",
            "Investigué y resolví incidentes en producción con Kibana, Grafana y OpenShift.",
          ],
        },
        2: {
          position: "Ingeniero de Software",
          startDate: "MAR 2023",
          endDate: "SEP 2023",
          highlights: [
            "Desarrollé mejoras de UI en el transaccional de compra y venta de Dólar MEP para Home Banking Web.",
            "Mejoré la accesibilidad en los productos de la tribu de Inversiones, incluido el transaccional de Dólar MEP para Web y Mobile, siguiendo pautas WCAG.",
          ],
        },
        3: {
          position: "Pasante de Desarrollo Frontend",
          startDate: "AGO 2022",
          endDate: "OCT 2022",
          highlights: [
            "Reconstruí la landing pública con React y JavaScript.",
            "Implementé validación y manejo de estado para formularios de autenticación.",
          ],
        },
      },
    },
    projects: {
      title: "Proyectos",
      githubLabel: "GitHub",
      deployLabel: "Ver proyecto",
      items: {
        1: { title: "Ciudades Fascinantes App", description: "Aplicación con información sobre países y ciudades. Fue mi proyecto final de un curso intensivo de Next.js y React.js." },
        2: { title: "Videoclub App", description: "Aplicación de películas inspirada en Netflix. Consume la API de TMDB y fue construida con Vite, React.js, JavaScript, Tailwind CSS y Firebase." },
        3: { title: "Search Images App", description: "Aplicación para buscar imágenes y fotografías mediante la API de Pixabay. Construida con React, JavaScript y Tailwind." },
        4: { title: "The Weather App", description: "Aplicación del clima construida con React, JavaScript, Tailwind, React Hooks y Luxon.js. Usa APIs de OpenWeather para los datos y Unsplash para las imágenes de fondo." },
        5: { title: "The New York Times Books App", description: "Aplicación para consultar listas de libros más vendidos de The New York Times por categoría. Construida con React, JavaScript y Tailwind." },
        6: { title: "Poetry Quotes App", description: "Aplicación que muestra una frase de poesía aleatoria al seleccionar el botón. Construida con React, JavaScript, Tailwind, React Icons y Framer Motion." },
        7: { title: "Infonews App", description: "Aplicación de noticias construida con React, JavaScript y Tailwind. Consume la API de GNews." },
        8: { title: "Todo App", description: "Aplicación de tareas construida con React, JavaScript y Bootstrap. Incorpora notificaciones y almacenamiento local." },
      },
    },
    contact: { title: "Contacto", email: "Email", linkedin: "LinkedIn" },
    footer: { role: "Frontend Developer" },
    music: { play: "Reproducir música de fondo", pause: "Pausar música de fondo", error: "No se pudo reproducir la música." },
  },
};
