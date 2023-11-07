import { readFileSync } from "node:fs"

import {
    defineConfig,
    presetTypography,
    presetUno,
    transformerDirectives,
    transformerVariantGroup,
} from "unocss"

import { useAssign, useGet } from "./common/composables"
import { Breakpoint } from "./common/enums"

let breakpoints: Record<string, string> = extractSassVars("breakpoints")
let colors: Record<string, string> = extractSassVars("colors")
let radius: Record<string, string> = extractSassVars("radius")
let spaces: Record<string, string> = extractSassVars("spaces")
let typography: Record<string, string> = extractSassVars("typography")

function extractSassVars(filename: string): Record<string, string> {
    let content: string = readFileSync(`./src/assets/styles/vars/${filename}.sass`, "utf-8")
    let vars: string[] = content.split("\n")

    return vars.reduce((result: Record<string, string>, line: string): Record<string, string> => {
        let [key, val]: string[] = line.split(": ")
        if (key && val)
            useAssign(result, {
                [key]: val,
            })

        return result
    }, {})
}

export default defineConfig({
    presets: [
        presetTypography(),
        presetUno(),
    ],

    shortcuts: {
        // todo
    },

    theme: {
        borderRadius: {
            lg: useGet(radius, "$radius-lg"),
            normal: useGet(radius, "$radius-normal"),
            sm: useGet(radius, "$radius-sm"),
            tag: useGet(radius, "$radius-tag"),
        },

        breakpoints: {
            [Breakpoint.LG]: useGet(breakpoints, "$breakpoint-lg"),
            [Breakpoint.MD]: useGet(breakpoints, "$breakpoint-md"),
            [Breakpoint.SM]: useGet(breakpoints, "$breakpoint-sm"),
            [Breakpoint.XS]: useGet(breakpoints, "$breakpoint-xs"),
        },

        colors: {
            "accent-extra-light": useGet(colors, "$color-accent-extra-light"),
            "accent-light": useGet(colors, "$color-accent-light"),
            "accent-medium": useGet(colors, "$color-accent-medium"),
            "accent-watery": useGet(colors, "$color-accent-watery"),
            black: useGet(colors, "$color-black"),
            blue: useGet(colors, "$color-blue"),
            "blue-dark": useGet(colors, "$color-blue-dark"),
            error: useGet(colors, "$color-error"),
            grey: useGet(colors, "$color-grey"),
            "grey-extra-dark": useGet(colors, "$color-grey-extra-dark"),
            "grey-light": useGet(colors, "$color-grey-light"),
            info: useGet(colors, "$color-info"),
            "negative-light": useGet(colors, "$color-negative-light"),
            "negative-medium": useGet(colors, "$color-negative-medium"),
            pink: useGet(colors, "$color-pink"),
            "positive-light": useGet(colors, "$color-positive-light"),
            primary: useGet(colors, "$color-primary"),
            "purple-dark": useGet(colors, "$color-purple-dark"),
            secondary: useGet(colors, "$color-secondary"),
            success: useGet(colors, "$color-success"),
            warning: useGet(colors, "$color-warning"),
            "warning-medium": useGet(colors, "$color-warning-medium"),
            white: useGet(colors, "$color-white"),
            yellow: useGet(colors, "$color-yellow"),
        },

        fontFamily: {
            sans: "Montserrat",
            serif: "Montserrat",
        },

        fontSize: {
            "level-1": useGet(typography, "$font-size-level-1"),
            "level-2": useGet(typography, "$font-size-level-2"),
            "level-3": useGet(typography, "$font-size-level-3"),
            "level-4": useGet(typography, "$font-size-level-4"),
            "level-5": useGet(typography, "$font-size-level-5"),
            "level-6": useGet(typography, "$font-size-level-6"),
            lg: useGet(typography, "$font-size-lg"),
            normal: useGet(typography, "$font-size-normal"),
            sm: useGet(typography, "$font-size-sm"),
        },

        lineHeight: {
            "level-1": useGet(typography, "$line-height-level-1"),
            "level-2": useGet(typography, "$line-height-level-2"),
            "level-3": useGet(typography, "$line-height-level-3"),
            "level-4": useGet(typography, "$line-height-level-4"),
            "level-5": useGet(typography, "$line-height-level-5"),
            "level-6": useGet(typography, "$line-height-level-6"),
            normal: useGet(typography, "$line-height-base"),
        },

        spacing: {
            normal: useGet(spaces, "$space-normal"),
        },
    },

    transformers: [
        transformerDirectives(),
        transformerVariantGroup(),
    ],
})
