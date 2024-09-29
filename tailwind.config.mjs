/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-light": "#f9f9f9",
        "primary-dark": "#080808",
      },
    },
  },
  plugins: [],
};
