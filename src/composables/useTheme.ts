import type { Theme } from "@unocss/preset-uno"
import type { Color, FontSize, Space } from "~/types"

export function useTheme(): Theme {
    return useRuntimeConfig().public.theme
}

export function useThemeColor(color: Color): string {
    return useGet(useTheme().colors, color)
}

export function useThemeFontSize(fontSize: FontSize): string {
    let _fontSize: string | string[] = useGet(useTheme().fontSize, fontSize)

    return (
        useFirst(_fontSize) ||
        _fontSize
    ) as string
}

export function useThemeSpace(space: Space): string {
    return useGet(useTheme().spacing, space)
}
