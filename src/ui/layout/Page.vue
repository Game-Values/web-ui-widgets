<script lang="ts" setup>
interface Slots {
    default: () => any
}

defineSlots<Slots>()
</script>

<template>
<section class="[&>*]:py-page">
    <slot />
</section>
</template>
