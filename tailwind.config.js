/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {},
        colors: {
            'main': 'var(--bg-clr)',
            'accent': 'var(--acc-clr)',
            'accent-alt': 'var(--acc-clr-alt)',
            'white': '#fff'
        },
    },
    plugins: [],
};