<script lang="ts" setup>
interface Slots {
    default: () => any
}

defineSlots<Slots>()
</script>

<template>
<widget-provider-config>
    <slot />
</widget-provider-config>
</template>
