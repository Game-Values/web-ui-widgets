<script lang="ts">
import type { ICallableLazy, INullable, ISvelteComponentConstructor } from "$types"
import type { ComponentConstructorOptions, SvelteComponent } from "svelte"

import { onDestroy, onMount, tick } from "svelte"

let component: INullable<SvelteComponent>

let provider: ICallableLazy<ISvelteComponentConstructor>

let options: Omit<ComponentConstructorOptions, "target"> = Object.create(null)

let target: INullable<Document | Element | ShadowRoot>

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

    let ComponentConstructor: ISvelteComponentConstructor = await provider()

    component = new ComponentConstructor({
        props: options.props || {},
        target: target!,
    });
}

export {
    options,
    provider,
}
</script>

<div
    bind:this={target}
    class="max-w-full"
/>
