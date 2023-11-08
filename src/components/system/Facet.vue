<template>
<aside class="p-4 text-gray-500 rounded" style="background-color: #1d1d1e">
    <h1 class="text-xl font-bold mb-4">
        Filters
    </h1>

    <!-- Categories Search -->
    <div class="mb-6">
        <h2 class="text-lg font-semibold mb-2">
            Search Category
        </h2>
        <input
        class="p-2 w-full rounded"
        placeholder="Search categories..."
        v-model="searchTerm"
        type="text">
    </div>

    <!-- Categories -->
    <div class="mb-6">
        <h2 class="text-lg font-semibold mb-2">
            Categories
        </h2>
        <div class="space-y-2">
            <div v-for="category in filteredCategories" :key="category.id">
                <label class="flex items-center">
                    <input class="form-checkbox h-5 w-5 text-gray-500 border-gray-500 bg-white" type="checkbox" v-model="category.selected">
                    <span class="ml-2">{{ category.name }}</span>
                </label>
            </div>
        </div>
    </div>

    <!-- Rating Dropdown -->
    <div class="mb-6">
        <h2 class="text-lg font-semibold mb-2">
            Rating
        </h2>
        <select v-model="selectedRating" class="p-2 w-full rounded">
            <option v-for="rating in ratings" :key="rating">
                {{ rating }}
            </option>
        </select>
    </div>

    <!-- Game Mode -->
    <div class="mb-6">
        <h2 class="text-lg font-semibold mb-2">
            Game Mode
        </h2>
        <div class="space-y-2">
            <label :key="mode.value" class="flex items-center" v-for="mode in gameModes">
                <input
                :value="mode.value"
                class="form-radio h-5 w-5 text-gray-500 border-gray-500 bg-white"
                name="gameMode"
                type="radio"
                v-model="selectedGameMode">
                <span class="ml-2">{{ mode.label }}</span>
            </label>
        </div>
    </div>

    <!-- Price Range -->
    <div class="mb-6">
        <h2 class="text-lg font-semibold mb-2">
            Price Range: ${{ priceRange }}
        </h2>
        <input
        class="w-full"
        max="1000"
        min="0"
        type="range"
        v-model="priceRange">
    </div>
</aside>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue"

export default defineComponent({
    name: "SidebarSearch",
    setup() {
        let categories = ref([
            // ... (same as before)
        ])
        let searchTerm = ref("")
        let selectedRating = ref("All Ratings")
        let ratings = ref(["All Ratings", "1 Star", "2 Stars", "3 Stars", "4 Stars", "5 Stars"])
        let selectedGameMode = ref("")
        let gameModes = ref([
            { label: "Single Player", value: "single" },
            { label: "Multi Player", value: "multi" },
        ])
        let priceRange = ref(500)

        let filteredCategories = computed(() => {
            return categories.value.filter(category => category.name.toLowerCase().includes(searchTerm.value.toLowerCase()))
        })

        return {
            categories,
            filteredCategories,
            gameModes,
            priceRange,
            ratings,
            searchTerm,
            selectedGameMode,
            selectedRating,
        }
    },
})
</script>
