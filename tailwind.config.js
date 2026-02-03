/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './assets/js/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#4f46e5',
          dark: '#4338ca',
          light: '#6366f1'
        },
        accent: {
          DEFAULT: '#0d9488',
          dark: '#0f766e',
          light: '#14b8a6'
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}
