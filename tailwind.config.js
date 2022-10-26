/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    './pages/**/*.{ts,tsx}',
    './public/**/*.html',
    './components/**/*.{ts,tsx}',
  ],
  plugins: [require('flowbite/plugin')],
  theme: {
    colors: {
      main: "#4F46E5",
      mainDark: "#312E81",
      background: "#f5f5f5"
    },
    extend: {
      fontFamily: {
        OpenSans: ['Open Sans'],
      },
    },
  },
}
