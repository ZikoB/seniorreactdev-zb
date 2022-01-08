module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Manrope', 'sans-serif'],
      serif: ['Merriweather', 'serif']
    },
    extend: {
      colors: {
        brandBlue: {
          100: '#EAEFFF',
          200: '#CFDCFF',
          300: '#9DB7FF',
          400: '#799CFF',
          500: '#587BE0'
        },
        text: {
          50: '#FCFCFC',
          100: '#F5F5F5',
          200: '#DFDFE0',
          300: '#BEBEC2',
          400: '#A0A0A1',
          500: '#6F6E73',
          600: '#414047',
          700: '#33373B'
        },
        accentGreen: '#3BD0AC',
        accentPurple: '#885FFF',
        accentPink: '#B072FF'
      }
    }
  },
  plugins: []
};
