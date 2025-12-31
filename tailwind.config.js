/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F06292',
        'primary-light': '#FCE4EC',
        'primary-dark': '#EC407A',
        'primary-darker': '#D81B60',
        'text-dark': '#2D3748',
        'text-grey': '#4A5568',
        'text-light': '#718096',
        'accent': '#FF6B9D',
        'success': '#48BB78',
        'info': '#4299E1',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'serif': ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}