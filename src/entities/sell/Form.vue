<script setup lang="ts">
let { routerClient, storeClient } = useClients()
let { deletedLotConfirm } = useConfirms()
let { gameController, sellController } = useControllers()
let { createdLotToast, deletedLotToast } = useToasts()

let { game } = storeToRefs(storeClient.gameStore)
let { games } = storeToRefs(storeClient.gamesStore)
let { sellItem } = storeToRefs(storeClient.sellStore)

async function handleSellItem(): Promise<void> {
    await sellController.createSellItem()
    await createdLotToast.open({
        toast: {
            onClose: async (): Promise<void> => {
                await navigateTo(getRef(game, "route"))
            },
        },
    })
}

async function handleDeleteItem(): Promise<void> {
    let isConfirm: boolean = await deletedLotConfirm.confirm()

    if (!isConfirm)
        return

    await sellController.deleteSellItem()
    await deletedLotToast.open({
        toast: {
            onClose: async (): Promise<void> => {
                await navigateTo(getRef(game, "route"))
            },
        },
    })
}
</script>

<template>
<v-form
    :model="storeClient.sellStore.sellItemRaw"
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
            :options="games"
            @select="gameController.fetchGame($event)"
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
                :options="game.attributes.sections"
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

        <v-form-item v-if="sellItem.attributes.price">
            <v-text disabled>
                With the GameValues fee, the cost would be {{ formatPrice(sellItem.attributes.price) }}
            </v-text>
        </v-form-item>

        <v-form-item action>
            <template
                v-if="(
                    routerClient.isRouteNameEqual(routerClient.routeNames.ACCOUNT_SELL) ||
                    routerClient.isRouteNameEqual(routerClient.routeNames.GAME_ITEM_SELL)
                )"
            >
                <v-form-submit
                    block
                    @submit="handleSellItem()"
                >
                    Sell
                </v-form-submit>
            </template>

            <template v-else-if="routerClient.isRouteNameEqual(routerClient.routeNames.GAME_ITEM_SELL_EDIT)">
                <v-space justify="space-between">
                    <v-form-submit
                        type="success"
                        @click="sellController.editSellItem()"
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
