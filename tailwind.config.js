/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FACC15', 
        charcoal: '#1F2937', 
        emerald: '#10B981', 
        warning: '#EF4444', 
        sky: '#38BDF8'
      },
    },
  },
  plugins: [],
}
