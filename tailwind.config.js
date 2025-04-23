/** @type {import('tailwindcss').Config} */
export default {
  content: ['.index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      colors: {
        black: '#141414',
        white: '#FFFFFF',
        orange: '#FF5F1F',
        blue: '#008FD2',
      },
      fontFamily: {
        Inter: 'Inter, sans-serif',
      },
    },
  },
  plugins: [],
};
