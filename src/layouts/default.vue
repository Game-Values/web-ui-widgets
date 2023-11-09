<script lang="ts" setup>
interface Slots {
    default: () => any
}

defineSlots<Slots>()
</script>

<template>
<ui-layout-app>
    <template #header>
        <ui-layout-content>
            <layouts-home-navigation />
        </ui-layout-content>
    </template>

    <template #main>
        <slot />
    </template>

    <template #footer>
        <layouts-default-footer />
    </template>
</ui-layout-app>
</template>
