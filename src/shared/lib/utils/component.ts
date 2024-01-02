import type { Module } from "~/shared/model"
import type { SvelteComponent } from "svelte"

export function asyncComponent(filepath: string): Promise<Module<SvelteComponent>> {
    return import(/* @vite-ignore */ filepath).then(module => module.default)
}
