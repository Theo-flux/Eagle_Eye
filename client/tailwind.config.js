/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      current: 'currentColor',
      transparent: 'transparent',

      black: '#000',
      white: '#fff',

      primary: {
        manRed: '#B80101',
        azure: '#0099FF',
      },
      west: '#FF8D0C',
      laurel: '#05A50A',

      nobel: '#B7B3B3',
      gray: '#00000029',
      dgray: '#636363',
      resblue: '#00268F',
      smalt: '#0036A1',
    },
    extend: {},
  },
  plugins: [],
};
