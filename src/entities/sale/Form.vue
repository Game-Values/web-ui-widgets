<script setup lang="ts">
import type { ItemType } from "~/enums"

import { RouteName } from "~/enums"

let { routerClient, storeClient } = useClients()
let { gameController, saleController } = useControllers()

let { game } = storeToRefs(storeClient.gameStore)
let { games } = storeToRefs(storeClient.gamesStore)
let { saleItem } = storeToRefs(storeClient.saleStore)

async function handleSelectGame(gameId: string): Promise<void> {
    await Promise.all([
        gameController.fetchGame(gameId),
        navigateTo(
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
    await navigateTo(
        routerClient.getRoute(routerClient.routeNames.ACCOUNT_SALE, {
            query: {
                gameId: routerClient.getRouteQuery("gameId"),
                itemType,
            },
        }),
    )
}

async function handleSaleItem(): Promise<void> {
    await saleController.createSaleItem()
    await navigateTo(
        routerClient.getRoute(routerClient.routeNames.GAME, {
            params: {
                gameId: useGet(getRef(saleItem), "gid"),
            },
        }),
    )
}

async function handleDeleteItem(): Promise<void> {
    await saleController.deleteSaleItem()
    await navigateTo(
        routerClient.getRoute(routerClient.routeNames.GAME, {
            params: {
                gameId: useGet(getRef(saleItem), "gid"),
            },
        }),
    )
}
</script>

<template>
<v-form
    :model="storeClient.saleStore.saleItemRaw"
    all-required
>
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
            <template v-if="routerClient.route.name === RouteName.ACCOUNT_SALE">
                <v-form-submit
                    block
                    @submit="handleSaleItem()"
                >
                    Sell
                </v-form-submit>
            </template>

            <template v-else>
                <v-space justify="space-between">
                    <v-form-submit
                        type="success"
                        @click="saleController.editSaleItem()"
                    >
                        Edit
                    </v-form-submit>

                    <v-form-reset
                        type="error"
                        @click="handleDeleteItem()"
                    >
                        Delete
                    </v-form-reset>
                </v-space>
            </template>
        </v-form-item>
    </template>
</v-form>
</template>
