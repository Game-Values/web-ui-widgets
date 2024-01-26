<script lang="ts" setup>
// todo: from api

useI18n()

let hasPremiumPlayers = ref(true)
</script>

<template>
<v-space align="center">
    <v-switch v-model:value="hasPremiumPlayers" />

    <v-text :size="useFirst(useTheme('fontSize.lg'))">
        Premium users only
    </v-text>
</v-space>
</template>

<style lang="sass" scoped>
:deep(.vxp-switch--open)
    --vxp-switch-signal-bg-color: theme("colors.success")
</style>
