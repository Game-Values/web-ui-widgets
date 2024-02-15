import type { Handle } from "@sveltejs/kit";

export const handle: Handle = ({ event, resolve }) => (
	resolve(event, {
		transformPageChunk: ({ html }) => (
			html.replace(
				"%unocss-svelte-scoped.global%",
				"unocss_svelte_scoped_global_styles",
			)
		)
	})
)
