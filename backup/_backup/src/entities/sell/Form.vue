<script setup lang="ts">
import { FilterType } from "~/enums"

let { routerClient, storeClient } = useClients()
let { deletedLotConfirm } = useConfirms()
let { gameController, sellController } = useControllers()
let { createdLotToast, deletedLotToast } = useToasts()

let { game, gameSectionsRaw } = storeToRefs(storeClient.gameStore)
let { games } = storeToRefs(storeClient.gamesStore)
let { sellItem, sellStep } = storeToRefs(storeClient.sellStore)

let gameAttributes = computed((): Record<string, any> => {
    let { type } = storeClient.sellStore.sellItemRaw.attributes

    return (
        type
            ? getRef(gameSectionsRaw, type)
            : Object.create(null)
    )
})

async function handleSelectGame(gameId: string): Promise<void> {
    await gameController.fetchGame(gameId)
    await gameController.fetchGameSections()

    delete storeClient.sellStore.sellItemRaw.attributes.type
}

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
    <v-collapse @change="sellStep = (useMax($event) - 1) || 0">
        <v-collapse-panel
            style="
                --vxp-collapse-content-v-padding: 0;
                --vxp-collapse-content-h-padding: 0;
                --vxp-collapse-header-bg-color: transparent;
            "
            expanded
        >
            <template #title>
                <v-title :level="1">
                    Main Information
                </v-title>
            </template>

            <v-form-item prop="gid">
                <ui-float-label
                    :value="storeClient.sellStore.sellItemRaw.gid"
                    label="Game name"
                >
                    <v-select
                        :key-config="{
                            label: 'name',
                            value: 'id',
                        }"
                        :options="useSortBy(games, ['name'])"
                        @select="handleSelectGame($event)"
                    />
                </ui-float-label>
            </v-form-item>

            <template v-if="!isEmpty(gameSectionsRaw)">
                <v-form-item prop="attributes.type">
                    <ui-float-label
                        :value="storeClient.sellStore.sellItemRaw.attributes.type"
                        label="Category"
                    >
                        <v-select :options="useKeys(gameSectionsRaw)" />
                    </ui-float-label>
                </v-form-item>
            </template>

            <template v-if="storeClient.sellStore.sellItemRaw.attributes.type">
                <v-form-item prop="name">
                    <ui-float-label
                        :value="storeClient.sellStore.sellItemRaw.name"
                        label="Item name"
                    >
                        <v-input />
                    </ui-float-label>
                </v-form-item>

                <v-form-item prop="attributes.description">
                    <ui-float-label
                        :value="storeClient.sellStore.sellItemRaw.attributes.description"
                        label="Detailed Item Description, up to 5000 characters"
                    >
                        <v-textarea
                            :max-length="5000"
                            :rows="10"
                        />
                    </ui-float-label>
                </v-form-item>
            </template>
        </v-collapse-panel>

        <v-collapse-panel
            style="
                --vxp-collapse-content-v-padding: 0;
                --vxp-collapse-content-h-padding: 0;
                --vxp-collapse-header-bg-color: transparent;
            "
        >
            <template #title>
                <v-title :level="1">
                    Product Information
                </v-title>
            </template>

            <v-form-item>
                <v-upload
                    list-type="thumbnail"
                    allow-drag
                    multiple
                />
            </v-form-item>

            <v-row>
                <template
                    v-for="({ buckets, children, type }, gameAttribute) in gameAttributes"
                    :key="gameAttribute"
                >
                    <template v-if="children">
                        <v-column
                            v-for="({ buckets, type }, i) in children"
                            :key="i"
                            :lg="12"
                            :md="12"
                            :xs="24"
                        >
                            <v-form-item :prop="`attributes.${gameAttribute}`">
                                <ui-float-label
                                    :label="gameAttribute"
                                    :value="useGet(storeClient.sellStore.sellItemRaw, `attributes.${gameAttribute}`)"
                                >
                                    <v-select
                                        v-if="[FilterType.CHECKBOX, FilterType.RADIO, FilterType.SELECT].includes(type)"
                                        :multiple="[FilterType.CHECKBOX, FilterType.SELECT].includes(type)"
                                        :options="useMap(buckets, bucket => (bucket.label || bucket).toString())"
                                    />

                                    <v-number-input
                                        v-else-if="type === FilterType.FROM_TO"
                                    />
                                </ui-float-label>
                            </v-form-item>
                        </v-column>
                    </template>

                    <template
                        v-else-if="(
                            [FilterType.CHECKBOX, FilterType.RADIO, FilterType.SELECT].includes(type) ||
                            type === FilterType.FROM_TO
                        )"
                    >
                        <v-column
                            :lg="12"
                            :md="12"
                            :xs="24"
                        >
                            <v-form-item :prop="`attributes.${gameAttribute}`">
                                <ui-float-label
                                    :label="gameAttribute"
                                    :value="useGet(storeClient.sellStore.sellItemRaw, `attributes.${gameAttribute}`)"
                                >
                                    <v-select
                                        v-if="[FilterType.CHECKBOX, FilterType.RADIO, FilterType.SELECT].includes(type)"
                                        :multiple="[FilterType.CHECKBOX, FilterType.SELECT].includes(type)"
                                        :options="useMap(buckets, bucket => (bucket.label || bucket).toString())"
                                        :value="useGet(storeClient.sellStore.sellItemRaw, `attributes.${gameAttribute}`, [])"
                                    />

                                    <v-number-input
                                        v-else-if="type === FilterType.FROM_TO"
                                    />
                                </ui-float-label>
                            </v-form-item>
                        </v-column>
                    </template>
                </template>
            </v-row>
        </v-collapse-panel>

        <v-collapse-panel
            style="
                --vxp-collapse-content-v-padding: 0;
                --vxp-collapse-content-h-padding: 0;
                --vxp-collapse-header-bg-color: transparent;
            "
        >
            <template #title>
                <v-title :level="1">
                    Finance Information
                </v-title>
            </template>

            <template v-if="storeClient.sellStore.sellItemRaw.attributes.type">
                <v-space
                    class="[&>*]:(flex-1)"
                    no-wrap
                >
                    <v-form-item prop="attributes.amount">
                        <ui-float-label
                            :value="storeClient.sellStore.sellItemRaw.attributes.amount"
                            label="Item count"
                        >
                            <v-number-input />
                        </ui-float-label>
                    </v-form-item>

                    <v-form-item prop="attributes.price">
                        <ui-float-label
                            :value="storeClient.sellStore.sellItemRaw.attributes.price"
                            label="Item price"
                        >
                            <v-number-input>
                                <template #suffix>
                                    $
                                </template>
                            </v-number-input>
                        </ui-float-label>
                    </v-form-item>
                </v-space>

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

                    <template v-else-if="routerClient.isRouteNameEqual(routerClient.routeNames.USER_ITEM_EDIT)">
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
        </v-collapse-panel>
    </v-collapse>
</v-form>
</template>

<style lang="sass" scoped>
.vxp-collapse :deep(.vxp-collapse__header)
    @apply pl-0
</style>
