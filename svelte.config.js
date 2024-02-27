import { join, resolve } from "node:path"

import adapter from "@sveltejs/adapter-static"
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"

/** @type {import("@sveltejs/kit").Config} */
const config = {
    kit: {
        adapter: adapter({
            assets: resolve(".build"),
            pages: resolve(".build"),
            precompress: true,
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
            appTemplate: join("src", "app", "templates", "app.html"),
            errorTemplate: join("src", "app", "templates", "error.html"),
            hooks: {
                client: join("src", "app", "hooks", "hooks.client"),
                server: join("src", "app", "hooks", "hooks.server"),
            },
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
