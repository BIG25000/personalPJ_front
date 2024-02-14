/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        egg: "#EAE7D9",
        greenOne: "#22443E",
        greenTwo: "#2E4E48",
      },
    },
  },
  plugins: [require("daisyui")],
};
