/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-light": "#f9f1f0",
        "primary-dark": "#161111",
        "secondary": "#D7C7B4",
        "text": "#1F1203",
        "text-test": "#443826",
        "accent": "#4C4B43",
      },
    },
  },
  plugins: [],
};