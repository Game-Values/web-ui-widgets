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

let sizes: string | undefined = undefined

let src: string

$: enhancePromise = (
    asyncModule<IEnhanced>(
        sizes
            ? `~/app/assets/${src}?enhanced&imgSizes=${sizes}`
            : `~/app/assets/${src}?enhanced`,
    )
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
                class="
                    w-full h-full max-w-full max-h-full
                    aspect-auto
                    object-cover
                "
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
                class="
                    w-full h-full max-w-full max-h-full
                    aspect-auto
                    object-cover
                "
                {alt}
                height={value.img.h}
                loading={lazy ? "lazy" : "eager"}
                src={value.img.src}
                width={value.img.w}
            />
        {/if}
    </picture>
</LazyPromise>
