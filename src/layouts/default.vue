<script lang="ts" setup>
interface Slots {
    default: () => any
}

defineSlots<Slots>()
</script>

<template>
<widget-layout-app>
    <slot />
</widget-layout-app>
</template>
