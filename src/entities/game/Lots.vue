<script lang="ts" setup>
import type { Item } from "~/dto"

let { t } = useI18n({
    useScope: "local",
})

let { storeClient } = useClients()

let { searchResults } = storeToRefs(storeClient.facetsStore)
</script>

<template>
<v-table :data="searchResults.lotsTableData">
    <v-table-column
        v-slot="{ row }: { row: Item }"
        :name="t('Seller')"
        :width="250"
        id-key="owner_id"
    >
        <ui-link :to="row.userRoute">
            <v-space
                align="start"
                size="large"
                no-wrap
            >
                <user-lot-avatar online />

                <v-space
                    size="small"
                    vertical
                >
                    <v-title :level="6">
                        Username
                    </v-title>

                    <v-text
                        :style="{
                            fontSize: useFirst(useTheme('fontSize.sm')),
                        }"
                        disabled
                    >
                        0% comp. deals
                    </v-text>

                    <v-space>
                        <v-space
                            align="center"
                            size="small"
                        >
                            <ui-icon
                                color="success"
                                heroicons="hand-thumb-up"
                            />

                            <v-text type="success">
                                0%
                            </v-text>
                        </v-space>

                        <v-space
                            align="center"
                            size="small"
                        >
                            <ui-icon
                                color="primary"
                                heroicons="arrow-small-up"
                            />

                            <v-text type="primary">
                                1
                            </v-text>
                        </v-space>
                    </v-space>
                </v-space>
            </v-space>
        </ui-link>
    </v-table-column>

    <v-table-column
        v-slot="{ row }: { row: Item }"
        :name="t('Description')"
        id-key="name"
    >
        <v-space
            size="small"
            vertical
        >
            <ui-link
                :to="
                    row.isUserMeItem
                        ? row.editRoute
                        : row.buyRoute
                "
                type="primary"
            >
                <v-title :level="6">
                    {{ row.name }}
                </v-title>
            </ui-link>

            <v-text disabled>
                {{ row.attributesDescription }}
            </v-text>
        </v-space>
    </v-table-column>

    <v-table-column
        :width="150"
        id-key="attributesAmount"
        name="In Stock"
        sorter
    />

    <v-table-column
        :formatter="formatPrice"
        :name="t('Price')"
        :width="150"
        id-key="attributesPrice"
        sorter
    />
</v-table>
</template>

<i18n lang="yaml">
de:
    Seller: Verkäufer
    Description: Beschreibung
    Price: Preis
    Deals: "{percent} Angebote"
en:
    Seller: Seller
    Description: Description
    Price: Price
    Deals: "{percent} Deals"
</i18n>
