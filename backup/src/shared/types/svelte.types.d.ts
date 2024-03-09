import type { ComponentConstructorOptions, SvelteComponent } from "svelte"

export interface ISvelteComponentConstructor {
    new (props: ComponentConstructorOptions): SvelteComponent
}
