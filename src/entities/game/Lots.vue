<script lang="ts" setup>
let { t } = useI18n({
    useScope: "local",
})

let { storeClient } = useClients()

let { items } = storeToRefs(storeClient.itemsStore)
</script>

<template>
<v-table :data="items.items">
    <v-table-column
        #default="{ row }"
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

            <!-- :to="useUserRoute(row.owner_id)" -->
            <ui-link>
                Seller profile
            </ui-link>
        </v-space>
    </v-table-column>

    <v-table-column
        #default="{ row }"
        :name="t('Description')"
        id-key="attributes.description"
    >
        {{ row.attributes?.description || "Empty" }}
    </v-table-column>

    <v-table-column
        #default="{ row }"
        :name="$t('game.Server')"
        id-key="attributes.server"
    >
        {{ row.attributes?.server || "Empty" }}
    </v-table-column>

    <v-table-column
        #default="{ row }"
        :name="$t('game.Availability')"
        id-key="attributes.count"
    >
        {{ row.attributes?.count || 0 }}
    </v-table-column>

    <v-table-column
        #default="{ row }"
        :name="$t('Price')"
        id-key="attributes.price"
    >
        {{ row.attributes?.price || 0 }} $
    </v-table-column>
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
