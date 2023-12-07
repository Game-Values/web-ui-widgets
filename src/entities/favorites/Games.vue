<script lang="ts" setup>
import type { Game, Games } from "~/dto"

let { storeClient } = useClients()

let { games } = storeToRefs(storeClient.gamesStore)
let { user } = storeToRefs(storeClient.userMeStore)

let { lg } = useBreakpoints()

let rowGap = computed((): number[] => {
    let horizontalGap = getRef(lg) ? remToNumber(useTheme("spacing.9")) : 0
    let verticalGap = remToNumber(useTheme("spacing.12"))

    return [
        horizontalGap,
        verticalGap,
    ]
})

let favoritesGames = computed((): Map<string, Games> => {
    let gamesMap: Map<string, Games> = new Map()
    let likedIds: string[] = useGet(getRef(user, "liked_games"), "likedIds", [])

    for (let [firstChar, gamesCollection] of getRef(games, "groupedGames")) {
        let collection: Games = useFilter(gamesCollection, (
            (game: Game): boolean => likedIds.includes(game.id)
        ))

        if (collection.length)
            gamesMap.set(firstChar, collection)
    }

    return gamesMap
})
</script>

<template>
<v-row :gap="rowGap">
    <v-column
        v-for="[firstChar, gamesCollection] in favoritesGames"
        :key="firstChar"
    >
        <v-space
            size="large"
            vertical
        >
            <v-title :level="3">
                {{ firstChar }}
            </v-title>

            <game-grid
                :games="
                    gamesCollection.filter((game: Game) => (
                        user.liked_games.likedIds.includes(game.id)
                    ))
                "
                :liked-games="user.liked_games"
            />
        </v-space>
    </v-column>
</v-row>
</template>
