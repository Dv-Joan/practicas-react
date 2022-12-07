/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto"],
        Saira: ["Saira"],
        Dancing: ["Dancing Script"],
        Cedarville: ["Cedarville Cursive"],
      },
    },
  },
  plugins: [],
};
