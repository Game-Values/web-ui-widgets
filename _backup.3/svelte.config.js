import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { resolve } from "node:path";

/** @type {import("@sveltejs/kit").Config} */
const config = {
	extensions: [".svelte"],

	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),

		alias: {
			"@/*": resolve("./*"),
			"~/*": resolve("./src/*"),
		},
	},

	// for more information about preprocessors
	preprocess: [vitePreprocess()],

	vitePlugin: {
		inspector: true,
	},
};
export default config;