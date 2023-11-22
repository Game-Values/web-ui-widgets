<script setup lang="ts">
import type { ScopedProps } from "~/types"
import type { VNode } from "vue"

defineProps<{
    modelValue: string
    tabs: string[],
}>()

defineEmits<{
    (e: "update:model-value", modelValue: string): void
}>()

defineSlots<{
    tab: (scopedProps: ScopedProps<{
        tab: string
    }>) => VNode
}>()
</script>

<template>
<v-space
    size="large"
    vertical
>
    <v-button-group>
        <v-button
            v-for="tab in tabs"
            :key="tab"
            :type="tab === modelValue ? 'primary' : 'default'"
            size="small"
            @click="$emit('update:model-value', tab)"
        >
            {{ tab }}
        </v-button>
    </v-button-group>

    <slot
        :tab="modelValue"
        name="tab"
    />
</v-space>
</template>

<style lang="sass" scoped>
.vxp-button-vars
    --vxp-button-b-color: transparent

.vxp-button-group
    @apply w-full

    > .vxp-button
        @apply flex-1

        &:not(&--primary)
            background-color: theme("colors.white-02")
</style>
