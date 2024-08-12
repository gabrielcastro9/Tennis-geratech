/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,tsx}"],
    theme: {
      fontFamily:{
        'inter': ['Inter', 'sans-serif']
      },
      
      colors: {
        'primary': "#C92071",
        'warning': "#F6AA1C",
        'dark-gray': "#1F1F1F",
        'dark-gray-2': "#474747",
        'light-gray': "#8F8F8F",
        'light-gray-2': "#CCCCCC",
        'light-gray-3': "#F5F5F5"
      },
      extend: {},
    },
    plugins: [],
}