import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "scale(0.8)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
      },
      // L'animation est définie ici pour être utilisée via 'animate-fade-in'
      animation: {
        "fade-in": "fade-in linear forwards",
      },
    },
  },
  plugins: [],
} satisfies Config;
