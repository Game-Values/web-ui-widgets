<script lang="ts" setup>
let { storeClient } = useClients()

let { games } = storeToRefs(storeClient.gamesStore)
</script>

<template>
<ui-layout-row :gap="Array(2).fill(remToPx(useThemeSpace(10), false))">
    <ui-layout-col
        v-for="[firstChar, gamesCollection] in games.groupedGames"
        :key="firstChar"
    >
        <ui-layout-space
            :size="remToPx(useThemeSpace(7), false)"
            vertical
        >
            <ui-typography-title :level="3">
                {{ firstChar }}
            </ui-typography-title>

            <games-grid :games="gamesCollection" />
        </ui-layout-space>
    </ui-layout-col>
</ui-layout-row>
</template>
