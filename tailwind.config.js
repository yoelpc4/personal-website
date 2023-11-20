/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
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
      animation: {
        'spin-slow': 'spin 6s linear infinite',
      },
      backgroundImage: {
        background: 'url("/images/background.svg")',
        explosion: 'url("/images/explosion.webp")',
        circles: 'url("/images/circles.webp")',
        'circle-star': 'url("/images/circle-star.svg")',
      },
      colors: {
        primary: '#131424',
        secondary: '#393a47',
        accent: '#f13024',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
        sora: ['var(--font-sora)', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
