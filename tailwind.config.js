/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'darkgray' : '#404040FF',
        'white' : '#F0F0F0FF',
        'lightgray'  : '#bdbdbd',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
