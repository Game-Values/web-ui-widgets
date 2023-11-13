import type { Theme } from "@unocss/preset-uno"
import type { Color, Space } from "~/types"

export function useTheme(): Theme {
    return useRuntimeConfig().public.theme
}

export function useThemeColor(color: Color): string {
    return useGet(useTheme().colors, color)
}

export function useThemeSpace(space: Space): string {
    return useGet(useTheme().spacing, space)
}
