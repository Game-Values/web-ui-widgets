<script lang="ts">
import { debounce } from "lodash-es"
import { onDestroy, onMount } from "svelte"

import { observeElement } from "$lib/helpers"

interface $$Props {
    class?: string
}

interface $$Slots {
    default: NonNullable<unknown>
}

let className: string = ""

let container: HTMLUListElement | undefined

let observer: MutationObserver | undefined

onMount(() => {
    if (container)
        observer = observeElement(container, debounce((element: HTMLElement): void => (
            element.scrollTo({ top: element.scrollHeight })
        )), { childList: true })
})

onDestroy((): void => observer?.disconnect())

export {
    className as class,
}
</script>

<ul
    bind:this={container}
    class="
        card card-normal
        glass glass-sm
        p-4
        h-full
        bg-black/[0.06]
        rounded-b-2xl
        overflow-x-hidden
        overflow-y-auto
        shadow-none
        {className}
    "
>
    <slot />
</ul>
