/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
      },
      colors: {
        'neo-bg': 'var(--bg-color)',
        'neo-black': 'var(--text-color)', // This acts as the main text/border color
        'neo-white': 'var(--card-bg)',    // This acts as the card/element background
        'neo-yellow': 'var(--accent-yellow)',
        'neo-blue': 'var(--accent-blue)',
        'neo-pink': 'var(--accent-pink)',
        'neo-green': 'var(--accent-green)',
        'neo-purple': 'var(--accent-purple)',
      },
      boxShadow: {
        'neo': '4px 4px 0px 0px var(--shadow-color)',
        'neo-sm': '2px 2px 0px 0px var(--shadow-color)',
        'neo-lg': '8px 8px 0px 0px var(--shadow-color)',
      },
      borderColor: {
        'neo-black': 'var(--border-color)', // Ensure borders use the variable
      },
      borderWidth: {
        '3': '3px',
      }
    },
  },
  plugins: [],
}
