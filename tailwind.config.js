// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
theme: {
    extend: {
      screens: {
        // This creates a custom breakpoint triggered at 1401px and above
        'ultrawide': '1401px', 
      },
    },
  },
  plugins: [],
}