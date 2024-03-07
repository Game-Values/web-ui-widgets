import { resolve } from "node:path"

import dynamicImportVars from "@rollup/plugin-dynamic-import-vars"
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"
import adapter from "svelte-adapter-bun"

/** @type {import("@sveltejs/kit").Config} */
const config = {
    extensions: [
        ".svelte",
    ],

    kit: {
        adapter: adapter({
            envPrefix: "VITE_",
            precompress: {
                brotli: true,
                gzip: true,
            },
        }),

        alias: {
            "@/*": resolve("*"),
            "~/*": resolve("src/*"),
            $api: resolve("src/shared/api"),
            $config: resolve("src/shared/config"),
            $model: resolve("src/shared/lib"),
            $types: resolve("src/shared/types"),
            $ui: resolve("src/shared/chat-send-hub-message"),
        },

        files: {
            appTemplate: resolve("src/app.html"),
            assets: resolve("static"),
            errorTemplate: resolve("src/error.html"),
            lib: resolve("src/shared/lib"),
            routes: resolve("routes"),
        },
    },

    preprocess: [
        vitePreprocess(),
    ],

    vite: {
        plugins: [
            dynamicImportVars({
                include: /src\/app\/icons/,
            }),
        ],
    },

    vitePlugin: {
        inspector: true,
    },
}
export default config
