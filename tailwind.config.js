/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
      colors: {
        custom: {
          "almost-white": "hsl(0, 0%, 98%)",
          "medium-gray": "hsl(0, 0%, 41%)",
          "almost-black": "hsl(0, 0%, 8%)",
        },
      },
      fontSize: {
        paragraph: "18px",
      },
    },
  },
  plugins: [],
};
