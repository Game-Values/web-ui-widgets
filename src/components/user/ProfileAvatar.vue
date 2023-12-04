<script lang="ts" setup>
defineProps<{
    premium?: boolean
}>()
</script>

<template>
<v-avatar
    :class="{
        'vxp-avatar--premium': premium,
    }"
    size="large"
    src="/images/user-fake-avatar.png"
/>
</template>

<style lang="sass" scoped>
.vxp-avatar--premium
    // todo: mv to @apply
    border: theme("spacing.2") solid transparent
    border-radius: 50%

    // todo: mv to sass colors
    background-image: linear-gradient(to bottom, #3DFFF3, #3DFFF3), linear-gradient(to bottom, #3DFFF3, theme("colors.primary"))
    background-clip: padding-box, border-box
    background-origin: padding-box, border-box
</style>
