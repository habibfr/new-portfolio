/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
      },
      colors: {
        'neo-bg': '#f0f0f0',
        'neo-black': '#000000',
        'neo-white': '#ffffff',
        'neo-yellow': '#FFDE59',
        'neo-blue': '#5CE1E6',
        'neo-pink': '#FF66C4',
        'neo-green': '#7ED957',
        'neo-purple': '#C45CFF',
      },
      boxShadow: {
        'neo': '4px 4px 0px 0px rgba(0,0,0,1)',
        'neo-sm': '2px 2px 0px 0px rgba(0,0,0,1)',
        'neo-lg': '8px 8px 0px 0px rgba(0,0,0,1)',
      },
      borderWidth: {
        '3': '3px',
      }
    },
  },
  plugins: [],
}
