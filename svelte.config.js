import { resolve } from "node:path"

import dynamicImportVars from "@rollup/plugin-dynamic-import-vars"
import adapter from "@sveltejs/adapter-node"
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"

/** @type {import("@sveltejs/kit").Config} */
const config = {
    extensions: [
        ".svelte",
    ],

    kit: {
        adapter: adapter(),

        alias: {
            "@/*": resolve("*"),
            "~/*": resolve("src/*"),
        },

        files: {
            appTemplate: resolve("src/app.html"),
            assets: resolve("static"),
            errorTemplate: resolve("src/error.html"),
            lib: resolve("src/shared/lib"),
            routes: resolve("src/app/providers/routes"),
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
