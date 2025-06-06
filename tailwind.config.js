/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['.index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      colors: {
        black: '#141414',
        white: '#FFFFFF',
        orange: '#FF5F1F',
        blue: '#008FD2',
      },
      backgroundColor: {
        black: '#141414',
        white: '#FFFFFF',
        orange: '#FF5F1F',
        blue: '#008FD2',
      },
      borderColor: {
        black: '#141414',
        white: '#FFFFFF',
        orange: '#FF5F1F',
        blue: '#008FD2',
      },
      fontFamily: {
        Inter: 'Inter, sans-serif',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};
