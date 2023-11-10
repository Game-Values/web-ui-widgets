import { readFileSync } from "node:fs"
import { join } from "node:path"
import { cwd } from "node:process"

import { FileSystemIconLoader } from "@iconify/utils/lib/loader/node-loaders"
import { optimize } from "svgo"
import {
    defineConfig,
    presetIcons,
    presetUno,
    transformerDirectives,
    transformerVariantGroup,
} from "unocss"

import { useAssign, useClone, useGet } from "./common/composables"
import { Breakpoint } from "./common/enums"

let breakpoints: Record<string, string> = extractSassVars("breakpoints")
let colors: Record<string, string> = extractSassVars("colors")
let radius: Record<string, string> = extractSassVars("radius")
let sizes: Record<string, string> = extractSassVars("sizes")
let spaces: Record<string, string> = extractSassVars("spaces")
let typography: Record<string, string> = extractSassVars("typography")

let numericSpaces: Record<number, string | undefined> = {
    1: useGet(spaces, "$space-1"),
    1.5: useGet(spaces, "$space-1_5"),
    10: useGet(spaces, "$space-10"),
    2: useGet(spaces, "$space-2"),
    2.5: useGet(spaces, "$space-2_5"),
    3: useGet(spaces, "$space-3"),
    3.5: useGet(spaces, "$space-3_5"),
    4: useGet(spaces, "$space-4"),
    5: useGet(spaces, "$space-5"),
    6: useGet(spaces, "$space-6"),
    7: useGet(spaces, "$space-7"),
    8: useGet(spaces, "$space-8"),
    9: useGet(spaces, "$space-9"),
}

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
        presetIcons({
            collections: {
                custom: FileSystemIconLoader(
                    join(cwd(), "src", "assets", "icons"),
                ),
            },
            customizations: {
                transform: (svg: string): string => (
                    useGet<string>(optimize(svg), "data")
                ),
            },
        }),
        presetUno(),
    ],

    shortcuts: {
        "border-solid": "border border-solid",
        "border-solid-secondary": "border border-solid border-secondary",
        content: `w-full max-w-[${useGet(sizes, "$layout-max-width")}] ${Breakpoint.LG}:mx-auto`,
        fit: "w-full h-full",
        "flex-center": "flex items-center justify-center",
        "flex-col": "flex flex-col",
        "flex-col-center": "flex flex-col items-center justify-center",
        "flex-col-items-center": "flex flex-col items-center",
        "flex-col-justify-center": "flex flex-col justify-center",
        "flex-items-center": "flex items-center",
        "flex-justify-center": "flex items-center justify-center",
        overlay: "fit absolute left-0 top-0",
        screen: "w-screen h-screen",
    },

    theme: {
        borderRadius: useAssign(useClone(numericSpaces), (
            {
                DEFAULT: useGet(spaces, "$space-1"),
                tag: useGet(radius, "$radius-tag"),
            }
        )),

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
            "grey-dark": useGet(colors, "$color-grey-dark"),
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
            montserrat: "Montserrat",
            sans: "Montserrat",
            serif: "Montserrat",
        },

        fontSize: {
            "level-1": [
                useGet(typography, "$font-size-level-1"),
                useGet(typography, "$line-height-normal"),
            ],
            "level-2": [
                useGet(typography, "$font-size-level-2"),
                useGet(typography, "$line-height-normal"),
            ],
            "level-3": [
                useGet(typography, "$font-size-level-3"),
                useGet(typography, "$line-height-normal"),
            ],
            "level-4": [
                useGet(typography, "$font-size-level-4"),
                useGet(typography, "$line-height-normal"),
            ],
            "level-5": [
                useGet(typography, "$font-size-level-5"),
                useGet(typography, "$line-height-normal"),
            ],
            "level-6": [
                useGet(typography, "$font-size-level-6"),
                useGet(typography, "$line-height-normal"),
            ],
            lg: [
                useGet(typography, "$font-size-lg"),
                useGet(typography, "$line-height-normal"),
            ],
            normal: [
                useGet(typography, "$font-size-normal"),
                useGet(typography, "$line-height-normal"),
            ],
            sm: [
                useGet(typography, "$font-size-sm"),
                useGet(typography, "$line-height-normal"),
            ],
        },

        height: numericSpaces,

        lineHeight: {
            "level-1": useGet(typography, "$line-height-level-1"),
            "level-2": useGet(typography, "$line-height-level-2"),
            "level-3": useGet(typography, "$line-height-level-3"),
            "level-4": useGet(typography, "$line-height-level-4"),
            "level-5": useGet(typography, "$line-height-level-5"),
            "level-6": useGet(typography, "$line-height-level-6"),
            normal: useGet(typography, "$line-height-normal"),
        },

        spacing: useAssign(useClone(numericSpaces), (
            {
                "main-slider": useGet(spaces, "$space-main-slider"),
                normal: useGet(spaces, "$space-normal"),
                page: useGet(spaces, "$space-page"),
            }
        )),

        width: numericSpaces,
    },

    transformers: [
        transformerDirectives(),
        transformerVariantGroup(),
    ],
})
