import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-gray": "hsl(0, 0%, 59%)",
        "very-dark-gray": "hsl(0, 0%, 17%)",
      },
      screens: {
        xs: { raw: "(min-width: 420px)" },
        "custom-height-mq": { raw: "(max-height: 640px)" },
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("separators", "&:not(:first-child)");
    }),
  ],
};
export default config;
