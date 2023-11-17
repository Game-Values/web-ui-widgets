<script lang="ts" setup>
// todo: from api

useI18n()

let hasOnlinePlayers = ref(true)
</script>

<template>
<ui-layout-space align="center">
    <ui-form-switch v-model:value="hasOnlinePlayers" />

    <ui-typography-text :size="useFirst(useTheme('fontSize.lg'))">
        <i18n-t keypath="Online Players Only" />
    </ui-typography-text>
</ui-layout-space>
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
