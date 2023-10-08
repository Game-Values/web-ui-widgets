<template>
  <div class="min-h-screen flex mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 bg-gray-900">
    <main class="w-full">
      <h1 class="text-gray-100">GAMES</h1>

      <div class="flex h-screen bg-gray-100">
        <!-- Sidebar -->
        <div class="bg-white w-1/4 p-4 shadow-lg">
          <h2 class="text-xl mb-4">Sidebar</h2>
          <!-- Add your sidebar content here -->
        </div>

        <!-- Main content -->
        <div class="flex-1 p-4">
          <h1 class="text-2xl mb-4">Main Content</h1>
          <DataTable :data="tableData" />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "home"
})

const tableData = [
    { Seller: {id: 1, name: "Martha", deals: "90%", liked: "72%", rating: "15" },
      Description: 'A golden sword of destiny',
      Server: "EU",
      Availability: 10,
      Price: "175,85" },
    { Seller: {id: 2, name: "John", deals: "85%", liked: "60%", rating: "20" }, Description: 'The shield of ages', Server: "NA", Availability: 5, Price: "120,70" },
    { Seller: {id: 3, name: "Leo", deals: "78%", liked: "80%", rating: "25" }, Description: 'Helmet of the brave', Server: "EU", Availability: 3, Price: "50,35" },
    { Seller: {id: 4, name: "Emma", deals: "92%", liked: "68%", rating: "30" }, Description: 'Boots of speed', Server: "ASIA", Availability: 8, Price: "60,15" },
    { Seller: {id: 5, name: "Olivia", deals: "80%", liked: "85%", rating: "18" }, Description: 'Bow of silence', Server: "EU", Availability: 6, Price: "80,99" },
    { Seller: {id: 6, name: "Lucas", deals: "89%", liked: "75%", rating: "22" }, Description: 'Dagger of stealth', Server: "NA", Availability: 9, Price: "45,55" },
    { Seller: {id: 7, name: "Sophia", deals: "88%", liked: "90%", rating: "29" }, Description: 'Armor of the titan', Server: "ASIA", Availability: 2, Price: "220,10" },
    { Seller: {id: 8, name: "Ella", deals: "76%", liked: "62%", rating: "16" }, Description: 'Ring of fire', Server: "EU", Availability: 11, Price: "40,45" },
    { Seller: {id: 9, name: "James", deals: "90%", liked: "79%", rating: "27" }, Description: 'Amulet of the sea', Server: "NA", Availability: 7, Price: "90,05" },
    { Seller: {id: 10, name: "Lily", deals: "85%", liked: "81%", rating: "21" }, Description: 'Wand of the mage', Server: "ASIA", Availability: 4, Price: "110,75" },
    { Seller: {id: 11, name: "Aiden", deals: "82%", liked: "70%", rating: "17" }, Description: 'Bracelet of the wind', Server: "EU", Availability: 8, Price: "35,85" },
    { Seller: {id: 12, name: "Isabella", deals: "88%", liked: "65%", rating: "28" }, Description: 'Cloak of invisibility', Server: "NA", Availability: 6, Price: "99,25" },
    { Seller: {id: 13, name: "Ethan", deals: "79%", liked: "69%", rating: "19" }, Description: 'Staff of power', Server: "ASIA", Availability: 10, Price: "130,40" },
    { Seller: {id: 14, name: "Mia", deals: "91%", liked: "73%", rating: "23" }, Description: 'Quiver of endless arrows', Server: "EU", Availability: 9, Price: "50,60" },
    { Seller: {id: 15, name: "Daniel", deals: "86%", liked: "77%", rating: "24" }, Description: 'Flute of the siren', Server: "NA", Availability: 7, Price: "70,15" },
    { Seller: {id: 16, name: "Ava", deals: "84%", liked: "83%", rating: "26" }, Description: 'Lantern of guiding light', Server: "ASIA", Availability: 8, Price: "65,20" },
    { Seller: {id: 17, name: "Liam", deals: "80%", liked: "71%", rating: "31" }, Description: 'Gloves of dexterity', Server: "EU", Availability: 5, Price: "55,80" },
    { Seller: {id: 18, name: "Charlotte", deals: "87%", liked: "64%", rating: "20" }, Description: 'Charm of luck', Server: "NA", Availability: 6, Price: "48,90" },
    { Seller: {id: 19, name: "Jacob", deals: "81%", liked: "78%", rating: "32" }, Description: 'Orb of clarity', Server: "ASIA", Availability: 3, Price: "89,10" },
    { Seller: {id: 20, name: "Emily", deals: "90%", liked: "82%", rating: "25" }, Description: 'Potion of rejuvenation', Server: "EU", Availability: 7, Price: "25,35" },
  ]
;

</script>
