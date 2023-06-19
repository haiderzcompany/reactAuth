/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      // '2xl': '1400px',
    },
    extend: {
      colors: {
        theme: {
          100: '#a2d0f2',
          200: '#88c5f2',
          300: '#5ab2f2',
          400: '#32a0f0',
          500: '#2a87cb',
          600: '#21699e',
          700: '#1b5580',
          800: '#0b4d7d',
          900: '#04406b',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
