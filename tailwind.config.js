/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
    "./components/**/*.{ts,tsx}",
  ],
  plugins: [
    require("flowbite/plugin")
  ],
  theme: {
    extend: {
      fontFamily: {
        OpenSans: ["Open Sans"],
      },
    },
  },
};