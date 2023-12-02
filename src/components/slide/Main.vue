<script lang="ts" setup>
import type { Callable, ScopedProps } from "~/types"
import type { ComputedRef, VNode } from "vue"

import { Breakpoint } from "~~/common/enums"

defineProps<{
    action?: {
        handler: Callable
        label: string
    }
    src: string
    text?: string
    title?: string
}>()

defineSlots<{
    default: (scopedProps: ScopedProps) => VNode
    title: (scopedProps: ScopedProps) => VNode
}>()

let breakpoint = useBreakpoint()

let slideHeight: ComputedRef<number> = computed((): number => (
    useGet({
        [Breakpoint.LG]: 352,
        [Breakpoint.MD]: 352,
        [Breakpoint.SM]: 430,
        [Breakpoint.XS]: 540,
    }, getRef(breakpoint))
))

let titleLevel: ComputedRef<number> = computed((): number => (
    useGet({
        [Breakpoint.LG]: 1,
        [Breakpoint.MD]: 3,
        [Breakpoint.SM]: 2,
        [Breakpoint.XS]: 3,
    }, getRef(breakpoint))
))
</script>

<template>
<ui-overlay
    :height="slideHeight"
    :style="{
        backgroundImage: `url(${src})`,
    }"
    class="
        bg-no-repeat
        bg-cover
        bg-right
    "
>
    <template #overlay>
        <slot>
            <v-space
                class="
                    fit
                    md:(bottom-0 p-12 max-w-1/2)
                    xs:(bottom-18 p-7 max-w-full)
                "
                justify="center"
                size="large"
                vertical
            >
                <v-title
                    v-if="title || $slots.title"
                    :level="titleLevel"
                >
                    <slot name="title">
                        {{ title }}
                    </slot>
                </v-title>

                <v-text
                    v-if="text"
                    class="
                        md:(block)
                        sm:(hidden)
                    "
                >
                    {{ text }}
                </v-text>

                <v-button
                    v-if="action"
                    block
                    class="sm:(max-w-18rem)"
                    type="primary"
                    @click="action.handler()"
                >
                    {{ action.label }}
                </v-button>
            </v-space>
        </slot>
    </template>
</ui-overlay>
</template>
