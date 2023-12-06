<script lang="ts" setup>
import { RouteLayout } from "~/enums"

definePageMeta({
    layout: RouteLayout.ACCOUNT,
})

let { routerClient } = useClients()
</script>

<template>
<ui-page>
    <app-router-tabs
        :routes="[
            routerClient.getRoute(routerClient.routeNames.PRIVATE_ACCOUNT_BALANCE),
            routerClient.getRoute(routerClient.routeNames.PRIVATE_ACCOUNT_SALES),
            routerClient.getRoute(routerClient.routeNames.PRIVATE_ACCOUNT_PURCHASES),
            routerClient.getRoute(routerClient.routeNames.PRIVATE_ACCOUNT_ITEMS),
            routerClient.getRoute(routerClient.routeNames.PRIVATE_ACCOUNT_REVIEWS),
            routerClient.getRoute(routerClient.routeNames.PRIVATE_ACCOUNT_SUBSCRIPTION),
        ]"
    />
</ui-page>
</template>
