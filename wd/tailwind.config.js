/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'tangerine': ['Tangerine'],
        'rale-way': ['rale-way'],
        'great-vibes': ['Great Vibes'],
        'alegreya': ['Alegreya Sans'],
      },
    },
  },
  plugins: [],
}
