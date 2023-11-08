import type { Color } from "~/types"
import type { Theme } from "@unocss/preset-uno"

export function useTheme(): Theme {
    return useRuntimeConfig().public.theme
}

export function useThemeColor(color: Color): string {
    return useGet(useTheme().colors, color)!
}
