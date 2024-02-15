import type { UserConfig } from "unocss"

import extractorSvelte from "@unocss/extractor-svelte"
import { defineConfig, presetWebFonts } from "unocss"
import presetAutoprefixer from "unocss-preset-autoprefixer"

export default defineConfig({
    extractors: [
        extractorSvelte(),
    ],

    presets: [
        presetWebFonts({
            fonts: {
                inter: [
                    {
                        name: "Inter",
                        weights: [
                            400,
                            700,
                        ],
                        provider: "bunny",
                    },
                ],
                play: [
                    {
                        name: "Play",
                        weights: [
                            400,
                            500,
                            600,
                            700,
                        ],
                        provider: "bunny",
                    },
                ],
            },
        }),
        presetAutoprefixer(),
    ],
} satisfies UserConfig)
