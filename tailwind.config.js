module.exports = {
  purge: [
    './templates/**/*.html'
  ],
  theme: {
    inset: {
      '-.8': '-0.8rem',
      '-4': '-1rem'
    },
    extend: {},
  },
  variants: {
    borderColor: ['responsive', 'last', 'hover', 'focus'],
    padding: ['responsive', 'last'],
  },
  plugins: [],
}
