/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        card:"#D7FBFF",
        abouttext:"#00E6FF",
        hoverblue:"#00bcff",
        pinky:"FFE9E9"
      },
     screens: {
      'xs':'320px',
      'mds':'770'
     },
     fontFamily: {
      sans: ['"Segoe UI"']
    }
    },
  },
  plugins: [],
}