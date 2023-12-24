<script lang="ts" setup>
let { routerClient, storeClient } = useClients()

let { facets } = storeToRefs(storeClient.facetsStore)
</script>

<template>
<v-space>
    <ui-link-tag
        v-for="(count, facet) in facets"
        :key="facet"
        :to="
            routerClient.getRoute(routerClient.routeNames.PUBLIC_GAME, {
                params: {
                    itemType: facet,
                },
            })
        "
        :type="(
            facet === routerClient.getRouteParam('itemType')
                ? 'primary'
                : 'default'
        )"
        circle
    >
        <v-space>
            <v-text>
                {{ facet }}
            </v-text>

            <v-text
                class="
                    bg-secondary
                    px-2
                    rounded-12
                "
            >
                {{ count }}
            </v-text>
        </v-space>
    </ui-link-tag>
</v-space>
</template>
