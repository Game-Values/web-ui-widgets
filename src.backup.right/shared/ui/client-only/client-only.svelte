<script lang="ts">
import type { TCallableLazy } from "~/shared/model"

import { omit } from "lodash-es"
import { onDestroy, onMount } from "svelte"

import { onElementVisible } from "$lib"

let component: TCallableLazy<ConstructorOfATypedSvelteComponent>

let container: HTMLDivElement | undefined

let observer: IntersectionObserver | undefined

let promise: Promise<ConstructorOfATypedSvelteComponent> | undefined

let visible: boolean = false

onMount(() => {
    if (container)
        if (visible)
            observer = onElementVisible(container, (): void => {
                promise = component()
            })
        else
            promise = component()
})

onDestroy(() => observer?.disconnect())

export {
    component,
}
</script>

<div bind:this={container}>
    {#if promise}
        {#await promise}
            <slot name="fallback" />
        {:then Component}
            <svelte:component
                this={Component}
                {...omit($$props, "component")}
            />
        {/await}
    {:else}
        <slot name="fallback" />
    {/if}
</div>
