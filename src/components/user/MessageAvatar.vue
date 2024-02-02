<script lang="ts" setup>
defineProps<{
    online?: boolean
}>()
</script>

<template>
<v-badge
    :is-dot="online"
    type="success"
>
    <v-avatar
        class="max-w-6rem max-h-6rem"
        size="large"
        src="/images/user-fake-avatar.png"
    />
</v-badge>
</template>

<style lang="sass" scoped>
:deep(.vxp-badge__content)
    top: calc(6rem - theme("spacing.2"))
    right: calc(100% - (6rem - theme("spacing.1")))

    @apply outline outline-2 outline-grey-dark
</style>
