import type { ComponentConstructorOptions, SvelteComponent } from "svelte"

export type ILazyComponentConstructor = { new (props: ComponentConstructorOptions): SvelteComponent }

export type ILazyComponentSrc = `~/${string}.svelte`

export type ILazyModuleSrc = `~/${string}.ts`
