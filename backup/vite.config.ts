import type { Output } from "svgo"

import { sveltekit } from "@sveltejs/kit/vite"
import { optimize } from "svgo"
import unocss from "unocss/vite"
import { FileSystemIconLoader } from "unplugin-icons/loaders"
import icons from "unplugin-icons/vite"
import { defineConfig } from "vite"
import { ViteImageOptimizer } from "vite-plugin-image-optimizer"
import { purgeCss } from "vite-plugin-tailwind-purgecss"

export default defineConfig({
    build: {
        cssCodeSplit: true,
    },

    plugins: [
        ViteImageOptimizer(),
        icons({
            compiler: "svelte",
            customCollections: {
                common: FileSystemIconLoader("src/app/assets/icons/common"),
                game: FileSystemIconLoader("src/app/assets/icons/game"),
            },
            transform: (svg: string): string => {
                let { data }: Output = optimize(svg, {
                    plugins: [
                        "removeDimensions",
                        "removeScriptElement",
                        "removeStyleElement",
                    ],
                })

                return data
            },
        }),
        sveltekit(),
        unocss(),
        purgeCss(),
    ],

    server: {
        host: true,
        port: 3000,
    },
})
