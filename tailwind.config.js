/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7C3AED",
        secondary: "#06B6D4",
        dark: "#0F172A"
      },
      boxShadow: {
        glow: "0 0 25px rgba(124, 58, 237, 0.5)"
      }
    }
  },
  plugins: []
};
