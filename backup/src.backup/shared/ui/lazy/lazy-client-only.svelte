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

<script lang="ts">
import type { TCallableLazy } from "~/shared/lib"

import { omit } from "lodash-es"
import { onDestroy, onMount } from "svelte"

import { onElementVisible } from "~/shared/lib"

let component: TCallableLazy<ConstructorOfATypedSvelteComponent>

let container: HTMLDivElement

let observer: IntersectionObserver

let promise: Promise<ConstructorOfATypedSvelteComponent>

onMount((): void => {
    observer = onElementVisible(container, (): void => {
        promise = component()
    })
})

onDestroy((): void => observer?.disconnect())

export {
    component
}
</script>
