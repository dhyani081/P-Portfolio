// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF',     // Blue-800
        secondary: '#0F172A',   // Slate-900
        accent: '#FACC15',      // Yellow-400
        background: '#0F172A',  // Slate-900
        text: '#E2E8F0',        // Gray-200
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
