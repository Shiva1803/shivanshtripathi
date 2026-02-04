/** @type {import('tailwindcss').Config} */
// Force reload
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'bg-dark': '#131416',
        'text-light': '#f8f9fa',
        'accent-blue': '#0d6efd',
        'secondary-gray': '#adb5bd',
        'light-gray': '#343a40',
      },
      keyframes: {
        floating: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      },
      animation: {
        floating: 'floating 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
