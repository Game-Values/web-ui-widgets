<script lang="ts" setup>
let { storeClient } = useClients()

let { games } = storeToRefs(storeClient.gamesStore)
</script>

<template>
<ui-layout-grid>
    <ui-layout-cell
        v-for="[firstChar, gamesCollection] in games.groupedGames"
        :key="firstChar"
    >
        <ui-typography-title :level="3">
            {{ firstChar }}
        </ui-typography-title>

        <games-grid :games="gamesCollection" />
    </ui-layout-cell>
</ui-layout-grid>
</template>

<style lang="sass" scoped>

</style>

<i18n lang="yaml">

</i18n>
