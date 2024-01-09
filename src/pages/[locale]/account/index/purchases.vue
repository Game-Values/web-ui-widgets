<script lang="ts" setup>
import type { Order } from "~/dto"

definePageMeta({
    seo: {
        title: "Purchases",
    },
})

let { routerClient, storeClient } = useClients()
let { orderController } = useControllers()

let { userOrders } = storeToRefs(storeClient.userMeStore)

await orderController.fetchMeOrders()
</script>

<template>
<v-space
    size="large"
    vertical
>
    <v-title :level="3">
        Current Purchases
    </v-title>

    <v-table :data="userOrders.tableData">
        <v-table-column
            v-slot="{ row }: { row: Order }"
            id-key="id"
            name="#"
        >
            <ui-link
                :to="routerClient.getRoute(routerClient.routeNames.ORDER, {
                    params: {
                        orderId: row.id,
                    },
                })"
            >
                {{ row.id }}
            </ui-link>
        </v-table-column>

        <v-table-column
            v-slot="{ row }: { row: Order }"
            id-key="created"
            name="Date"
        >
            {{ formatDate(row.created, "MM.dd.yyyy k:m") }}
        </v-table-column>

        <v-table-column
            id-key="game_id"
            name="Game"
        />

        <v-table-column
            id-key="attributesAmount"
            name="Amount"
        />

        <v-table-column
            id-key="attributesPrice"
            name="Price"
        />
    </v-table>
</v-space>
</template>
