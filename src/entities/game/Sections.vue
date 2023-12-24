<script lang="ts" setup>
let { routerClient, storeClient } = useClients()

// todo: model or collection
let { gameSectionsRaw } = storeToRefs(storeClient.gameStore)

let currentGameSection = computed((): string => routerClient.getRouteParam('gameSection'))
</script>

<template>
<v-space>
    <ui-link-tag
        v-for="(_, gameSection, i) in gameSectionsRaw"
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
