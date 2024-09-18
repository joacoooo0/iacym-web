/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        cruz: "url('/src/assets/fondo-cruz.jpg')",
        lavacro: "url('/src/assets/fondo-lavacro.jpg')",
        jarra: "url('/src/assets/fondo-jarra.jpg')",
        corona: "url('/src/assets/fondo-corona.jpg')",
      },
      backgroundColor: {
        overlay: "rgba(0, 0, 0, 0.713)",
      },
      margin: {
        inline: "3px",
      },
      fontFamily: {
        sora: ["Sora Variable", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        jump: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "fade-out": {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
      animation: {
        jump: "jump 0.3s ease-in-out",
        "fade-in": "fade-in 0.5s ease-out",
        "fade-out": "fade-out 0.5s ease-out",
        "hover-jump": "jump 0.3s ease-in-out", // Use the 'jump' keyframes
      },
    },
  },
  plugins: [],
};
