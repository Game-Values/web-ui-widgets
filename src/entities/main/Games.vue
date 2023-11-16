<script lang="ts" setup>
let { storeClient } = useClients()

let { games } = storeToRefs(storeClient.gamesStore)

let { lg } = useBreakpoints()

let rowGap = computed((): number[] => {
    let horizontalGap = getRef(lg) ? remToNumber(useTheme("spacing.9")) : 0
    let verticalGap = remToNumber(useTheme("spacing.12"))

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
            size="large"
            class="flex-1"
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
