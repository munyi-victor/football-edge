import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pitch: {
          bg: "#0A0F1C",
          elevated: "#111A2E",
          surface: "#152238",
          border: "#233252",
          borderLight: "#2E3F62",
        },
        ink: {
          light: "#F4F6FA",
          muted: "#98A4BE",
          faint: "#5E6C89",
        },
        edge: {
          green: "#22B562",
          greenDark: "#17924D",
          gold: "#D9A94C",
        },
        result: {
          win: "#22B562",
          loss: "#E5484D",
          draw: "#8A93A6",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      borderRadius: {
        card: "10px",
      },
      maxWidth: {
        content: "1240px",
      },
    },
  },
  plugins: [],
};
export default config;
