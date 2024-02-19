/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        lgScreen: "1200px",
        'max-xl': {'max': '1279px'},
        'max-lg': {'max': '1023px'},
        'max-md': {'max': '767px'},
        'max-sm': {'max': '639px'},
        "max-xsm": { 'max': "550px" },
        "max-2xsm": { 'max': "400px" },
      },
      colors: {
        "main-bg-color": "#04152D",
        "second-bg-color": "#0b1d37",
      },
      backgroundImage: {
        "gradient-main": "linear-gradient(to right, #2E3192   , #1BFFFF )",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        gradient:
          "linear-gradient(180deg, rgba(4, 21, 45, 0) 0%, #04152d 79.17%)",
      },
      boxShadow: {
        'profile-card-shadow-box': '0 2px 18px 1px #06B6D4',
      }
    },
    variants: {
      fill: ["hover", "focus"],
      polygon: ["hover", "focus"],
      circle: ["hover", "focus"],
    },
  },
  plugins: [],
};
