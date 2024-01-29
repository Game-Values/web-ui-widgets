import type { SvelteComponent } from "svelte"
import type { SvelteHTMLElements } from "svelte/elements"

export interface ILotStat {
    count: number
    icon: typeof SvelteComponent<SvelteHTMLElements["svg"]>
    label: string
}
