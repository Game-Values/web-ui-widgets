import type { IconifyJSON } from "@iconify/types"
import type { Theme } from "@unocss/preset-uno"
import type { Module } from "~/types"

import { readFileSync } from "node:fs"
import { basename, join } from "node:path"
import { cwd } from "node:process"

import { FileSystemIconLoader } from "@iconify/utils/lib/loader/node-loaders"
import { glob } from "fast-glob"
import { assign, get } from "lodash-es"
import { optimize } from "svgo"
import { defineConfig, presetIcons, presetUno, transformerDirectives, transformerVariantGroup } from "unocss"

// fixme: not work
// import { default as presetAutoprefixer } from "unocss-preset-autoprefixer"

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

        return assign(numericSpacing, (
            {
                DEFAULT: get(numericSpacing, 1),
            }
        ))
    },

    breakpoints: {
        [Breakpoint.LG]: get(breakpoints, "$breakpoint-lg"),
        [Breakpoint.MD]: get(breakpoints, "$breakpoint-md"),
        [Breakpoint.SM]: get(breakpoints, "$breakpoint-sm"),
        [Breakpoint.XS]: get(breakpoints, "$breakpoint-xs"),
    },

    colors: {
        "accent-extra-light": get(colors, "$color-accent-extra-light"),
        "accent-light": get(colors, "$color-accent-light"),
        "accent-medium": get(colors, "$color-accent-medium"),
        "accent-medium-light": get(colors, "$color-accent-medium-light"),
        "accent-watery": get(colors, "$color-accent-watery"),
        black: get(colors, "$color-black"),
        "black-06": get(colors, "$color-black-06"),
        blue: get(colors, "$color-blue"),
        "blue-dark": get(colors, "$color-blue-dark"),
        error: get(colors, "$color-error"),
        "grey-dark": get(colors, "$color-grey-dark"),
        "grey-extra-dark": get(colors, "$color-grey-extra-dark"),
        "grey-light": get(colors, "$color-grey-light"),
        info: get(colors, "$color-info"),
        "negative-dark": get(colors, "$color-negative-dark"),
        "negative-light": get(colors, "$color-negative-light"),
        "negative-medium": get(colors, "$color-negative-medium"),
        pink: get(colors, "$color-pink"),
        positive: get(colors, "$color-positive"),
        "positive-dark": get(colors, "$color-positive-dark"),
        "positive-light": get(colors, "$color-positive-light"),
        primary: get(colors, "$color-primary"),
        "purple-dark": get(colors, "$color-purple-dark"),
        secondary: get(colors, "$color-secondary"),
        success: get(colors, "$color-success"),
        warning: get(colors, "$color-warning"),
        "warning-medium": get(colors, "$color-warning-medium"),
        white: get(colors, "$color-white"),
        "white-02": get(colors, "$color-white-02"),
        "white-12": get(colors, "$color-white-12"),
        "white-6": get(colors, "$color-white-6"),
        yellow: get(colors, "$color-yellow"),
    },

    fontFamily: {
        montserrat: "Montserrat",
        sans: "Montserrat",
        serif: "Montserrat",
    },

    fontSize: {
        "level-1": [
            get(typography, "$font-size-level-1"),
            get(typography, "$line-height-normal"),
        ],
        "level-2": [
            get(typography, "$font-size-level-2"),
            get(typography, "$line-height-normal"),
        ],
        "level-3": [
            get(typography, "$font-size-level-3"),
            get(typography, "$line-height-normal"),
        ],
        "level-4": [
            get(typography, "$font-size-level-4"),
            get(typography, "$line-height-normal"),
        ],
        "level-5": [
            get(typography, "$font-size-level-5"),
            get(typography, "$line-height-normal"),
        ],
        "level-6": [
            get(typography, "$font-size-level-6"),
            get(typography, "$line-height-normal"),
        ],
        lg: [
            get(typography, "$font-size-lg"),
            get(typography, "$line-height-normal"),
        ],
        normal: [
            get(typography, "$font-size-normal"),
            get(typography, "$line-height-normal"),
        ],
        sm: [
            get(typography, "$font-size-sm"),
            get(typography, "$line-height-normal"),
        ],
    },

    get height(): Theme["height"] {
        return assign(
            getNumericSpacing(),

            {
                "avatar-large": get(sizes, "$avatar-size-large"),
                "avatar-small": get(sizes, "$avatar-size-small"),
                button: get(sizes, "$button-height"),
                "button-small": get(sizes, "$button-height-small"),
                dot: get(sizes, "$dot-size"),
                input: get(sizes, "$input-height"),
                "route-nav-button": get(sizes, "$route-nav-button-size"),
                switch: get(sizes, "$switch-height"),
            },
        )
    },

    lineHeight: {
        normal: get(typography, "$line-height-normal"),
    },

    spacing: getNumericSpacing(),

    get width(): Theme["width"] {
        return assign(getNumericSpacing(), (
            {
                "avatar-large": get(sizes, "$avatar-size-large"),
                "avatar-small": get(sizes, "$avatar-size-small"),
                dot: get(sizes, "$dot-size"),
                layout: get(sizes, "$layout-width"),
                "route-nav-button": get(sizes, "$route-nav-button-size"),
            }
        ))
    },
}

