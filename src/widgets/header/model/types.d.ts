import type { RouteLink } from "$lib"
import type { SvelteComponent } from "svelte"

export type HeaderLink = {
    Icon?: typeof SvelteComponent
    label?: string
    url: RouteLink
}
