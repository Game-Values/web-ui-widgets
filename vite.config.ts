import type { Output } from "svgo"
import type { UserConfig } from "vite"

import { join, resolve } from "node:path"

import { enhancedImages } from "@sveltejs/enhanced-img"
import { sveltekit } from "@sveltejs/kit/vite"
import { optimize } from "svgo"
import unocss from "unocss/vite"
import { FileSystemIconLoader } from "unplugin-icons/loaders"
import icons from "unplugin-icons/vite"
import { kitRoutes } from "vite-plugin-kit-routes"
import { purgeCss } from "vite-plugin-tailwind-purgecss"
import { defineConfig } from "vitest/config"

import svelteConfig from "@/svelte.config"

resolve("src", "app", "assets", "icons")

export default defineConfig({
    plugins: [
        icons({
            compiler: "svelte",
            customCollections: {
                common: FileSystemIconLoader(
                    resolve("src", "app", "assets", "icons", "common"),
                ),
                game: FileSystemIconLoader(
                    resolve("src", "app", "assets", "icons", "game"),
                ),
            },
            scale: 1.5,
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
        enhancedImages(),
        sveltekit(),
        kitRoutes({
            generated_file_path: join("src", "shared", "schema", "routes.ts"),
            routes_path: svelteConfig.kit!.files!.routes!,
        }),
        unocss(),
        purgeCss(),
    ],

    server: {
        host: true,
        port: 3000,
    },

    test: {
        include: [
            "src/**/*.{test,spec}.{js,ts}",
        ],
    },
} satisfies UserConfig)
