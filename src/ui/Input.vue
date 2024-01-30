<script lang="ts" setup>
defineProps<{
    label: string
}>()
</script>

<template>
<v-input v-bind="$props">
    <template #suffix>
        {{ label }}
    </template>
</v-input>
</template>

<style lang="sass" scoped>
.vxp-input
    @apply relative

    :deep(.vxp-input__control)
        @apply absolute top-0 left-[var(--vxp-input-h-padding)]
        @apply w-full

        &::-webkit-input-placeholder
            @apply opacity-0
            @apply transition-opacity

        &:focus::-webkit-input-placeholder
            @apply opacity-100

        &:placeholder-shown + .vxp-input__suffix-wrapper
            @apply text-ellipsis text-nowrap
            @apply cursor-text
            @apply origin-left

        &:not(:placeholder-shown) + .vxp-input__suffix-wrapper,
        &:focus + .vxp-input__suffix-wrapper
            @apply cursor-pointer
            @apply opacity-100
            @apply -translate-y-9

        + .vxp-input__suffix-wrapper
            @apply px-2
            @apply bg-[#383838]
            @apply rounded-1
            @apply opacity-60
            @apply -translate-x-2
            @apply transition-opacity transition-transform

            .vxp-input__suffix
                @apply m-0
</style>
