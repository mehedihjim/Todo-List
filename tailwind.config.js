/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-inset': 'inset -12px -25px 11px -3px rgba(0,0,0,0.1)',
        // Add more custom shadows here if needed
      },
    },
  },
  plugins: [],
}

