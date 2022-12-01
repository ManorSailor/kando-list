/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./src/**/*.{html,js}', './dist/**/*.html'],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Open Sans', ...defaultTheme.fontFamily.sans],
            }
        },
        colors: {
            'main': 'var(--bg-clr)',
            'accent': 'var(--acc-clr)',
            'accent-alt': 'var(--acc-clr-alt)',
            'white': '#fff'
        },
    },
    plugins: [],
};