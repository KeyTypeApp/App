import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
  safelist: [
    'bg-blue-500', 'hover:bg-blue-600',
    'bg-green-500', 'hover:bg-green-600',
    'bg-orange-500', 'hover:bg-orange-600',
  ],
  
};
export default config;