import type { RouteExternal, RouteLink } from "$lib/enums"
import type { SvelteComponent } from "svelte"

export interface ILink {
    url: RouteExternal | RouteLink
}

export type ILabelLink = ILink & {
    label: string
}

export type IIconLink = ILink & {
    Icon: typeof SvelteComponent
}
