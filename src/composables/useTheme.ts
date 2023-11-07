import type { Theme } from "@unocss/preset-uno"

type Color = (
    "accent-extra-light" |
    "accent-light" |
    "accent-medium" |
    "accent-watery" |
    "black" |
    "blue-dark" |
    "blue" |
    "error" |
    "grey-extra-dark" |
    "grey-light" |
    "grey" |
    "info" |
    "negative-light" |
    "negative-medium" |
    "pink" |
    "positive-light" |
    "primary" |
    "purple-dark" |
    "secondary" |
    "success" |
    "warning-medium" |
    "warning" |
    "white" |
    "yellow"
)

export function useTheme(): Theme {
    return useRuntimeConfig().public.theme
}

export function useThemeColor(color: Color): string {
    return useGet(useTheme().colors, color)!
}
