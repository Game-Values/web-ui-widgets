<template>
  <div class="min-h-screen flex mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 bg-transparent">
    <main class="w-full">

      <GamesCard
        v-for="game in games"
        :key="game.id"
        :title="game.title"
        :description="game.description"
        :categories="game.categories"
        :buttons="buttons"
      />
      <div class="flex items-center justify-between w-10/12 h-16 space-x-4">
        <div class="flex items-center space-x-2">
          <!-- Adding heroicons as an example -->
          <heroicons-outline-search class="w-5 h-5 text-gray-400" />
          <SystemSearch htmlTableId="goods" class="flex-grow w-10/12" />
        </div>
        <SwitchToggle v-model="isSwitched" />
      </div>
      <div class="flex bg-[#1d1d1e]">
        <!-- Sidebar -->
        <div class="w-1/4 p-4">
          <SidebarSearch />
        </div>

        <!-- Main content -->
        <div class="flex-1 p-4">
          <DataTable :data="tableData" :id="'goods'" />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "game"
})

import { defineComponent, ref } from "vue"
import SwitchToggle from "~/components/system/Switch.vue"
import SidebarSearch from "~/components/system/Facet.vue"

defineComponent({
  components: {
    SwitchToggle,
    SidebarSearch
  },
  setup() {
    const isSwitched = ref(false)
    return {
      isSwitched
    }
  }
})

const buttons = [
  { id: 1, label: "Accounts", count: 10, bgClass: "bg-blue-500" },
  { id: 2, label: "Characters", count: 12, bgClass: "bg-white bg-opacity-0" },
  { id: 3, label: "Weapons", count: 12, bgClass: "bg-white bg-opacity-0" },
  { id: 4, label: "Vehicles", count: 12, bgClass: "bg-white bg-opacity-0" },
  { id: 5, label: "Environments", count: 12, bgClass: "bg-white bg-opacity-0" },
  { id: 6, label: "Abilities", count: 12, bgClass: "bg-white bg-opacity-0" }
]

const games = [
  {
    id: 1,
    title: "ArcheAge: Unchained",
    description: "We offer to buy ArcheAge Unchained gold (EU and NA)...",
    categories: [
      { label: "Accounts", count: 10 },
      { label: "Other", count: 12 }
    ]
  }
]

const tableData = [
  {
    Seller: { id: 1, name: "12345678", deals: "90%", liked: "72%", rating: "15" },
    Description: "A golden sword of destiny",
    Server: "EU",
    Amount: 10,
    Price: "175,85"
  },
  {
    Seller: { id: 2, name: "John", deals: "85%", liked: "60%", rating: "20" },
    Description: "The shield of ages",
    Server: "NA",
    Amount: 5,
    Price: "120,70",
    Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    Seller: { id: 3, name: "Leo", deals: "78%", liked: "80%", rating: "25" },
    Description: "Helmet of the brave",
    Server: "EU",
    Amount: 3,
    Price: "50,35",
    Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    Seller: { id: 4, name: "Emma", deals: "92%", liked: "68%", rating: "30" },
    Description: "Boots of speed",
    Server: "ASIA",
    Amount: 8,
    Price: "60,15",
    Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    Seller: { id: 5, name: "Olivia", deals: "80%", liked: "85%", rating: "18" },
    Description: "Bow of silence",
    Server: "EU",
    Amount: 6,
    Price: "80,99",
    Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    Seller: { id: 6, name: "Lucas", deals: "89%", liked: "75%", rating: "22" },
    Description: "Dagger of stealth",
    Server: "NA",
    Amount: 9,
    Price: "45,55",
    Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    Seller: { id: 7, name: "Sophia", deals: "88%", liked: "90%", rating: "29" },
    Description: "Armor of the titan",
    Server: "ASIA",
    Amount: 2,
    Price: "220,10",
    Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    Seller: { id: 8, name: "Ella", deals: "76%", liked: "62%", rating: "16" },
    Description: "Ring of fire",
    Server: "EU",
    Amount: 11,
    Price: "40,45",
    Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    Seller: { id: 9, name: "James", deals: "90%", liked: "79%", rating: "27" },
    Description: "Amulet of the sea",
    Server: "NA",
    Amount: 7,
    Price: "90,05",
    Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    Seller: { id: 10, name: "Lily", deals: "85%", liked: "81%", rating: "21" },
    Description: "Wand of the mage",
    Server: "ASIA",
    Amount: 4,
    Price: "110,75",
    Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    Seller: { id: 11, name: "Aiden", deals: "82%", liked: "70%", rating: "17" },
    Description: "Bracelet of the wind",
    Server: "EU",
    Amount: 8,
    Price: "35,85",
    Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    Seller: { id: 12, name: "Isabella", deals: "88%", liked: "65%", rating: "28" },
    Description: "Cloak of invisibility",
    Server: "NA",
    Amount: 6,
    Price: "99,25",
    Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    Seller: { id: 13, name: "Ethan", deals: "79%", liked: "69%", rating: "19" },
    Description: "Staff of power",
    Server: "ASIA",
    Amount: 10,
    Price: "130,40",
    Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    Seller: { id: 14, name: "Mia", deals: "91%", liked: "73%", rating: "23" },
    Description: "Quiver of endless arrows",
    Server: "EU",
    Amount: 9,
    Price: "50,60",
    Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    Seller: { id: 15, name: "Daniel", deals: "86%", liked: "77%", rating: "24" },
    Description: "Flute of the siren",
    Server: "NA",
    Amount: 7,
    Price: "70,15",
    Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    Seller: { id: 16, name: "Ava", deals: "84%", liked: "83%", rating: "26" },
    Description: "Lantern of guiding light",
    Server: "ASIA",
    Amount: 8,
    Price: "65,20",
    Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    Seller: { id: 17, name: "Liam", deals: "80%", liked: "71%", rating: "31" },
    Description: "Gloves of dexterity",
    Server: "EU",
    Amount: 5,
    Price: "55,80",
    Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    Seller: { id: 18, name: "Charlotte", deals: "87%", liked: "64%", rating: "20" },
    Description: "Charm of luck",
    Server: "NA",
    Amount: 6,
    Price: "48,90",
    Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    Seller: { id: 19, name: "Jacob", deals: "81%", liked: "78%", rating: "32" },
    Description: "Orb of clarity",
    Server: "ASIA",
    Amount: 3,
    Price: "89,10",
    Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    Seller: { id: 20, name: "Emily", deals: "90%", liked: "82%", rating: "25" },
    Description: "Potion of rejuvenation",
    Server: "EU",
    Amount: 7,
    Price: "25,35",
    Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }
]
</script>
