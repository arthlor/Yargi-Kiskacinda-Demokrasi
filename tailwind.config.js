/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#121212',
        'primary-bg': '#1e1e1e',
        'secondary-bg': '#2a2a2a',
        'border-color': '#444',
        'text-color': '#e0e0e0',
        'highlight': '#b91c1c',
        'highlight-transparent': 'rgba(185, 28, 28, 0.2)',
        'highlight-hover': '#e53e3e',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Roboto Slab', 'serif'],
      },
    },
  },
  plugins: [],
} 