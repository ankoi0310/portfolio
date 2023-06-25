module.exports = {
  important: true,
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        secondary: '#1a1a1a',
        accent: '#B809C3',
        error: '#FF0000',
      },
      backgroundImage: {
        site: "url('./assets/images/site-bg.jpg')",
        about: "url('./assets/images/about.png')",
        services: "url('./assets/images/services.png')",
      },
    },
  },
  plugins: [],
}
