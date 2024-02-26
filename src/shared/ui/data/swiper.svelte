<script context="module" lang="ts">
let swiperRegisterPromise: Promise<void> = (
    import("swiper/element/bundle")
        .then(({ register }): void => register())
)
</script>

<script lang="ts">
import type { SwiperContainer } from "swiper/element"
import type { SwiperOptions } from "swiper/types"

import { onDestroy, onMount } from "svelte"

import { wrapElement } from "$lib/utils"

interface $$Props {
    class?: string
    options?: SwiperOptions
}

interface $$Slots {
    default: NonNullable<unknown>
}

let className: string = ""

let options: SwiperOptions = Object.create(null)

let container: SwiperContainer | undefined

onMount(async (): Promise<void> => {
    if (container)
        Object.assign(container, options)

    swiperRegisterPromise.then((): void => container?.initialize())
})

onDestroy((): void => container?.swiper.destroy())

function swiper(node: Element): void {
    Array
        .from(node.children)
        .forEach((child: Element): void => (
            wrapElement(child, document.createElement("swiper-slide"))
        ))
}

export {
    className as class,
    options,
}
</script>

<svelte:element
    this="swiper-container"
    bind:this={container}
    class={className}
    init="false"
    use:swiper
>
    <slot />
</svelte:element>
