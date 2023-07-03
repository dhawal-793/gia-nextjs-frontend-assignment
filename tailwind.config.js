const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xxs': '435px',
      'xs': '565px',
      'sm': '685px',
      'md': '888px',
      'lg': '998px',
      'xl': '1280px',
      '2xl': '1536px',

    },
    extend: {
      colors: {
        blue: {
          primary: "#1D3B61",
          secondary: "#132842"
        },
        gray: {
          primary: "#F4F4F4",
          secondary: "#E0E0E0"
        }
      }
    },
  },
  plugins: [],
}
