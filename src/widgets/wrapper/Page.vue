<script lang="ts" setup>
interface Slots {
    default: () => any
}

defineSlots<Slots>()
</script>

<template>
<section
    :id="$route.name as string"
>
    <slot />
</section>
</template>
