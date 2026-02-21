/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#F5F2EB",
        ink: "#0D0D0D",
        accent: "#D64000",
        surface: "#E8E4DB",
      },
      fontFamily: {
        display: ["Syne", "sans-serif"],
        body: ["Syne", "sans-serif"],
        mono: ["Space Mono", "monospace"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        scrollLine: {
          "0%": { transform: "translateY(-100%)" },
          "50%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
      animation: {
        marquee: "marquee 20s linear infinite",
      },
    },
  },
  plugins: [],
};
