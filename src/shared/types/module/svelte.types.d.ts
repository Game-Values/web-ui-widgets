declare module "svelte/internal" {
    import type { SvelteComponent } from "svelte"

    export let current_component: SvelteComponent

    export function get_current_component(): SvelteComponent
}
