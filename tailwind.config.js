/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx,html}"
  ],
  safelist: [
    'text-black',
    'text-gray-900',
    'border-b-2',
    'border-transparent',
    'hover:text-gray-500',
    'hover:font-bold',
    'hover:border-black',
    'transition-all'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
