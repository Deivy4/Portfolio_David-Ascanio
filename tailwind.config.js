/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",          // Escanea el archivo HTML principal para encontrar clases
    "./src/**/*.{js,ts,jsx,tsx}"  // Escanea todos los archivos JS, TS, JSX y TSX dentro de la carpeta src
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['MyCustomFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
