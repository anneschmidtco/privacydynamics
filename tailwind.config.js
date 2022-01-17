module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gray: {
            DEFAULT: '#172330',
            light: '#454F59',
            lighter: '#CACFD7'
          },
          lime: '#CCF74F'
        }
      }
    },
    fontFamily:{
      body: 'Inter, sans-serif',
      display: 'IBM Plex Sans, sans-serif',

    },
    container: {
      center: true,
      padding: '2rem',
    },
  },
  plugins: [],
}
