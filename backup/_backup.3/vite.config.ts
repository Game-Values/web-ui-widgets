import { sveltekit } from "@sveltejs/kit/vite";
import { optimize } from "svgo"
import { FileSystemIconLoader } from "unplugin-icons/loaders"
import icons from "unplugin-icons/vite"
import { defineConfig } from "vite";
import { purgeCss } from "vite-plugin-tailwind-purgecss";

export default defineConfig({
	plugins: [
		sveltekit(),
		purgeCss(),
		icons({
			compiler: "svelte",
			customCollections: {
				base: FileSystemIconLoader("./src/app/assets/icons/base"),
				custom: FileSystemIconLoader("./src/app/assets/icons/custom"),
				game: FileSystemIconLoader("./src/app/assets/icons/game"),
			},
			transform: (svg: string): string => (
				optimize(svg, {
					plugins: [
						"removeDimensions",
						"removeScriptElement",
						"removeStyleElement",
					],
				}).data
			),
		}),
	],
});
