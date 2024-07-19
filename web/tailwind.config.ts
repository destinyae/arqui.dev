import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      dropShadow: {
      'logo': '.1rem .125rem 0 rgba(0, 0, 0, 1)',
      }
    },
    fontFamily: {
      'quicksand': ['Quicksand', 'sans-serif'],
      'firacode': ['Fira Code', 'monospace'],
    }
  },
  plugins: [],
};
export default config;
