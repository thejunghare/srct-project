/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*',
    './donate.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}

