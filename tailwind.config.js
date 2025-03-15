/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    darkMode: 'media', // o 'class' para modo oscuro basado en clases
    theme: {
        extend: {
            animation: {
                'spin': 'spin 2s linear infinite',
            },
            backgroundImage: {
                'gradient-radial-light': 'radial-gradient(ellipse 80% 80% at 50% -20%, rgba(217,216,255,0.5), rgba(255,255,255,0.9))',
                'gradient-radial-dark': 'radial-gradient(ellipse 80% 80% at 50% -20%, rgba(120,119,198,0.3), rgba(255,255,255,0))'
            }
        },
    },
    plugins: [],
}