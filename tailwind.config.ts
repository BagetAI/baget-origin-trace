import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: "#F4ECD8",
        burgundy: "#6B2D3E",
        navy: "#2C3E50",
        sepia: "#4A3728",
        forest: "#1B3022",
      },
      fontFamily: {
        serif: ["var(--font-libre-baskerville)", "serif"],
        sans: ["var(--font-lato)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;