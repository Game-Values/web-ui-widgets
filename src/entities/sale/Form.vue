<script setup lang="ts">
import type { ItemType } from "~/enums"

let { routerClient, storeClient } = useClients()
let { gameController, itemController } = useControllers()

let { game } = storeToRefs(storeClient.gameStore)
let { games } = storeToRefs(storeClient.gamesStore)

async function handleSelectGame(gameId: string): Promise<void> {
    await Promise.all([
        gameController.fetchGame(gameId),
        routerClient.router.push(
            routerClient.getRoute(routerClient.routeNames.ACCOUNT_SALE, {
                query: {
                    gameId,
                    itemType: routerClient.getRouteQuery("itemType"),
                },
            }),
        ),
    ])
}

async function handleSelectItemType(itemType: ItemType): Promise<void> {
    await routerClient.router.push(
        routerClient.getRoute(routerClient.routeNames.ACCOUNT_SALE, {
            query: {
                gameId: routerClient.getRouteQuery("gameId"),
                itemType,
            },
        }),
    )
}
</script>

<template>
<v-form :model="storeClient.saleStore.saleRaw">
    <v-form-item
        label="Game"
        prop="gid"
    >
        <v-select
            :key-config="{
                label: 'name',
                value: 'id',
            }"
            :options="games.items"
            @select="handleSelectGame($event)"
        />
    </v-form-item>

    <template v-if="game.attributes">
        <v-form-item
            label="Item type"
            prop="attributes.type"
        >
            <v-select
                :key-config="{
                    label: 'name',
                    value: 'name',
                }"
                :options="game.attributes.sections.items"
                @select="handleSelectItemType($event)"
            />
        </v-form-item>

        <v-form-item
            label="Server"
            prop="attributes.server"
        >
            <v-select
                :options="game.attributes.servers"
            />
        </v-form-item>

        <v-form-item
            label="Item name"
            prop="name"
        >
            <v-input />
        </v-form-item>

        <v-form-item
            label="Item description"
            prop="attributes.description"
        >
            <v-textarea />
        </v-form-item>

        <v-form-item
            label="Item count"
            prop="attributes.count"
        >
            <v-number-input />
        </v-form-item>

        <v-form-item
            label="Item price"
            prop="attributes.price"
        >
            <v-number-input>
                <template #suffix>
                    $
                </template>
            </v-number-input>
        </v-form-item>

        <v-form-item>
            <v-form-submit
                block
                @submit="itemController.createItem()"
            >
                Sell
            </v-form-submit>
        </v-form-item>
    </template>
</v-form>
</template>
