<script lang="ts">
import { isString } from "lodash-es"

import { asyncModule } from "$lib/helpers"
import { LazyPromise } from "$ui/actions"

interface $$Props {
    alt?: string
    class?: string
    lazy?: boolean
    sizes?: string
    src: string
}

type IEnhanced = {
    img: { h: number, src: string, w: number }
    sources: { avif: string, png: string, webp: string }
}

let alt: string = "enhanced-image"

let className: string = ""

let lazy: boolean = true

let sizes: string = "min(1920px, 100dvw)"

let src: string

$: enhancePromise = (
    asyncModule<IEnhanced>(`${src}?enhanced&imgSizes=${sizes}`)
)

export {
    alt,
    className as class,
    lazy,
    sizes,
    src,
}
</script>

<LazyPromise
    promise={enhancePromise}
    let:value
>
    <picture class={className}>
        {#if isString(value)}
            <img
                {alt}
                loading={lazy ? "lazy" : "eager"}
                src={value}
            />
        {:else}
            {#each Object.entries(value.sources) as [type, srcset] (type)}
                <source
                    {sizes}
                    {srcset}
                    type="image/{type}"
                />
            {/each}

            <img
                {alt}
                height={value.img.h}
                loading={lazy ? "lazy" : "eager"}
                src={value.img.src}
                width={value.img.w}
            />
        {/if}
    </picture>
</LazyPromise>

<style>
picture {
    @apply w-[var(--image-width,100%)] h-[var(--image-height,auto)];
    @apply max-w-full max-h-full;
}

picture img {
    @apply w-full h-full;
    @apply aspect-auto object-cover;
}
</style>
