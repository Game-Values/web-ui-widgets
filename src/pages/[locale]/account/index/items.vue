<script lang="ts" setup>
definePageMeta({
    seo: {
        title: "Items",
    },
})

let { routerClient, storeClient } = useClients()

let { games } = storeToRefs(storeClient.gamesStore)
let { items } = storeToRefs(storeClient.itemsStore)
</script>

<template>
<v-space
    size="large"
    vertical
>
    <v-title :level="3">
        <v-space
            align="center"
            justify="space-between"
        >
            <v-text>
                Lots
            </v-text>

            <ui-link-button
                :to="routerClient.getRoute(routerClient.routeNames.ACCOUNT_SELL)"
                type="primary"
            >
                Sell
            </ui-link-button>
        </v-space>
    </v-title>

    <user-lots
        :games="games"
        :items="items"
    />
</v-space>
</template>
