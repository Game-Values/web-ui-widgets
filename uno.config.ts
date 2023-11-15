import type { Theme } from "@unocss/preset-uno"

import { readFileSync } from "node:fs"
import { basename, join } from "node:path"
import { cwd } from "node:process"

import { FileSystemIconLoader } from "@iconify/utils/lib/loader/node-loaders"
import { glob } from "fast-glob"
import { optimize } from "svgo"
import { defineConfig, presetIcons, presetUno, transformerDirectives, transformerVariantGroup } from "unocss"

// fixme: not work
// import { default as presetAutoprefixer } from "unocss-preset-autoprefixer"

import { useAssign, useGet } from "./common/composables"
import { Breakpoint } from "./common/enums"
import { isDevelopment } from "./common/utils"

let breakpoints: Record<string, string> = extractSassVars("breakpoints")
let colors: Record<string, string> = extractSassVars("colors")
let sizes: Record<string, string> = extractSassVars("sizes")
let spaces: Record<string, string> = extractSassVars("spaces")
let typography: Record<string, string> = extractSassVars("typography")

let theme: Theme = {
    get borderRadius(): Theme["borderRadius"] {
        let numericSpacing: Theme["spacing"] = getNumericSpacing()

        return useAssign(numericSpacing, (
            {
                DEFAULT: useGet(numericSpacing, 1),
            }
        ))
    },

    get height(): Theme["width"] {
        return useAssign(getNumericSpacing(), (
            {
                button: useGet(sizes, "$button-height"),
                input: useGet(sizes, "$input-height"),

                [`header-${Breakpoint.LG}`]: useGet(sizes, "$header-height-lg"),
                [`header-${Breakpoint.MD}`]: useGet(sizes, "$header-height-md"),
                [`header-${Breakpoint.SM}`]: useGet(sizes, "$header-height-sm"),
                [`header-${Breakpoint.XS}`]: useGet(sizes, "$header-height-xs"),

                [`footer-${Breakpoint.LG}`]: useGet(sizes, "$footer-height-lg"),
                [`footer-${Breakpoint.MD}`]: useGet(sizes, "$footer-height-md"),
                [`footer-${Breakpoint.SM}`]: useGet(sizes, "$footer-height-sm"),
                [`footer-${Breakpoint.XS}`]: useGet(sizes, "$footer-height-xs"),
            }
        ))
    },

    get width(): Theme["height"] {
        return useAssign(getNumericSpacing(), (
            {
                layout: useGet(sizes, "$layout-width"),
            }
        ))
    },

    backgroundImage: {
        "game-card-gradient": `
            linear-gradient(180deg, ${useGet(colors, "$color-accent-medium")} 0%, ${useGet(colors, "$color-accent-medium-light")} 100%)
        `,
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
        "accent-medium-light": useGet(colors, "$color-accent-medium-light"),
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

    lineHeight: {
        normal: useGet(typography, "$line-height-normal"),
    },

    spacing: getNumericSpacing(),
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

function getNumericSpacing(): Theme["spacing"] {
    return {
        1: useGet(spaces, "$space-1"),
        2: useGet(spaces, "$space-2"),
        3: useGet(spaces, "$space-3"),
        4: useGet(spaces, "$space-4"),
        5: useGet(spaces, "$space-5"),
        6: useGet(spaces, "$space-6"),
        7: useGet(spaces, "$space-7"),
        8: useGet(spaces, "$space-8"),
        9: useGet(spaces, "$space-9"),
        10: useGet(spaces, "$space-10"),
        11: useGet(spaces, "$space-11"),
        12: useGet(spaces, "$space-12"),
        13: useGet(spaces, "$space-13"),
        14: useGet(spaces, "$space-14"),
        15: useGet(spaces, "$space-15"),
        16: useGet(spaces, "$space-16"),
        17: useGet(spaces, "$space-17"),
        18: useGet(spaces, "$space-18"),
    }
}

export default defineConfig({
    content: {
        filesystem: [
            join(cwd(), "schema", "icons.json"),
        ],
        inline: [
            async (): Promise<string> => {
                let customIcons: string[] = (
                    await glob(
                        join(cwd(), "src", "assets", "icons", "*.svg"),
                    )
                ).map((iconpath: string): string => (
                    `i-custom:${basename(iconpath, ".svg")}`
                ))

                if (isDevelopment())
                    return JSON.stringify(customIcons, null, 4)

                return JSON.stringify(customIcons)
            },
        ],
    },

    presets: [
        presetIcons({
            collections: {
                custom: FileSystemIconLoader(
                    join(cwd(), "src", "assets", "icons"),
                ),
            },
            customizations: {
                transform: (svg: string): string => (
                    useGet<string>(
                        optimize(svg, {
                            plugins: [
                                "removeDimensions",
                            ],
                        }),
                        "data",
                    )
                ),
            },
            extraProperties: {
                height: "inherit",
                width: "inherit",
            },
        }),
        presetUno(),
        // presetAutoprefixer(),
    ],

    shortcuts: {
        "border-solid": "border border-solid",
        "border-solid-secondary": "border border-solid border-secondary",
        content: `w-full max-w-[${useGet(theme.width, "layout")}] ${Breakpoint.LG}:mx-auto`,
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

    theme,

    transformers: [
        transformerDirectives(),
        transformerVariantGroup(),
    ],
})
