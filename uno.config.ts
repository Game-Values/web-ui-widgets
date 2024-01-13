import { readFileSync } from "node:fs"

import extractorSvelte from "@unocss/extractor-svelte"
import presetAutoprefixer from "unocss-preset-autoprefixer"
import { defineConfig, presetWebFonts, presetUno, transformerDirectives, transformerVariantGroup } from "unocss"
import { assign, get, reduce, set } from "lodash-es"

let colorPalette: Record<string, string> = extractSassVars("src/app/assets/styles/theme/_color-palette.scss")

function extractSassVars(filepath: string): Record<string, string> {
    let content: string = readFileSync(filepath, "utf-8")
    let vars: string[] = content.split("\n")

    return reduce(vars, (result: Record<string, string>, line: string): Record<string, string> => {
        let [key, val]: string[] = line.split(": ")

        if (key && val)
            set(result, key.replace(/^\$/, ""), val.replace(/;$/, ""))

        return result
    }, {})
}

export default defineConfig({
    extractors: [
        extractorSvelte(),
    ],

	presets: [
        presetUno(),
		presetWebFonts({
			provider: "bunny",
			fonts: {
				base: "Montserrat:400,500,600,700",
			},
		}),
        presetAutoprefixer(),
	],

	theme: {
        colors: assign(colorPalette, {
            background: get(colorPalette, "grey-dark"),
            surface: get(colorPalette, "grey-dark"),
        }),

        fontFamily: {
            montserrat: "Montserrat",
        },

        fontSize: {
            "level-1": ["2.25rem", "1.5em"],
            "level-2": ["1.875rem", "1.5em"],
            "level-3": ["1.5rem", "1.5em"],
            "level-4": ["1.0625rem", "1.5em"],
            "level-5": ["1.0625rem", "1.5em"],
            "level-6": ["1rem", "1.5em"],
            normal: ["1rem", "1.5em"],
        },

        lineHeight: {
            normal: "1.5em",
        },
	},

	transformers: [
		transformerDirectives(),
		transformerVariantGroup(),
	],
})