function extractSassVars(filename: string): Record<string, string> {
    let content: string = readFileSync(`./src/assets/styles/vars/${filename}.sass`, "utf-8")
    let vars: string[] = content.split("\n")

    return vars.reduce((result: Record<string, string>, line: string): Record<string, string> => {
        let [key, val]: string[] = line.split(": ")
        if (key && val)
            assign(result, {
                [key]: val,
            })

        return result
    }, {})
}

function getNumericSpacing(): Theme["spacing"] {
    return {
        1: get(spaces, "$space-1"),
        10: get(spaces, "$space-10"),
        11: get(spaces, "$space-11"),
        12: get(spaces, "$space-12"),
        13: get(spaces, "$space-13"),
        14: get(spaces, "$space-14"),
        15: get(spaces, "$space-15"),
        16: get(spaces, "$space-16"),
        17: get(spaces, "$space-17"),
        18: get(spaces, "$space-18"),
        2: get(spaces, "$space-2"),
        3: get(spaces, "$space-3"),
        4: get(spaces, "$space-4"),
        5: get(spaces, "$space-5"),
        6: get(spaces, "$space-6"),
        7: get(spaces, "$space-7"),
        8: get(spaces, "$space-8"),
        9: get(spaces, "$space-9"),
    }
}

export default defineConfig({
    content: {
        inline: [
            async (): Promise<string> => {
                let customIcons: string[] = (
                    await glob(
                        join(cwd(), "src", "assets", "icons", "*.svg"),
                    )
                ).map((filepath: string): string => (
                    `i-custom:${basename(filepath, ".svg")}`
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
                heroicons: (): Promise<IconifyJSON> => (
                    import("@iconify-json/heroicons/icons.json")
                        .then((module: Module<IconifyJSON>): IconifyJSON => module.default)
                ),
            },
            customizations: {
                transform: (svg: string): string => (
                    get(
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
        content: `w-full max-w-[${get(theme.width, "layout")}] ${Breakpoint.LG}:mx-auto`,
        fit: "w-full h-full",
        "flex-center": "flex items-center justify-center",
        "flex-col": "flex flex-col",
        "flex-col-center": "flex flex-col items-center justify-center",
        "flex-col-items-center": "flex flex-col items-center",
        "flex-col-justify-center": "flex flex-col justify-center",
        "flex-items-center": "flex items-center",
        "flex-justify-center": "flex items-center justify-center",
        "max-fit": "max-w-full max-h-full",
        "max-screen": "max-w-screen max-h-screen",
        overlay: "fit absolute left-0 top-0",
        screen: "w-screen h-screen",
    },

    theme,

    transformers: [
        transformerDirectives(),
        transformerVariantGroup(),
    ],
})
