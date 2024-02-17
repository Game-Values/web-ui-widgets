import type { KIT_ROUTES } from "$schema/routes"
import type { IKeyOf } from "$types"
import type { SvelteComponent } from "svelte"
import type { SvelteHTMLElements } from "svelte/elements"

export type IRoute = {
    url: IRouteUrl
}

export type IRouteParams = Partial<Record<keyof KIT_ROUTES["Params"], any>>

export type IRouteWithIcon = IRoute & { icon: typeof SvelteComponent<SvelteHTMLElements["svg"]> }

export type IRouteWithLabel = IRoute & { label: string }

export type IRouteUrl = IKeyOf<KIT_ROUTES["PAGES"]>
