const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    colors: {
      ...colors,
      'black-primary': '#1D1929',
      'green-primary': '#1BD2A4',
      'orange-primary': '#FFA867',
      'orange-second': '#FFE2CC',
      'blue-primary': '#809EFF',
      // 'green-primary': '#78F2D3',
      'yellow-primary': '#FFE165',
      'red-primary': '#F76969',
      'light-green': '#1EE9B6',
      'pale-green': '#F5FFFD',
      'gray-primary': '#77757F',
      'light-gray': '#E8E8EA',
      'dark-gray': '#4A4754'
    },
    screens: {
      mobile: '320px',
      // => @media (min-width: 320px) { ... }
      tablet: '640px',
      // => @media (min-width: 640px) { ... }
      laptop: '1024px',
      // => @media (min-width: 1024px) { ... }
      desktop: '1280px'
      // => @media (min-width: 1280px) { ... }
    },
    extend: {}
  },
  plugins: [require('@tailwindcss/typography')]
}
