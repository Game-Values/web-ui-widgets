import type { Module } from "~/shared/model"
import type { SvelteComponent } from "svelte"

export async function asyncComponent(filepath: string): Promise<SvelteComponent> {
    let module: Module<SvelteComponent> = await import(/* @vite-ignore */ filepath)

    return module.default
}
