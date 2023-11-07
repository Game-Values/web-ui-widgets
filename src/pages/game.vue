<template>
<div class="min-h-screen flex mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 bg-transparent">
    <main class="w-full">

        <games-card
        :buttons="buttons"
        :categories="game.categories"
        :description="game.description"
        :key="game.id"
        :title="game.title"
        v-for="game in games"
        />
        <div class="flex items-center justify-between w-10/12 h-16 space-x-4">
            <div class="flex items-center space-x-2">
                <!-- Adding heroicons as an example -->
                <heroicons-outline-search class="w-5 h-5 text-gray-400"/>
                <system-search class="flex-grow w-10/12" html-table-id="goods"/>
            </div>
            <switch-toggle v-model="isSwitched"/>
        </div>
        <div class="flex bg-[#1d1d1e]">
            <!-- Sidebar -->
            <div class="w-1/4 p-4">
                <sidebar-search/>
            </div>

            <!-- Main content -->
            <div class="flex-1 p-4">
                <data-table :id="'goods'" :data="tableData" />
            </div>
        </div>
    </main>
</div>
</template>

<script setup lang="ts">
import { defineComponent, ref } from "vue"

import SidebarSearch from "~/components/system/Facet.vue"
import SwitchToggle from "~/components/system/Switch.vue"

definePageMeta({
    layout: "game",
})

defineComponent({
    components: {
        SidebarSearch,
        SwitchToggle,
    },
    setup() {
        let isSwitched = ref(false)
        return {
            isSwitched,
        }
    },
})

const buttons = [
    { bgClass: "bg-blue-500", count: 10, id: 1, label: "Accounts" },
    { bgClass: "bg-white bg-opacity-0", count: 12, id: 2, label: "Characters" },
    { bgClass: "bg-white bg-opacity-0", count: 12, id: 3, label: "Weapons" },
    { bgClass: "bg-white bg-opacity-0", count: 12, id: 4, label: "Vehicles" },
    { bgClass: "bg-white bg-opacity-0", count: 12, id: 5, label: "Environments" },
    { bgClass: "bg-white bg-opacity-0", count: 12, id: 6, label: "Abilities" },
]

const games = [
    {
        categories: [
            { count: 10, label: "Accounts" },
            { count: 12, label: "Other" },
        ],
        description: "We offer to buy ArcheAge Unchained gold (EU and NA)...",
        id: 1,
        title: "ArcheAge: Unchained",
    },
]

const tableData = [
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
    {
        Amount: 9,
        Description: "Dagger of stealth",
        Price: "45,55",
        Seller: { deals: "89%", id: 6, liked: "75%", name: "Lucas", rating: "22" },
        Server: "NA",
        Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        Amount: 2,
        Description: "Armor of the titan",
        Price: "220,10",
        Seller: { deals: "88%", id: 7, liked: "90%", name: "Sophia", rating: "29" },
        Server: "ASIA",
        Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        Amount: 11,
        Description: "Ring of fire",
        Price: "40,45",
        Seller: { deals: "76%", id: 8, liked: "62%", name: "Ella", rating: "16" },
        Server: "EU",
        Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        Amount: 7,
        Description: "Amulet of the sea",
        Price: "90,05",
        Seller: { deals: "90%", id: 9, liked: "79%", name: "James", rating: "27" },
        Server: "NA",
        Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        Amount: 4,
        Description: "Wand of the mage",
        Price: "110,75",
        Seller: { deals: "85%", id: 10, liked: "81%", name: "Lily", rating: "21" },
        Server: "ASIA",
        Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        Amount: 8,
        Description: "Bracelet of the wind",
        Price: "35,85",
        Seller: { deals: "82%", id: 11, liked: "70%", name: "Aiden", rating: "17" },
        Server: "EU",
        Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        Amount: 6,
        Description: "Cloak of invisibility",
        Price: "99,25",
        Seller: { deals: "88%", id: 12, liked: "65%", name: "Isabella", rating: "28" },
        Server: "NA",
        Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        Amount: 10,
        Description: "Staff of power",
        Price: "130,40",
        Seller: { deals: "79%", id: 13, liked: "69%", name: "Ethan", rating: "19" },
        Server: "ASIA",
        Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        Amount: 9,
        Description: "Quiver of endless arrows",
        Price: "50,60",
        Seller: { deals: "91%", id: 14, liked: "73%", name: "Mia", rating: "23" },
        Server: "EU",
        Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        Amount: 7,
        Description: "Flute of the siren",
        Price: "70,15",
        Seller: { deals: "86%", id: 15, liked: "77%", name: "Daniel", rating: "24" },
        Server: "NA",
        Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        Amount: 8,
        Description: "Lantern of guiding light",
        Price: "65,20",
        Seller: { deals: "84%", id: 16, liked: "83%", name: "Ava", rating: "26" },
        Server: "ASIA",
        Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        Amount: 5,
        Description: "Gloves of dexterity",
        Price: "55,80",
        Seller: { deals: "80%", id: 17, liked: "71%", name: "Liam", rating: "31" },
        Server: "EU",
        Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        Amount: 6,
        Description: "Charm of luck",
        Price: "48,90",
        Seller: { deals: "87%", id: 18, liked: "64%", name: "Charlotte", rating: "20" },
        Server: "NA",
        Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        Amount: 3,
        Description: "Orb of clarity",
        Price: "89,10",
        Seller: { deals: "81%", id: 19, liked: "78%", name: "Jacob", rating: "32" },
        Server: "ASIA",
        Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        Amount: 7,
        Description: "Potion of rejuvenation",
        Price: "25,35",
        Seller: { deals: "90%", id: 20, liked: "82%", name: "Emily", rating: "25" },
        Server: "EU",
        Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
]
</script>
