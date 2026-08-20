# AGENTS.md — Portfolio Matias Arias

Referencia principal para agentes y desarrolladores que trabajen en este repositorio.

## Descripción del proyecto

Portfolio personal de **Matias Arias** (Frontend Developer). Sitio de una sola página con secciones: Home, About, Experience, Skills, Projects y Contact.

**Deploy:** [https://matiasarias.vercel.app/](https://matiasarias.vercel.app/)

> **Nota:** El README menciona Vite en algunos proyectos listados, pero **este repositorio usa Next.js** (Pages Router), no Vite.

---

## Stack tecnológico

| Categoría | Tecnología | Versión objetivo |
|-----------|------------|------------------|
| Runtime | Node.js | 24.x |
| Framework | Next.js (Pages Router) | 16.x |
| UI | React | 19.x |
| Lenguaje | TypeScript | 5.x |
| Estilos | Tailwind CSS | 3.x |
| Animaciones | Framer Motion | 12.x |
| Partículas | @tsparticles/react | 3.x |
| Formulario contacto | EmailJS (@emailjs/browser) | 4.x |
| Animaciones Lottie | lottie-react | 2.x |
| Efecto máquina de escribir | typewriter-effect | 2.x |
| Notificaciones | react-toastify | 11.x |
| Scroll animations | react-intersection-observer | 9.x |
| Iconos | react-icons | 5.x |
| Linting | ESLint + eslint-config-next | 9.x / 16.x |
| Deploy | Vercel | — |

---

## Estructura del proyecto

```
my-portfolio/
├── pages/              # Rutas Next.js (Pages Router)
│   ├── _app.tsx        # App wrapper + fuente global
│   ├── _document.tsx   # HTML document
│   ├── index.tsx       # Página principal (SPA-like)
│   └── api/            # API routes
├── components/         # Secciones principales de la página
├── subComponents/      # Componentes reutilizables más pequeños
├── data/               # Datos estáticos (projects, skills, experience)
├── types/              # Interfaces TypeScript compartidas
├── config/             # Configuraciones JSON (ej. partículas)
├── public/             # Assets estáticos (imágenes, audio, Lottie)
├── styles/             # CSS global (Tailwind directives)
└── AGENTS.md           # Este archivo
```

### Alias de imports

Se usa el alias `@/` apuntando a la raíz del proyecto (configurado en `tsconfig.json`):

```typescript
import { workExperience } from "@/data/experienceData";
import TitleSections from "@/subComponents/TitleSections";
```

---

## Convenciones TypeScript

- **Uso sencillo:** interfaces para datos y props; evitar generics complejos o tipos avanzados innecesarios.
- **Tipos compartidos** viven en `types/index.ts`.
- **Datos estáticos** en `data/` se tipan con las interfaces correspondientes.
- **Componentes:** archivos `.tsx` con props tipadas via interface.
- **Config de tooling:** `next.config.ts`, `tailwind.config.ts`, `postcss.config.mjs` y `eslint.config.mjs` (flat config de ESLint).

### Interfaces principales

Definidas en `types/index.ts`:

- `Project`, `ProjectTechnology`, `ProjectLinks`
- `Skill`
- `WorkExperience`, `WorkSkill`
- `ContactFormInputs`
- `TitleSectionsProps`

---

## Scripts disponibles

```bash
npm run dev      # Servidor de desarrollo (localhost:3000)
npm run build    # Build de producción
npm run start    # Servidor de producción
npm run lint     # ESLint
```

---

## Node.js

El proyecto requiere **Node.js 24+**. La versión está fijada en:

- `.nvmrc` → `24`
- `package.json` → `"engines": { "node": ">=24.0.0" }`

---

## Patrones del código

1. **Animaciones:** Framer Motion + `react-intersection-observer` para animar al entrar en viewport.
2. **Datos:** Arrays estáticos en `data/`, con IDs definidos en los propios datos.
3. **Imágenes:** `next/image` para optimización; assets en `public/assets/`. La foto de About debe conservar una columna completa en mobile; usar spans de columna desde `md:` en adelante.
4. **Estilos:** Tailwind utility classes; CSS Modules solo en `Loading.module.css`.
5. **Navegación:** Links con hash (`#home`, `#about`, etc.) — SPA de una sola página.
6. **Fuente global:** Lato se carga con `next/font/google`; la compilación necesita acceso a Google Fonts si la fuente no está disponible en caché.

---

## Consideraciones para agentes

- No migrar a App Router salvo que se pida explícitamente; el proyecto usa **Pages Router**.
- Mantener el diseño y animaciones existentes al refactorizar.
- Las credenciales públicas de EmailJS se leen desde `.env.local`; usar `.env.local.example` como plantilla y no versionar valores reales.
- `npm run lint` usa ESLint 9 con flat config; no usar el comando eliminado `next lint`.
- Al agregar nuevas secciones, seguir el patrón: componente en `components/`, datos en `data/`, tipos en `types/`.
- Preferir cambios mínimos y enfocados; no sobre-ingenierizar.
