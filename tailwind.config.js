const colors = require('tailwindcss/colors')
module.exports = {
    content: [
        "./node_modules/flowbite-react/**/*.js",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./hooks/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: colors.green,
                secondary: colors.emerald,
                neutral:colors.slate,
                action:colors.fuchsia
            },
            keyframes: {
                scale: {
                    "0%, 100%": { transform: "scale(1)" },
                    "50%": { transform: "scale(.95)" }
                }
            },
            animation: {
                scale: "scale 200ms ease-in-out"
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('flowbite/plugin')
    ],
}
