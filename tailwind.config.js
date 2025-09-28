/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // accents used in the UI
        brand: {
          green: "#22c55e",  // green-500
          purple: "#a855f7", // purple-500
        }
      }
    }
  },
  plugins: []
};
