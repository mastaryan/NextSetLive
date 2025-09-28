/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#22c55e",
          purple: "#a855f7",
        },
      },
    },
  },
  plugins: [],
};
