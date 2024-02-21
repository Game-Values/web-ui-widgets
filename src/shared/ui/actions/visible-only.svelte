<script lang="ts">
import type { IKeyOf } from "$types"
import type { SvelteHTMLElements } from "svelte/elements"

import { onDestroy, onMount } from "svelte"

import { onElementVisible } from "$lib/helpers"

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

let visible: boolean = false

onMount((): void => {
    if (container)
        observer = onElementVisible(container, (): void => {
            visible = true
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
    class:contents={visible}
>
    {#if visible}
        <slot />
    {/if}
</svelte:element>
