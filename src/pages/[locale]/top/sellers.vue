<script lang="ts" setup>
definePageMeta({
    seo: {
        title: "Sellers",
    },
})

// todo: from api
let topSellersData = Array(10).fill().map((_, i) => (
    {
        deals: 230,
        rating: {},
        reviews: 32,
        top: i + 1,
        user: {},
    }
))
</script>

<template>
<v-table :data="topSellersData">
    <v-table-column
        v-slot="{ row }"
        :width="80"
        class="items-center justify-center"
        key="top"
        name="№"
    >
        <ui-icon
            v-if="row.top <= 3"
            :custom="`top-${row.top}`"
            size="30"
        />

        <v-text
            v-else
            class="text-nowrap"
        >
            {{ row.top }}
        </v-text>
    </v-table-column>

    <v-table-column
        v-slot="{ rowIndex }"
        class="items-center"
        key="user"
        name="Seller"
    >
        <v-space align="center">
            <user-lot-avatar
                v-if="rowIndex % 2"
                :online="rowIndex % 4"
            />

            <div
                v-else
                class="max-w-4.5rem max-h-4.5rem"
            >
                <user-profile-avatar
                    :premium="rowIndex % 3"
                />
            </div>

            <v-title :level="6">
                Username
            </v-title>
        </v-space>
    </v-table-column>

    <v-table-column
        v-slot="{ rowIndex }"
        class="items-center"
        key="rating"
        name="Rating"
    >
        <v-space
            align="center"
            size="small"
        >
            <ui-icon
                color="positive-light"
                heroicons="hand-thumb-up"
                size="18"
            />

            <v-text
                type="success"
                strong
            >
                100
            </v-text>
        </v-space>

        <v-space
            align="center"
            size="small"
        >
            <ui-icon
                color="secondary"
                heroicons="hand-thumb-down"
                size="18"
            />

            <v-text
                disabled
                strong
            >
                32
            </v-text>
        </v-space>
    </v-table-column>

    <v-table-column
        v-slot="{ rowIndex }"
        class="items-center"
        name="Reviews"
    >
        34
    </v-table-column>

    <v-table-column
        v-slot="{ rowIndex }"
        class="items-center"
        name="Deals"
    >
        230
    </v-table-column>
</v-table>
</template>
