<script lang="ts" setup>
defineProps<{
    label: string
    value: number | string
}>()
</script>

<template>
<label>
    <slot />

    <span
        :class="{ float: Boolean(value) }"
    >
        {{ label }}
    </span>
</label>
</template>

<style lang="sass" scoped>
label
    @apply relative
    @apply w-full

    > span
        @apply absolute z-10 top-6 left-4
        @apply px-2
        @apply inline-block
        @apply bg-[#383838]
        @apply rounded-1
        @apply opacity-60
        @apply cursor-text
        @apply transition-all

        &.float
            @apply -top-4
            @apply text-sm
            @apply opacity-100
            @apply cursor-pointer

    :deep(.vxp-input .vxp-input__control::-webkit-input-placeholder),
    :deep(.vxp-number-input .vxp-number-input__control::-webkit-input-placeholder),
    :deep(.vxp-select .vxp-select__placeholder),
    :deep(.vxp-textarea .vxp-textarea__control::-webkit-input-placeholder)
        @apply opacity-0

    :deep(.vxp-input--focused + span),
    :deep(.vxp-number-input--focused + span),
    :deep(.vxp-select:focus-within + span),
    :deep(.vxp-textarea--focused + span)
        @apply -top-4
        @apply text-sm
        @apply opacity-100
        @apply cursor-pointer
</style>
