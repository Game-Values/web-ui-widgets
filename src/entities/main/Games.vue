<script lang="ts" setup>
let { storeClient } = useClients()

let { games } = storeToRefs(storeClient.gamesStore)
</script>

<template>
<ui-layout-row :gap="Array(2).fill(remToNumber(useThemeSpace(10)))">
    <ui-layout-col
        v-for="[firstChar, gamesCollection] in games.groupedGames"
        :key="firstChar"
    >
        <ui-layout-space
            :size="remToNumber(useThemeSpace(7))"
            vertical
        >
            <ui-typography-title :level="3">
                {{ firstChar }}
            </ui-typography-title>

            <game-grid :games="gamesCollection" />
        </ui-layout-space>
    </ui-layout-col>
</ui-layout-row>
</template>
