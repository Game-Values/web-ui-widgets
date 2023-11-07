<script lang="ts" setup>
interface Slots {
    default: () => any
}

defineSlots<Slots>()
</script>

<template>
<!-- fixme: without classes in layout -->
<ui-base-layout class="bg-gray-900 justify-center">
    <template #header>
        <layouts-home-navigation />
    </template>

    <template #main>
        <slot />
    </template>

    <template #footer>
        <layouts-default-footer />
    </template>
</ui-base-layout>
</template>
