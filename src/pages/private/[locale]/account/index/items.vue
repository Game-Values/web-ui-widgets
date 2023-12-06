<script lang="ts" setup>
import type { Game } from "~/dto"

definePageMeta({
    seo: {
        title: "Items",
    },
})

let game: Game = {
    count: 0,
    icon: "apex",
    id: "0",
    liked: false,
    name: "Apex Legends",
    slug: "apex",
}

let lotsData = [
    {
        Amount: 10,
        Description: "A golden sword of destiny",
        Price: "175,85",
        Seller: { deals: "90%", id: 1, liked: "72%", name: "12345678", rating: "15" },
        Server: "EU",
    },
    {
        Amount: 5,
        Description: "The shield of ages",
        Price: "120,70",
        Seller: { deals: "85%", id: 2, liked: "60%", name: "John", rating: "20" },
        Server: "NA",
        Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        Amount: 3,
        Description: "Helmet of the brave",
        Price: "50,35",
        Seller: { deals: "78%", id: 3, liked: "80%", name: "Leo", rating: "25" },
        Server: "EU",
        Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        Amount: 8,
        Description: "Boots of speed",
        Price: "60,15",
        Seller: { deals: "92%", id: 4, liked: "68%", name: "Emma", rating: "30" },
        Server: "ASIA",
        Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        Amount: 6,
        Description: "Bow of silence",
        Price: "80,99",
        Seller: { deals: "80%", id: 5, liked: "85%", name: "Olivia", rating: "18" },
        Server: "EU",
        Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
]
</script>

<template>
<v-space
    size="large"
    vertical
>
    <v-title :level="3">
        <v-space
            align="center"
            justify="space-between"
        >
            <v-text>
                Lots
            </v-text>

            <v-button
                size="small"
                type="primary"
            >
                Sell
            </v-button>
        </v-space>
    </v-title>

    <v-collapse>
        <game-collapse-lot
            v-for="n in 5"
            :key="n"
            :game="game"
            :lots="lotsData"
        />
    </v-collapse>
</v-space>
</template>
