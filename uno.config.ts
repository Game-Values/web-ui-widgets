// import { readFileSync } from "node:fs"

// import {
//     defineConfig,
//     presetTypography,
//     presetUno,
//     transformerDirectives,
//     transformerVariantGroup,
// } from "unocss"

// import { useAssign, useGet } from "./common/composables"
// import { Breakpoint } from "./common/enums"

// let breakpoints: Record<string, string> = extractSassVars("breakpoints")
// let typography: Record<string, string> = extractSassVars("typography")

// function extractSassVars(filename: string): Record<string, string> {
//     let content: string = readFileSync(`./src/assets/styles/vars/${filename}.sass`, "utf-8")
//     let vars: string[] = content.split("\n")

//     return vars.reduce((result: Record<string, string>, line: string): Record<string, string> => {
//         let [key, val]: string[] = line.split(": ")
//         if (key && val)
//             useAssign(result, {
//                 [key]: val,
//             })

//         return result
//     }, {})
// }

// export default defineConfig({
//     presets: [
//         presetTypography(),
//         presetUno(),
//     ],

//     shortcuts: {
//         // todo
//     },

//     theme: {
//         borderRadius: {
//             // todo
//         },

//         breakpoints: {
//             [Breakpoint.LG]: useGet(breakpoints, "$breakpoint-lg"),
//             [Breakpoint.MD]: useGet(breakpoints, "$breakpoint-md"),
//             [Breakpoint.SM]: useGet(breakpoints, "$breakpoint-sm"),
//             [Breakpoint.XS]: useGet(breakpoints, "$breakpoint-xs"),
//         },

//         colors: {
//             // todo
//         },

//         fontFamily: {
//             sans: "Montserrat",
//             serif: "Montserrat",
//         },

//         fontSize: {
//             base: useGet(typography, "$font-size-base"),
//         },

//         lineHeight: {
//             base: useGet(typography, "$line-height-base"),
//         },

//         spacing: {
//             // todo
//         },
//     },

//     transformers: [
//         transformerDirectives(),
//         transformerVariantGroup(),
//     ],
// })
