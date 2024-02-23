import type { Config } from "tailwindcss"

import typography from "@tailwindcss/typography"
import daisyui from "daisyui"
import themes from "daisyui/src/theming/themes"

export default {
    content: [
        "./src/**/*.{html,js,svelte,ts}",
    ],

    daisyui: {
        logs: false,
        themes: Object.assign(themes.dark, {
            "--rounded-box": "0.75rem",
            "--rounded-btn": "0.5rem",
            "--rounded-badge": "2rem",
            "--animation-btn": "0.25s",
            "--animation-input": "0.2s",
            "--btn-focus-scale": "0.95",
            "--border-btn": "0.0625rem",
            "--tab-border": "0.125rem",
            "--tab-radius": "0.5rem",

            "primary": "#3A82F7",
            "primary-content": "#FFFFFF",

            "secondary": "#484848",
            "secondary-content": "#FFFFFF",

            "accent": "#3478F6",
            "accent-content": "#FFFFFF",

            "neutral": "#FFFFFF",
            "neutral-content": "#1B1B1C",

            "base-100": "#1B1B1C",
            "base-200": "#161616",
            "base-content": "#FFFFFF",

            "info": "#3D98FF",
            "info-content": "#FFFFFF",

            "success": "#219653",
            "success-content": "#FFFFFF",

            "warning": "#FF9500",
            "warning-content": "#FFFFFF",

            "error": "#D8222F",
            "error-content": "#FFFFFF",

            "fontSize": "1rem",

            "button.btn": {
                "font-size": "1.0625rem",
                "font-weight": "700",
                "line-height": "inherit",
            },

            ".btn": {
                "font-size": "inherit",
                "line-height": "inherit",
            },

            ".form": {
                "font-size": "1.125rem",
                "line-height": "inherit",
            },

            ".input": {
                "font-size": "inherit",
                "line-height": "inherit",
            },

            ".label-text": {
                "font-size": "inherit",
                "line-height": "inherit",
            },

            ".menu": {
                "font-size": "inherit",
                "line-height": "inherit",
            },

            ".select": {
                "font-size": "inherit",
                "line-height": "inherit",
            },

            ".stat .stat-value": {
                "font-size": "inherit",
                "line-height": "inherit",
            },

            ".tabs .tab": {
                "font-size": "inherit",
                "line-height": "inherit",
            },

            ".textarea": {
                "font-size": "inherit",
                "line-height": "inherit",
            },
        }),
    },

    plugins: [
        daisyui,
        typography,
    ],

    theme: {
        container: {
            "center": true,
            "padding": "1rem",
        },

        extend: {
            backgroundColor: {
                "drawer": "#161616",
                "footer": "#151515",
                "input": "#303030",
                "select": "#303030",
                "textarea": "#303030",
                "tooltip": "#151515",
            },

            colors: {
                "accent-light": "#3A82F7",
                "accent-medium-light": "#5991FF",
                "black": "#000000",
                "negative-dark": "#A01B24",
                "negative-light": "#FA4942",
                "positive-dark": "#044227",
                "positive-light": "#3BCF5E",
                "white": "#FFFFFF",
            },

            fontFamily: {
                "primary": "Play",
                "secondary": "Inter",
            },

            fontSize: {
                "inherit": "inherit",
                "xxs": "0.625rem",
            },

            fontWeight: {
                "inherit": "inherit",
            },

            listStyleType: {
                circle: "circle",
            },

            textColor: {
                "accent": "#3478F6",
                "primary": "#FFFFFF",
                "secondary": "rgba(255, 255, 255, 0.60)",
            },
        },
    },
} satisfies Config
