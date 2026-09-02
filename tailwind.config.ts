import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./subComponents/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cosmic: {
          space: "#100022",
          surface: "#16052d",
          text: "#eef2ff",
          cyan: {
            200: "#bae6fd",
            300: "#7dd3fc",
            400: "#38bdf8",
          },
          signal: {
            200: "#fef08a",
            300: "#fde047",
            400: "#facc15",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
