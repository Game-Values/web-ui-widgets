import { join, resolve } from "node:path"

import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"
import adapter from "svelte-adapter-bun"

/** @type {import("@sveltejs/kit").Config} */
const config = {
    kit: {
        adapter: adapter({
            precompress: {
                brotli: true,
                gzip: true,
            },
        }),

        alias: {
            "@/*": resolve("*"),
            "~/*": resolve("src", "*"),
            $api: resolve("src", "shared", "api"),
            $config: resolve("src", "shared", "config"),
            $model: resolve("src", "shared", "model"),
            $schema: resolve("src", "shared", "schema"),
            $types: resolve("src", "shared", "types"),
            $ui: resolve("src", "shared", "ui"),
        },

        files: {
            lib: join("src", "shared", "lib"),
            params: join("src", "app", "params"),
            routes: join("src", "app", "routes"),
        },
    },

    preprocess: [
        vitePreprocess(),
    ],

    vitePlugin: {
        emitCss: true,
    },
}

export default config
