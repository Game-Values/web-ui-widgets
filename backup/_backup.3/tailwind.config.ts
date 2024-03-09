import type { Config } from "tailwindcss";

import { join, resolve } from "node:path";

import { skeleton } from "@skeletonlabs/tw-plugin";
import { theme } from "./src/theme";

export default {
	darkMode: "class",

	content: [
		resolve("./src/**/*.{html,js,svelte,ts}"),
		join(require.resolve("@skeletonlabs/skeleton"), "../**/*.{html,js,svelte,ts}"),
	],

	theme: {
		extend: {},
	},

	plugins: [
		skeleton({
			themes: {
				custom: [theme],
			},
		}),
	],
} satisfies Config;
