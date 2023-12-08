<script lang="ts" setup>
import type { ScopedProps } from "~/types"
import type { VNode } from "vue"

defineProps<{
    title: string
    type: (
        "error" |
        "info" |
        "primary" |
        "success" |
        "warning"
    )
}>()

defineSlots<{
    default: (scopedProps: ScopedProps) => VNode
}>()
</script>

<template>
<v-highlight
    :content="`
        ${title} ${useGet(useFirst($slots.default?.()), 'children')}
    `"
    :key-words="[
        title,
    ]"
>
    <template #light="{ text }">
        <v-title
            :level="6"
            :type="type"
        >
            {{ text }}:
        </v-title>
    </template>

    <template #default="{ text }">
        <v-text disabled>
            {{ text }}
        </v-text>
    </template>
</v-highlight>
</template>

<style lang="sass" scoped>
.vxp-title
    @apply w-auto
    @apply inline-flex
</style>
