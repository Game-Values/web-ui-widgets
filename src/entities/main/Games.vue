<script lang="ts" setup>
let { storeClient } = useClients()

let { games } = storeToRefs(storeClient.gamesStore)

let { lg } = useBreakpoints()

let rowGap = computed((): number[] => {
    let horizontalGap = getRef(lg) ? remToNumber(useThemeSpace(9)) : 0
    let verticalGap = remToNumber(useThemeSpace(12))

    return [
        horizontalGap,
        verticalGap,
    ]
})
</script>

<template>
<ui-layout-row :gap="rowGap">
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

            <widget-game-grid :games="gamesCollection" />
        </ui-layout-space>
    </ui-layout-col>
</ui-layout-row>
</template>
