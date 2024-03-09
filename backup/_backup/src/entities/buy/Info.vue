<script lang="ts" setup>
useI18n()

let { storeClient } = useClients()

let { item } = storeToRefs(storeClient.itemStore)
let { order } = storeToRefs(storeClient.orderStore)
</script>

<template>
<v-row class="w-full">
    <v-column
        v-if="item.attributes?.server"
        :sm="12"
        :xs="24"
    >
        <v-space vertical>
            <v-title
                :color="useTheme('colors.secondary')"
                class="uppercase"
                thin
            >
                <i18n-t
                    keypath="game.Server"
                    scope="global"
                />
            </v-title>

            <v-text>
                {{ item.attributes.server }}
            </v-text>
        </v-space>
    </v-column>

    <v-column
        v-if="(
            item.attributes?.amount ||
            order.attributes?.amount
        )"
        :sm="12"
        :xs="24"
    >
        <v-space vertical>
            <v-title
                :color="useTheme('colors.secondary')"
                class="uppercase"
                thin
            >
                {{ item.attributes?.amount ? "In Stock" : "Amount" }}
            </v-title>

            <v-text>
                {{ item.attributes?.amount || order.attributes?.amount }}
            </v-text>
        </v-space>
    </v-column>

    <v-column
        v-if="item.attributes?.type"
        :sm="12"
        :xs="24"
    >
        <v-space vertical>
            <v-title
                :color="useTheme('colors.secondary')"
                class="uppercase"
                thin
            >
                Type
            </v-title>

            <v-text>
                {{ item.attributes.type }}
            </v-text>
        </v-space>
    </v-column>

    <v-column
        v-if="(
            item.attributes?.price ||
            order.attributes?.price
        )"
        :sm="12"
        :xs="24"
    >
        <v-space vertical>
            <v-title
                :color="useTheme('colors.secondary')"
                class="uppercase"
                thin
            >
                <i18n-t
                    keypath="order.Price per unit"
                    scope="global"
                />
            </v-title>

            <v-text>
                {{ formatPrice(item.attributes?.price || order.attributes?.price) }}
            </v-text>
        </v-space>
    </v-column>
</v-row>
</template>
