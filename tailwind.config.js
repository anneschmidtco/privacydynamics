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
            lighter: '#CACFD7',
            fade: '#E9ECEF',
            border: '#A6AFBC'
          },
          lime: '#CCF74F',
          teal: '#7BD6CB'
        }
      }
    },
    fontFamily:{
      body: 'Inter, sans-serif',
      display: 'IBM Plex Sans, sans-serif',

    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      }
    },
  },
  plugins: [
    require('@vueform/slider/tailwind'),
  ],
}
