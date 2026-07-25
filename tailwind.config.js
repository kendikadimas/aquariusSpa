/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        spa: {
          bg: '#1a120c',
          bgAlt: '#231812',
          card: '#2a1e17',
          cardHover: '#35271e',
          textLight: '#f7f2eb',
          textMuted: '#c7b7aa',
          gold: '#c49a6c',
          goldLight: '#f2e3d3',
          bronze: '#8c664d',
          darkChocolate: '#140c08',
        }
      },
      fontFamily: {
        serif: ['var(--font-cinzel)', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['var(--font-jakarta)', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'soft-lift': '0 20px 40px -15px rgba(0, 0, 0, 0.4)',
        'card-float': '0 10px 30px -5px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}
