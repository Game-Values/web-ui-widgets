import type { SvelteComponent } from "svelte"
import type { SvelteHTMLElements } from "svelte/elements"

export interface ILotStats {
    count: number
    icon: typeof SvelteComponent<SvelteHTMLElements["svg"]>
    label: string
}
