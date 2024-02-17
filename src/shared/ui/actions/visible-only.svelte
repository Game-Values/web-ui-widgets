<script lang="ts">
import type { IKeyOf } from "$types"
import type { SvelteHTMLElements } from "svelte/elements"

import { onDestroy, onMount } from "svelte"

import { onElementVisible } from "$lib/helpers"
import { LazyPromise } from "$ui/actions"

interface $$Props {
    class?: string
    tag?: IKeyOf<SvelteHTMLElements>
}

interface $$Slots {
    default: NonNullable<unknown>
}

let className: string = ""

let container: HTMLElement | undefined

let observer: IntersectionObserver | undefined

let tag: IKeyOf<SvelteHTMLElements> = "div"

onMount((): void => {
    if (container)
        observer = onElementVisible(container, (): void => {
            container!.style.display = "contents"
            observer?.disconnect()
        })
})

onDestroy((): void => observer?.disconnect())

export {
    className as class,
    tag,
}
</script>

<svelte:element
    this={tag}
    bind:this={container}
    class={className}
>
    <slot />
</svelte:element>
