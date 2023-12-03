<script lang="ts" setup>
// import { RouteName } from "~/enums"
//
// let { t: $t } = useI18n({
//     useScope: "global",
// })
//
// let { t } = useI18n({
//     useScope: "local",
// })

let { routerClient } = useClients()

// let routesI18n = computed((): Record<RouteName, string> => (
//     {
//         [RouteName.GAME]: t("Game"),
//         [RouteName.MAIN]: t("Homepage"),
//         [RouteName.GAME_ITEM_ORDER]: $t("template.Deal", routerClient.getRouteParams(RouteName.GAME_ITEM_ORDER)),
//     }
// ))
</script>

<template>
<v-breadcrumb :router="routerClient.router">
    <template #item="{ option }">
        {{ option.name }}
    </template>
</v-breadcrumb>
</template>

<style lang="sass" scoped>
.vxp-breadcrumb :deep(.vxp-breadcrumb__item:first-child .vxp-breadcrumb__label)
    @apply pl-0
</style>

<i18n lang="yaml">
de:
    Homepage: Startseite
    Game: Spiel
en:
    Homepage: Homepage
    Game: Game
</i18n>
