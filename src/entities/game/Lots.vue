<script lang="ts" setup>
import type { Item } from "~/dto"

let { t } = useI18n({
    useScope: "local",
})

let { storeClient } = useClients()
let { loginModal } = useModals()

let { items } = storeToRefs(storeClient.itemsStore)
</script>

<template>
<v-table :data="items.lotsTableData">
    <v-table-column
        v-slot="{ row }: { row: Item }"
        :name="t('Seller')"
        :width="250"
        id-key="owner_id"
    >
        <v-space
            align="center"
            size="large"
            no-wrap
        >
            <user-lot-avatar online />

            <ui-link :to="row.userRoute">
                Seller profile
            </ui-link>
        </v-space>
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
            <widget-wrapper-auth-only>
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
            </widget-wrapper-auth-only>

            <widget-wrapper-unauth-only>
                <v-button
                    text
                    @click="loginModal.show()"
                >
                    <v-title :level="6">
                        {{ row.name }}
                    </v-title>
                </v-button>
            </widget-wrapper-unauth-only>

            <v-text>
                {{ row.attributesDescription }}
            </v-text>
        </v-space>
    </v-table-column>

    <v-table-column
        :width="150"
        id-key="attributesCount"
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
