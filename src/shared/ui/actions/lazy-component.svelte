<script lang="ts">
import type { INullable, ISvelteComponentConstructor } from "$types"
import type { ComponentConstructorOptions, SvelteComponent } from "svelte"

import { onDestroy, onMount, tick } from "svelte"

import { asyncComponent } from "$lib/helpers"

interface $$Props {
    props?: ComponentConstructorOptions["props"] | undefined
    src: string
}

let component: INullable<SvelteComponent> = null

let props: ComponentConstructorOptions["props"] | undefined = undefined

let src: string

let target: INullable<Document | Element | ShadowRoot> = null

$: componentProvider = asyncComponent<ISvelteComponentConstructor>(src)

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

    let ComponentConstructor: ISvelteComponentConstructor = await componentProvider()
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
