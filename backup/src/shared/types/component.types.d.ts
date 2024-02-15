import type { RouteExternal, RouteLink } from "$lib"
import type { SvelteComponent } from "svelte"

export interface ILink {
    title?: string
    url: RouteExternal | RouteLink
}

export type ILabelLink = ILink & {
    label: string
}

export type IIconLink = ILink & {
    Icon: typeof SvelteComponent
}
