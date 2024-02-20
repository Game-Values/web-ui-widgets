import type { IRouteUrl } from "$types"
import type { Output } from "svgo"
import type { UserConfig } from "vite"
import type { CustomPath } from "vite-plugin-kit-routes"

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
            PAGES: {
                "/lots/new-listing": {
                    explicit_search_params: {
                        gameId: { type: "string" },
                        gameSection: { type: "string" },
                    },
                },
            } satisfies Partial<Record<IRouteUrl, CustomPath>>,
            routes_path: join("src", "app", "routes"),
        }),
        unocss(),
        purgeCss(),
    ],

    // server: {
    //     host: true,
    //     port: 3000,
    // },

    test: {
        include: [
            "src/**/*.{test,spec}.{js,ts}",
        ],
    },
} satisfies UserConfig)
