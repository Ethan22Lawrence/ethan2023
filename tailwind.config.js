/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'text': '#262626',
      'blue': '#2c98f0',
      'red': '#ec5453',
      'purple': '#a84cb8',
      'green': '#2fa499',
      'yellow': '#f9bf3f',
      'orange': '#ff8566',
      'gray' : '#d9d9d9',
      'light-gray': '#f2f2f2',
      'white': '#fff'
    },
    fontSize: {
      'mobile-txt-lg' : '28px',
      'mobile-txt-md' : '14px',
      'mobile-txt-sm':  '10px',
      'desktop-txt-lg' : '40px',
      'desktop-txt-md' : '16px',
      'desktop-txt-sm' : '12px'
    },
  },
  plugins: [],
}
