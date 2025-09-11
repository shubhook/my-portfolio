/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))', // defined color
      },
    },
  },
    plugins: [],
  };
  