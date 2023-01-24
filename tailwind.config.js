/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        primary: '#0070f3',
        alt: {
          100: '#f7fafc',
          200: '#edf2f7',
        },
      },
      spacing: {
        72: '18rem',
        84: '21rem',
      },
    },
  },
  plugins: [],
};
