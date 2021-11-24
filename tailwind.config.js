module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './ui/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
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
    },
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
      cabin: ['Cabin', 'serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
