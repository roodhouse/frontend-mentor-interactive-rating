/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      darkBlue: '#262E38',
      lightGray: '#969FAD',
      medGray: '#7C8798',
      orange: '#FC7614',
      veryDarkBlue: '#131518',
      black: '#232A34'
    }
  },
  plugins: [],
}