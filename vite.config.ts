import type { IRouteUrl } from "$types"
import type { Output } from "svgo"
import type { UserConfig } from "vite"
import type { CustomPath } from "vite-plugin-kit-routes"

import { join, resolve } from "node:path"
import { env } from "node:process"

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
            LINKS: {
                copyright: "https://creativecommons.org/licenses/by-nc/3.0",
                discord: "https://discord.gg/dTzhKUSb3y",
                facebook: "https://facebook.com/GameValues",
                instagram: "https://www.instagram.com/gamevalues",
                telegramChat: "https://t.me/gamevalues_chat",
                telegramNews: "https://t.me/gamevalues_news",
                twitch: "https://www.twitch.tv/gamevalues",
                youtube: "https://www.youtube.com/channel/UCLVw1bjWVYUjRW8oBFpwx8Q",
            },
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

    server: {
        host: true,
        port: env.PORT,
        strictPort: true,
    },

    test: {
        include: [
            "src/**/*.{test,spec}.{js,ts}",
        ],
    },
} satisfies UserConfig)
