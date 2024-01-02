<script lang="ts" setup>
// todo: from httpInstance

useI18n()

let hasOnlinePlayers = ref(true)
</script>

<template>
<v-space align="center">
    <v-switch v-model:value="hasOnlinePlayers" />

    <v-text :size="useFirst(useTheme('fontSize.lg'))">
        <i18n-t keypath="Online Players Only" />
    </v-text>
</v-space>
</template>

<style lang="sass" scoped>
:deep(.vxp-switch--open)
    --vxp-switch-signal-bg-color: theme("colors.success")
</style>

<i18n lang="yaml">
de:
    Online Players Only: Nur Online-Spieler
en:
    Online Players Only: Online Players Only
</i18n>
