<script lang="ts" setup>
let { routerClient, storeClient } = useClients()

// todo: model or collection
let { gameSectionsRaw } = storeToRefs(storeClient.gameStore)
</script>

<template>
<v-space>
    <ui-link-tag
        v-for="(_, gameSection) in gameSectionsRaw"
        :key="gameSection"
        :to="
            routerClient.getRoute(routerClient.routeNames.GAME, {
                params: {
                    gameSection,
                },
            })
        "
        :type="(
            gameSection === routerClient.getRouteParam('gameSection')
                ? 'primary'
                : 'default'
        )"
        circle
    >
        <v-space>
            <v-text>
                {{ gameSection }}
            </v-text>

            <v-text
                class="
                    bg-secondary
                    px-2
                    rounded-12
                "
            >
                {{ storeClient.facetsStore.getFacetsCount(gameSection) }}
            </v-text>
        </v-space>
    </ui-link-tag>
</v-space>
</template>
