<script lang="ts" setup>
interface Slots {
    default: () => any
}

defineSlots<Slots>()
</script>

<template>
<div class="content">
    <slot />
</div>
</template>
