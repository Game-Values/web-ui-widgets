<script setup>
// Define the props
defineProps({
    count: Number,
    muted: Boolean,
})
</script>

<template>
<ui-button-circle-ghost
    class="
        relative
        p-1
    "
>
    <span class="sr-only">View notifications</span>

    <ui-icon-bell-snooze
        v-if="muted"
        size="24"
    />

    <ui-icon-bell
        v-else
        size="24"
    />

    <!-- Conditionally render the badge if "count" is provided -->
    <span v-if="count !== undefined" class="absolute top-[-4px] right-[-4px]">

        <span v-if="muted === true" class="inline-block bg-gray-500 text-white rounded-full px-1 py-0.5 text-sm text-medium">
            {{ count }}
        </span>

        <span v-if="muted !== true" class="inline-block bg-red-500 text-white rounded-full px-1 py-0.5 text-sm text-medium">
            {{ count }}
        </span>

    </span>
</ui-button-circle-ghost>
</template>

<style lang="sass" scoped>
.vxp-button
    @apply border-0
    @apply hover:text-gray-500
    @apply focus:(outline-none ring-2 text-gray-500 ring-rose-500 ring-offset-2)
</style>
