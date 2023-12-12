<script lang="ts" setup>
definePageMeta({
    seo: {
        title: "Storefront",
    },
})

let { storeClient } = useClients()

let { games } = storeToRefs(storeClient.gamesStore)
let { items } = storeToRefs(storeClient.itemsStore)
</script>

<template>
<game-collapse>
    <game-collapse-lot
        v-for="[gameId, lots] in items.groupedLots"
        :key="gameId"
        :game="games.getById(gameId)"
        :lots="lots.lotsTableData"
    />
</game-collapse>
</template>
