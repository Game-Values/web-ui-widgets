import type { SvelteComponent } from "svelte"
import type { SvelteHTMLElements } from "svelte/elements"

export type ICompanyProduct = {
    icon: typeof SvelteComponent<SvelteHTMLElements["svg"]>
    label: string
}

export type ICompanyValue = ICompanyProduct & {
    description: string
}

export type ICompanyVersion = {
    date: string
    name: string
    version: string
}
