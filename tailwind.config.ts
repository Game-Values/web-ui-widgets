import { readFileSync } from "node:fs"

import tailwindAspectRatio from "@tailwindcss/aspect-ratio"
import tailwindForms from "@tailwindcss/forms"
import tailwindTypography from "@tailwindcss/typography"

import { useAssign, useGet } from "./common/composables"
import { BREAKPOINTS } from "./common/consts"
import { Breakpoint } from "./common/enums"

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

export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],

    corePlugins: {
        aspectRatio: false,
    },

    plugins: [
        tailwindAspectRatio,
        tailwindForms,
        tailwindTypography,
    ],

    theme: {
        extend: {
            breakpoints: {
                [Breakpoint.LG]: `${useGet(BREAKPOINTS, Breakpoint.LG)}px`,
                [Breakpoint.MD]: `${useGet(BREAKPOINTS, Breakpoint.MD)}px`,
                [Breakpoint.SM]: `${useGet(BREAKPOINTS, Breakpoint.SM)}px`,
                [Breakpoint.XS]: `${useGet(BREAKPOINTS, Breakpoint.XS)}px`,
            },

            colors: {
                "blue-accent-medium": "#3478F6",

                "grey-dark": "#1B1B1C",
                white: "#FFFFFF",
            },

            fontFamily: {
                sans: "Montserrat",
                serif: "Montserrat",
            },

            fontSize: {
                base: useGet(typography, "$font-size-base"),
            },

            lineHeight: {
                base: useGet(typography, "$line-height-base"),
            },
        },
    },
}
