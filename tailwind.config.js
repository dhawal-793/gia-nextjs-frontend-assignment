/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
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
