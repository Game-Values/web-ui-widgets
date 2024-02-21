<script context="module" lang="ts">
import type { IEnhanced, IEnhancedImages, IEnhancedImageSize } from "$types"

const ENHANCED_IMAGES: IEnhancedImages = {
    lg: import.meta.glob<IEnhanced>("~/app/assets/images/**/*.png", {
        query: {
            enhanced: true,
            fit: "cover",
            format: "webp",
            normalize: true,
            picture: true,
            quality: 100,
            sizes: "(min-width: 1920px) 2880px, (min-width: 1080px) 1620px, (min-width: 768px) 1152px, (min-width: 320px) 480px",
            srcset: true,
            w: "480;1152;1620;2880",
        },
    }),

    md: Object.assign(import.meta.glob<IEnhanced>("~/app/assets/**/*.svg"), (
        import.meta.glob<IEnhanced>("~/app/assets/**/*.png", {
            query: {
                enhanced: true,
                fit: "cover",
                format: "webp",
                normalize: true,
                picture: true,
                quality: 75,
                sizes: "(min-width: 320px) 480px",
                srcset: true,
                w: "480",
            },
        })
    )),

    sm: import.meta.glob<IEnhanced>("~/app/assets/images/**/*.png", {
        query: {
            enhanced: true,
            fit: "cover",
            format: "webp",
            normalize: true,
            picture: true,
            quality: 50,
            sizes: "(min-width: 320px) 320px",
            srcset: true,
            w: "320",
        },
    }),

    xs: import.meta.glob<IEnhanced>("~/app/assets/images/**/*.png", {
        query: {
            enhanced: true,
            fit: "cover",
            format: "webp",
            normalize: true,
            picture: true,
            quality: 25,
            sizes: "(min-width: 320px) 160px",
            srcset: true,
            w: "160",
        },
    }),
}

const ENHANCED_IMAGES_SIZES: Record<IEnhancedImageSize, string> = {
    lg: "(min-width: 1920px) 2880px, (min-width: 1080px) 1620px, (min-width: 768px) 1152px, (min-width: 320px) 480px",
    md: "(min-width: 320px) 480px",
    sm: "(min-width: 320px) 320px",
    xs: "(min-width: 320px) 160px",
}
</script>

<script lang="ts">
import type { IEnhancedImageSrc } from "$types"
import type { HTMLImgAttributes } from "svelte/elements"

import { isString } from "lodash-es"

import { extractLazyModule } from "$lib/helpers"
import { LazyPromise, VisibleOnly } from "$ui/actions"

interface $$Props extends HTMLImgAttributes {
    class?: string
    size?: IEnhancedImageSize
    src: IEnhancedImageSrc
}

let alt: null | string | undefined = undefined

let className: string = ""

let lazy: boolean = true

let size: IEnhancedImageSize = "md"

let src: IEnhancedImageSrc

$: enhancedImagePromise = extractLazyModule<IEnhanced>(
    ENHANCED_IMAGES[size][`/src/app/assets/${src}`](),
)

export {
    alt,
    className as class,
    lazy,
    size,
    src,
}
</script>

<VisibleOnly>
    <LazyPromise
        promise={enhancedImagePromise}
        let:value={enhancedImage}
    >
        <picture class={className}>
            {#if isString(enhancedImage)}
                <img
                    {alt}
                    loading={lazy ? "lazy" : "eager"}
                    src={enhancedImage}
                />
            {:else}
                {#each Object.entries(enhancedImage.sources) as [type, srcset] (type)}
                    <source
                        sizes={ENHANCED_IMAGES_SIZES[size]}
                        {srcset}
                        type="image/{type}"
                    />
                {/each}

                <img
                    {alt}
                    height={enhancedImage.img.h}
                    loading={lazy ? "lazy" : "eager"}
                    src={enhancedImage.img.src}
                    width={enhancedImage.img.w}
                />
            {/if}
        </picture>
    </LazyPromise>
</VisibleOnly>

<style>
picture {
    @apply w-[var(--image-width,theme("width.full"))] h-[var(--image-height,theme("width.auto"))];
    @apply max-w-full max-h-full;
    @apply flex items-center justify-center;
}

picture img {
    @apply w-full h-full;
    @apply aspect-auto object-cover;
}
</style>
