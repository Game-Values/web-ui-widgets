<script inherit-attrs="false" lang="ts" setup>
import type { ScopedProps } from "~/types"
// import type { ImageOptions, ImageSizes } from "@nuxt/image"
import type { ImageProps } from "vexip-ui"
import type { VNode } from "vue"

// import { Breakpoint } from "~/enums"

withDefaults(defineProps<ImageProps>(), {
    height: "100%",
    lazy: true,
    skeleton: true,
    width: "100%",
})

defineSlots<{
    fallback: (scopedProps: ScopedProps) => VNode
}>()

// let attrs = useAttrs()
// let image = useImage()

// let srcset = computed((): ImageSizes => {
//     let options: ImageOptions = {
//         modifiers: {
//             fit: "cover",
//             format: "webp",
//             quality: 70,
//         },
//         sizes: `
//             ${Breakpoint.LG}:100vw
//             ${Breakpoint.MD}:100vw
//             ${Breakpoint.SM}:100vw
//             ${Breakpoint.XS}:100vw
//         `,
//     }

//     if (isNumber(props.width))
//         useMerge(options.modifiers!, usePick(props, "width"))

//     if (isNumber(props.height))
//         useMerge(options.modifiers!, usePick(props, "height"))

//     return image.getSizes(props.src, options)
// })

// let imageProps = computed((): ImageProps => (
//     useMerge({ ...attrs, ...props }, getRef(srcset))
// ))
</script>

<template>
<client-only>
    <v-image
        v-bind="{
            ...$attrs,
            ...$props,
        }"
    />

    <template
        v-if="skeleton"
        #fallback
    >
        <v-skeleton
            v-bind="$attrs"
            :height="height"
            :width="width"
            activated
            image
        />
    </template>
</client-only>
</template>
