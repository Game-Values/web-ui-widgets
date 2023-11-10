<script inherit-attrs="false" lang="ts" setup>
import type { ImageOptions, ImageSizes } from "@nuxt/image"
import type { ImageProps } from "vexip-ui"

import { Breakpoint } from "~/enums"

interface Props extends ImageProps {
    src: string
}

let props = withDefaults(defineProps<Props>(), (
    useUiProps<ImageProps>({
        width: "100%",
        height: "100%",
        lazy: true,
        skeleton: true,
    })
))

let attrs = useAttrs()
let image = useImage()

let srcset = computed((): ImageSizes => {
    let options: ImageOptions = {
        modifiers: {
            fit: "cover",
            format: "webp",
            quality: 70,
        },
        sizes: `
            ${Breakpoint.LG}:100vw
            ${Breakpoint.MD}:100vw
            ${Breakpoint.SM}:100vw
            ${Breakpoint.XS}:100vw
        `,
    }

    if (isNumber(props.width))
        useMerge(options.modifiers!, usePick(props, "width"))

    if (isNumber(props.height))
        useMerge(options.modifiers!, usePick(props, "height"))

    return image.getSizes(props.src, options)
})

let imageProps = computed((): Partial<Props> => (
    useMerge({ ...attrs, ...props }, getRef(srcset))
))
</script>

<template>
<lazy-client-only>
    <v-image v-bind="imageProps" />

    <template #fallback>
        <ui-effect-skeleton
            v-bind="attrs"
            :height="width"
            :width="width"
            activated
            image
        />
    </template>
</lazy-client-only>
</template>
