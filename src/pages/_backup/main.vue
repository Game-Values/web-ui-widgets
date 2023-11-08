<template>
<ui-layout-content class="min-h-screen flex mx-auto px-2 sm:px-6 lg:px-8 bg-gray-900">
    <main class="w-full">
        <slider-container>
            <slider-slide
                horizontal-image="https://picsum.photos/seed/test1/1200/500.webp"
                vertical-image="https://picsum.photos/seed/test2/900/1000.webp"
            >
                <div class="flex flex-col gap-2 text-white">
                    <p class="text-4xl font-bold ">
                        Trade any in-game items in different games
                    </p>
                    <p>Invite friends and get bonuses</p>
                    <button class="bg-blue-500 text-white rounded-lg px-4 py-2 text-xl md:w-40 w-full">
                        Try
                    </button>
                </div>
            </slider-slide>
            <slider-slide
                horizontal-image="https://picsum.photos/seed/test4/1200/500.webp"
                vertical-image="https://picsum.photos/seed/test5/900/1000.webp"
            >
                <p class="text-4xl text-white">
                    items in different games
                </p>
            </slider-slide>
        </slider-container>
        <game-list
            :games="Cards"
            header-component="h3"
        />
    </main>
</ui-layout-content>
</template>

<script setup lang="ts">
import type { GameCard } from "~/components/game/Card.vue"

const Cards: GameCard[] = [
    {
        image: "apex",
        link: "/g/apex",
        name: "Apex Legends",
    },
    {
        image: "gta5",
        link: "/g/gta5",
        name: "GTA 5 Online",
    },
    {
        image: "genshin",
        link: "/g/genshin",
        name: "Genshin Impact",
    },
    {
        image: "hearthstone",
        link: "/g/hearthstone",
        name: "Hearthstone",
    },
    {
        image: "lol",
        link: "/g/lol",
        name: "League of Legends",
    },
    {
        image: "la2",
        link: "/g/la2",
        name: "Lineage 2",
    },
    {
        image: "minecraft",
        link: "/g/minecraft",
        name: "Minecraft",
    },
    {
        image: "mobile",
        link: "/g/mobile-games",
        name: "Mobile Games",
    },
    {
        image: "poe",
        link: "/g/path-of-exile",
        name: "Path of Exile",
    },
    {
        image: "roblox",
        link: "/g/roblox",
        name: "Roblox",
    },
    {
        image: "rocket-league",
        link: "/g/rocket-league",
        name: "Rocket League",
    },
    {
        image: "rust",
        link: "/g/rust",
        name: "Rust",
    },
    {
        image: "standoff2",
        link: "/g/standoff2",
        name: "Standoff 2",
    },
    {
        image: "steam",
        link: "/g/steam",
        name: "Steam",
    },
    {
        image: "tom-clansis",
        link: "/g/tc-division",
        name: "Tom Clancy's The Division",
    },
    {
        image: "tom-clansis",
        link: "/g/tc-gr",
        name: "Tom Clancy’s Ghost Recon",
    },
    {
        image: "tom-clansis",
        link: "/g/tc-rs",
        name: "Tom Clancy's Rainbow Six",
    },
    {
        image: "valorant",
        link: "/g/valorant",
        name: "Valorant",
    },
    {
        image: "warframe",
        link: "/g/warframe",
        name: "Warframe",
    },
    {
        image: "wot",
        link: "/g/wot",
        name: "World of Tanks",
    },
    // {
    //   name: "Overwatch 2",
    //   image: "/game-images/.svg",
    //   link: "/game/2"
    // },
    // {
    //   name: "PlayerUnknown's Battlegrounds (PUBG)",
    //   image: "pubg",
    //   link: "/g/pubg"
    // },
    // {
    //   name: "Uplay",
    //   image: "/game-images/.svg",
    //   link: "/game/2"
    // },
    {
        image: "wow",
        link: "/g/wow",
        name: "World of Warcraft",
    },
]
</script>
