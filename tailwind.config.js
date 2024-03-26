/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      margin:
      {
       "margin/30":"30px"
      },
      height: {
        "screen/90": "90vh",
      },
      width: {
        "screen/90": "90vw",
        "screen/80": "80vw",
        "screen/50": "50vw",
        "screen/60": "60vw",
        "screen/40": "40vw",
      },
      colors: {
        "miracle-dr-blue": "#0d416b",
        "miracle-blue": "#00aae7",
        "miracle-black": "#232527",
      },
    },
  },
  plugins: [],
};
