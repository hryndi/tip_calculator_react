/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        cyan:{
          800:"hsl(183, 100%, 15%)",
          500: "hsl(172, 67%, 45%)",
          200:"hsl(173, 61%, 60%)",
          100:"hsl(173, 61%, 77%)"

        },
        grayischCyan:{
          500:"hsl(186, 14%, 43%)",
          400:"hsl(185, 41%, 84%)",
          300:"hsl(184, 14%, 56%)",
          50:"hsl(189, 41%, 97%)",
        },
        white: "hsl(0, 0%, 100%)"
      },
      fontFamily: {
        spaceMono: ["Space Mono", "monospace"]
      },
      translate:{
        centerAbsoluteItem: "-50%"
      }
    },
  },
  plugins: [],
}