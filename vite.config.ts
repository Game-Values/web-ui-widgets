import type { Output } from "svgo"
import type { GenerateApiParams } from "swagger-typescript-api"
import type { ConfigEnv, UserConfig } from "vite"

import { resolve } from "node:path"
import { cwd } from "node:process"

import { sveltekit } from "@sveltejs/kit/vite"
import { get } from "lodash-es"
import { optimize } from "svgo"
import unocss from "unocss/vite"
import { FileSystemIconLoader } from "unplugin-icons/loaders"
import icons from "unplugin-icons/vite"
import { defineConfig, loadEnv } from "vite"
import { ViteImageOptimizer } from "vite-plugin-image-optimizer"
import { vitePluginSwaggerTypescriptApi } from "vite-plugin-swagger-typescript-api"
import { purgeCss } from "vite-plugin-tailwind-purgecss"

export default function ({ mode }: ConfigEnv): UserConfig {
    let env: Record<string, string> = loadEnv(mode, cwd())

    return defineConfig({
        build: {
            cssCodeSplit: true,
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
                name: "index.ts",
                output: resolve("src/shared/model/swagger"),
                patch: true,
                singleHttpClient: true,
                sortTypes: true,
                typePrefix: "I",
                unwrapResponseData: true,
                url: get(env, "VITE_OPENAPI_URL", ""),
            } as GenerateApiParams),
            ViteImageOptimizer(),
            icons({
                compiler: "svelte",
                customCollections: {
                    common: FileSystemIconLoader("src/app/assets/icons/common"),
                    custom: FileSystemIconLoader("src/app/assets/icons/custom"),
                    game: FileSystemIconLoader("src/app/assets/icons/lot"),
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
}
