import { resolve } from "node:path";

import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import dynamicImportVars from "@rollup/plugin-dynamic-import-vars"

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
			appTemplate: resolve("src/app/app.html"),
			assets: resolve("src/app/static"),
			errorTemplate: resolve("src/app/error.html"),
			lib: resolve("src/app/lib"),
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
};
export default config;
