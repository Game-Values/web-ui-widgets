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
        size="small"
        src="/images/user-fake-avatar.png"
    />
</v-badge>
</template>

<style lang="sass" scoped>
:deep(.vxp-badge__content)
    top: calc(theme("height.avatar-small") - theme("spacing.2"))
    right: calc(100% - (theme("width.avatar-small") - theme("spacing.1")))

    @apply outline outline-2 outline-grey-dark
</style>
