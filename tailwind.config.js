module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      inner: 'inset 0 4px 4px 0 rgba(0, 0, 0, 0.2)'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
