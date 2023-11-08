<script lang="ts" setup>
interface Slots {
    default: () => any
}

defineSlots<Slots>()
</script>

<template>
<widget-provider-setup>
    <widget-provider-config>
        <slot />
    </widget-provider-config>
</widget-provider-setup>
</template>
