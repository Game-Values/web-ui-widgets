<script lang="ts">
import { onDestroy, onMount } from "svelte"

import { onElementVisible } from "$lib/helpers"
import { LazyPromise } from "$ui/effect"

let container: HTMLDivElement

let promise: Promise<IntersectionObserver>

onMount((): void => {
    promise = onElementVisible(container)
})

onDestroy((): void => {
    promise.then((observer: IntersectionObserver): void => (
        observer.disconnect()
    ))
})
</script>

<div bind:this={container}>
    <LazyPromise {promise}>
        <svelte:fragment slot="resolve">
            <slot />
        </svelte:fragment>
    </LazyPromise>
</div>
