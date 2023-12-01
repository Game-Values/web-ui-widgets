<script lang="ts" setup>
let { storeClient } = useClients()

let { games } = storeToRefs(storeClient.gamesStore)
let { me } = storeToRefs(storeClient.meStore)

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
<v-row :gap="rowGap">
    <v-column
        v-for="[firstChar, gamesCollection] in games.groupedGames"
        :key="firstChar"
    >
        <v-space
            size="large"
            vertical
        >
            <v-title :level="3">
                {{ firstChar }}
            </v-title>

            <game-grid :games="gamesCollection" />
        </v-space>
    </v-column>
</v-row>
</template>
