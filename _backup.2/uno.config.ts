import type { Module } from "~/shared/model"

import { basename } from "node:path"

import { FileSystemIconLoader } from "@iconify/utils/lib/loader/node-loaders"
import { defineConfig, presetIcons, presetUno, transformerDirectives, transformerVariantGroup } from "unocss"
import { optimize } from "svgo"
import { glob } from "fast-glob"

import { THEME_COLORS } from "./config/consts"
import type {IconifyJSON} from "@iconify/types";

export default defineConfig({
    content: {
        inline: [
            async (): Promise<string> => (
                JSON.stringify(
                    await glob("src/assets/icons/*.svg").then(icons => (
                        icons.map(filepath => `i-custom:${basename(filepath, ".svg")}`)
                    ))
                )
            ),
        ],
    },

    presets: [
        presetIcons({
            collections: {
                base: FileSystemIconLoader("assets/icons/base"),
                custom: FileSystemIconLoader("assets/icons/custom"),
                game: FileSystemIconLoader("assets/icons/lot"),
                heroicon: (): Promise<IconifyJSON> => (
                    import("@iconify-json/heroicons/icons.json")
                        .then((module: Module<IconifyJSON>): IconifyJSON => module.default)
                ),
            },
            customizations: {
                transform: (svg: string): string => {
                    let { data } = optimize(svg, {
                        plugins: [
                            "removeDimensions",
                        ],
                    })

                    return data
                },
            },
            extraProperties: {
                height: "inherit",
                width: "inherit",
            },
        }),
        presetUno(),
    ],

    shortcuts: {
        "align-center": "flex items-center",
    },

    theme: {
        colors: THEME_COLORS,
        fontFamily: {
            montserrat: "Montserrat",
        },
        fontSize: {
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
