import type { ConfigEnv } from "vite"

import { cwd } from "node:process"
import { resolve } from "node:path"

import { sveltekit } from "@sveltejs/kit/vite"
import { optimize } from "svgo"
import { get } from "lodash-es"
import { FileSystemIconLoader } from "unplugin-icons/loaders"
import icons from "unplugin-icons/vite"
import unocss from "unocss/vite"
import { defineConfig, loadEnv } from "vite"
import { purgeCss } from "vite-plugin-tailwind-purgecss"
import { vitePluginSwaggerTypescriptApi } from "vite-plugin-swagger-typescript-api"

export default function({ mode }: ConfigEnv) {
    let env: Record<string, string> = loadEnv(mode, cwd())

    return defineConfig({
        build: {
            cssCodeSplit: true,
        },

        server: {
            host: true,
            port: 3000,
        },

        plugins: [
            vitePluginSwaggerTypescriptApi({
                addReadonly: true,
                enumNamesAsValues: true,
                extractEnums: true,
                extractRequestBody: true,
                extractRequestParams: true,
                extractResponseBody: true,
                extractResponseError: true,
                generateClient: true,
                generateResponses: true,
                generateRouteTypes: true,
                name: "schema.ts",
                output: resolve("src/shared/api"),
                patch: true,
                singleHttpClient: true,
                sortTypes: true,
                typePrefix: "I",
                typeSuffix: "Raw",
                unwrapResponseData: true,
                url: get(env, "VITE_OPENAPI_URL", ""),
            }),
            sveltekit(),
            unocss(),
            purgeCss(),
            icons({
                compiler: "svelte",
                customCollections: {
                    base: FileSystemIconLoader("src/app/assets/icons/base"),
                    custom: FileSystemIconLoader("src/app/assets/icons/custom"),
                    game: FileSystemIconLoader("src/app/assets/icons/lot"),
                },
                transform: (svg: string): string => (
                    get((
                        optimize(svg, {
                            plugins: [
                                "removeDimensions",
                                "removeScriptElement",
                                "removeStyleElement",
                            ],
                        })
                    ), "data", "")
                ),
            }),
        ],
    })
}