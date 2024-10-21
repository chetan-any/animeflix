import { nextui } from '@nextui-org/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(divider|spinner).js"
  ],

  theme: {
    extend: {
      colors: {
        "heading": "hsl(353, 87%, 54%)",
        "dark-1": "hsl(225, 21%, 7%)",
        "dark-2": "hsl(240, 6%, 10%)",
        "golden": "hsl(33, 100%, 64%)",
      },

      backgroundImage: {
        "hero": "url('/images/hero.webp')",
      }
    },
  },

  plugins: [nextui()],
};
export default config;
