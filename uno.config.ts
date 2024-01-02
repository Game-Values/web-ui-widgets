import extractorSvelte from "@unocss/extractor-svelte"
import { defineConfig, presetWebFonts, presetUno, transformerDirectives, transformerVariantGroup } from "unocss"

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
	],

	shortcuts: {

	},

	theme: {
        colors: {
            primary: "#3478F6",
            secondary: "#353536",
            surface: "#1B1B1C",
            background: "#1B1B1C",
            error: "#D8222F",
        },

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
            normal: "1rem",
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
