/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        smm: "440px",
      },
      container: {
        padding: {
          DEFAULT: "20px",
        },
      },
    },
  },
  plugins: [],
};
