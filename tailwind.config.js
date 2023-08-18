/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        body: ['Poppins'],
      },
      spacing: {
        '15': '60px',
        '42.5': '170px',
        '7.5': '30px',
        'h2': '-10px',
        '12.5': '50px',
      },
      fontSize: {
        '7.5xl': '5rem',
        '2.5xl': '1.75rem'
      },
    },
  },
  plugins: [],
};
