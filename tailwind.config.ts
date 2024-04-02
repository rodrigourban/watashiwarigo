import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primaryFont: "var(--primary-font)",
        secondaryFont: "var(--secondary-font)",
      },
      colors: {
        darkest: "#201925",
        lighest: "#FEF7FF",
        primaryColor: "#7E22CE",
        secondaryColor: "#A088B1",
      },
    },
  },
  plugins: [],
};
export default config;
