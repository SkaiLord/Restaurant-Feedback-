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
        // kerala
        'dark-olive': '#12372A',
        'light-olive': '#436850',
        'pastel-green': '#ADBC9F',
        // punjab
        cream: '#F9DEC9',
        rose: '#F78CA2',
        'dark-red': '#D80032',
        brown: '#3D0C11',
        golden: '#F8DE22',
      },
    },
    screens: {
      '2xs': '320px',
      // => @media (min-width: 320px) { ... }

      xs: '425px',
      // => @media (min-width: 425px) { ... }

      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
