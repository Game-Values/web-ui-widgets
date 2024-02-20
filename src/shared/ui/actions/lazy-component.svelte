<script lang="ts">
import type { ILazyComponentConstructor, ILazyComponentSrc, INullable } from "$types"
import type { ComponentConstructorOptions, SvelteComponent } from "svelte"

import { onDestroy, onMount, tick } from "svelte"

import { lazyComponent } from "$lib/helpers"

interface $$Props {
    props?: ComponentConstructorOptions["props"]
    src: ILazyComponentSrc
}

let component: INullable<SvelteComponent> = null

let props: ComponentConstructorOptions["props"] | undefined = undefined

let src: ILazyComponentSrc

let target: INullable<Document | Element | ShadowRoot> = null

onMount(load)

onDestroy(cleanup)

async function cleanup(): Promise<void> {
    if (!component)
        return

    component.$destroy()
    component = null

    await tick()
}

async function load(): Promise<void> {
    await cleanup()

    if (!target)
        return

    let ComponentConstructor: ILazyComponentConstructor = await lazyComponent(src)
    component = new ComponentConstructor({ props, target })
}

export {
    props,
    src,
}
</script>

<div
    bind:this={target}
    class="contents"
/>
