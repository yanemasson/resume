/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'first' : '#404040FF',
        'second' : '#F0F0F0FF',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
