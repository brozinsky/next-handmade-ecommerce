/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#FFFFFF",
          100: "#FCF9F9", //base
          200: "#FEEEEE",
          300: "#F7DFDE", //base
          400: "#EAB7B9",
          500: "#D88A8D",
          600: "#C65C60",
          700: "#B32F33",
          800: "#7E696C", //base
          900: "#432818",
          950: "#2A1D20",
        },
      },
      boxShadow: {
        default: "0 7px 13px rgba(0,0,0,.15)",
      },
    }
  },
};
