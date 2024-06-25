/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
                primary:{
        '50': '#eefff3',
        '100': '#d6ffe4',
        '200': '#b0ffcc',
        '300': '#72ffa5',
        '400': '#2efa75',
        '500': '#03d34c',
        '600': '#00be40',
        '700': '#019435',
        '800': '#07742e',
        '900': '#085f2a',
        '950': '#003614',
    },
            },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}