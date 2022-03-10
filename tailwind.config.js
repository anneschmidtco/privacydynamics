module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          DEFAULT: '#172330',
          light: '#454F59',
          lighter: '#CACFD7',
          fade: '#E9ECEF',
          border: '#A6AFBC'
        },
        lime: '#CCF74F',
        teal: '#7BD6CB'
      },
      fontSize: {
        '15': '15px',
        '17': ['17px', '28px'],
        '18': ['18px', '21px'],
        '21': ['21px', '25px'],
        '25': '25px',
        '32': '32px',
        '36': '36px',
        '38': '38px',
        '50': '50px',
      },
      lineHeight: {
        '26': '26px',
        '37': '37px',
        '44': '44px',
        '45': '45px',
        '50': '50px',
        '60': '60px',
      },
    },
    fontFamily:{
      body: 'Inter, sans-serif',
      display: 'IBM Plex Sans, sans-serif',

    },
    container: {
      center: true,
      padding: '1rem'
    },
  },
  plugins: [
    require('@vueform/slider/tailwind'),
    require('@tailwindcss/typography'),
  ],
}
