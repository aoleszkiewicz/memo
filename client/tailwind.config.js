import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}

// colors: {
//   'text': "#080707",
//   'background': "#f7f5f3",
//   'primary': "#6c60db",
//   'secondary': "#c3dfdf",
//   'accent': "#d3e9e9",
//   'gradient': "linear-gradient(220.55deg, #7cf7ff 0%, #4b73ff 100%)",
//   'secondary-opacity': "rgba(195, 223, 223, 0.5)",
//   "fade-wrapper": "rgba(247, 245, 243, 0.5)",
//   "fade-blue": "linear-gradient(220.55deg, #7cf7ff 0%, #4b73ff 100%)",
// },