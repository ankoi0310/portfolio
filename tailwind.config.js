module.exports = {
  important: true,
  darkMode: ['class'],
  experimental: {
    darkModeVariant: true,
  },
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Poppins, sans-serif',
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
      keyframes: {
        moving: {
          '0%': { left: '-25px' },
          '100%': { left: '100%' },
        },
      },
      animation: {
        moving: 'moving 2s linear infinite',
      },
      boxShadow: {
        custom: '0 0 5px 5px rgb(0 0 0 / 0.1)',
      },
      colors: {
        primary: '#0a0a0a',
        secondary: '#1a1a1a',
        accent: '#B809C3',
        '--title-color': '#0B0A0A',
        '--text-color': '#403A3A',
        '--text-color-light': '#707070',
        '--container-color': '#FAFAFA',
        '--container-color-alt': '#F0EFEF',
        '--body-color': '#FCFCFC',
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
