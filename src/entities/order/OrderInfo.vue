<script lang="ts" setup>
useI18n()

let { storeClient } = useClients()

let { item } = storeToRefs(storeClient.itemStore)
</script>

<template>
<v-row class="w-full">
    <v-column
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
        :sm="12"
        :xs="24"
    >
        <v-space vertical>
            <v-title
                :color="useTheme('colors.secondary')"
                class="uppercase"
                thin
            >
                In Stock
            </v-title>

            <v-text>
                {{ item.attributes.count }}
            </v-text>
        </v-space>
    </v-column>

    <v-column
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
                {{ item.attributes.price }}
            </v-text>
        </v-space>
    </v-column>
</v-row>
</template>
