/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"],
      },
      screens: {
        xxxs: "320px",
        xxs: "420px",
        xs: "520px",
        md_to_lg: "850px",
      },
    },
  },
  plugins: [],
};
