<script setup lang="ts">
import type { RouteName } from "~/enums"
import type { RouteLocation } from "vue-router"

import { default as hash } from "hash-sum"

let props = defineProps<{
    id?: RouteName,
    name?: string
    pageKey?: (route: RouteLocation) => string
}>()

let { routerClient } = useClients()

let pageId = computed((): string => (
    useGet(props, "id", routerClient.route.name)
))

let pageKey = computed((): string => (
    useGet(props, "pageKey", (
        (route: RouteLocation): string => hash(route.fullPath)
    ))
))
</script>

<template>
<keep-alive>
    <nuxt-page
        :id="pageId"
        :page-key="pageKey"
    />
</keep-alive>
</template>
