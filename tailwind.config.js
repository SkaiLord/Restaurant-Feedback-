/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F9DEC9',
        rose: '#F78CA2',
        'dark-red': '#D80032',
        brown: '#3D0C11',
        golden: '#F8DE22',
      },
    },
  },
  plugins: [],
};
