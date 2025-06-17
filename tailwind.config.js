const daisyui = require("daisyui");

module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                blogfont: ['JetBrains Mono', 'sans-serif'],
            },
        },
    },
    plugins: [daisyui],
    daisyui: {
        themes: [
            {
                blogdark: {
                    "primary": "#60dddd",
                    "primary-content": "#031111",
                    "secondary": "#be88e0",
                    "secondary-content": "#0d0612",
                    "accent": "#bce887",
                    "accent-content": "#0d1306",
                    "neutral": "#262931",
                    "neutral-content": "#cfd0d2",
                    "base-100": "#181e25",
                    "base-200": "#13191f",
                    "base-300": "#0f1319",
                    "base-content": "#cbcdcf",
                    "info": "#2563EB",
                    "info-content": "#d2e2ff",
                    "success": "#16A34A",
                    "success-content": "#000a02",
                    "warning": "#D97706",
                    "warning-content": "#110500",
                    "error": "#DC2626",
                    "error-content": "#ffd9d4",
                },
            },
        ],
    },
};