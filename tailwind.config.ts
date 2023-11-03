import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        purple: {
          100: "#e3d2f0",
          200: "#c7a5e1",
          300: "#aa77d1",
          400: "#8e4ac2",
          500: "#721db3",
          600: "#5b178f",
          700: "#44116b",
          800: "#2e0c48",
          900: "#170624",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
export default config;
