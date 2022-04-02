module.exports = {
  mode: 'jit',
  purge: ['src/pages/**/*.{js,ts,jsx,tsx}', 'src/components/**/*.{js,ts,jsx,tsx}', 'src/ui/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#f7b680',
          DEFAULT: '#ef6c00',
          dark: '#783600',
        },
        secondary: {
          light: '#80c2f7',
          DEFAULT: '#0084ef',
          dark: '#004278',
        },
        carrara: '#f5f6f3',
        rodeoDust: '#cab595',
        mirage: '#1b2437',
      },
    },

    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
      cabin: ['Cabin', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
