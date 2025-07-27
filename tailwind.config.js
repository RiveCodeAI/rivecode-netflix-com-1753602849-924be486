module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'netflix-red': '#E50914',
        'netflix-black': '#000000',
        'netflix-gray': '#737373'
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 60%, rgba(0, 0, 0, 0.8) 100%)',
      },
      container: {
        center: true,
        padding: '2rem',
      },
    },
  },
  plugins: [],
}