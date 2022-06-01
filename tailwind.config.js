module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        pink: {
          500: "#FF00A8",
        },
        blue:{
          500: "#000AFF"
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
