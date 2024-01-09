<script lang="ts" setup>
import { RouteMiddleware } from "~/enums"

definePageMeta({
    middleware: RouteMiddleware.AUTH,
})

let { routerClient, storeClient } = useClients()

if (!routerClient.getRouteQuery("order_id"))
    throw Error("missing <order_id>")

storeClient.orderStore.setOrderRaw({
    id: routerClient.getRouteQuery("order_id"),
})
</script>

<template>
<ui-page>
    <v-row>
        <v-column>
            <v-title :level="1">
                Messages
            </v-title>
        </v-column>

        <v-column
            :md="10"
            :xs="0"
        >
            <widget-chat-order />
        </v-column>
    </v-row>
</ui-page>
</template>
