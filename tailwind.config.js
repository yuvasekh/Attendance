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
        "screen/80": "80vh",
        "screen/50": "50vh",
        "screen/60": "60vh",
        "screen/40": "40vh",
        "screen/35": "35vh",
            },
      width: {
        "screen/90": "90vw",
        "screen/80": "80vw",
        "screen/50": "50vw",
        "screen/60": "60vw",
        "screen/40": "40vw",
        "screen/30": "30vw",
        "screen/20": "20vw",
        "screen/10": "10vw",
        "screen/35": "35vw",
      },
      colors: {
        "miracle-dr-blue": "#0d416b",
        "miracle-blue": "#00aae7",
        "miracle-black": "#232527",
        "gridcolor":"#213547"
      },
      backgroundImage:
      {
        'login':"url('./assets/std1.jpeg')",
      }
    },
  },
  plugins: [],
};
