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
            routerClient.getRoute(routerClient.routeNames.PRIVATE_ACCOUNT_SETTINGS_BASIC),
            routerClient.getRoute(routerClient.routeNames.PRIVATE_ACCOUNT_SETTINGS_NOTIFICATIONS),
            routerClient.getRoute(routerClient.routeNames.PRIVATE_ACCOUNT_SETTINGS_REFERRAL),
            routerClient.getRoute(routerClient.routeNames.PRIVATE_ACCOUNT_SETTINGS_SECURITY),
        ]"
    />
</ui-page>
</template>
