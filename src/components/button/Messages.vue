<template>
<button
class="relative rounded-full bg-black p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
type="button">
    <span class="sr-only">View notifications</span>
    <component :is="muted ? BellSnoozeIcon : BellIcon " aria-hidden="true" class="h-6 w-6"/>

    <!-- Conditionally render the badge if "count" is provided -->
    <span v-if="count !== undefined" class="absolute top-[-4px] right-[-4px]">

        <span v-if="muted === true" class="inline-block bg-gray-500 text-white rounded-full px-1 py-0.5 text-xs">
            {{ count }}
        </span>

        <span v-if="muted !== true" class="inline-block bg-red-500 text-white rounded-full px-1 py-0.5 text-xs">
            {{ count }}
        </span>

    </span>
</button>
</template>

<script setup>
import { BellIcon, BellSnoozeIcon } from "@heroicons/vue/24/outline"

// Define the props
defineProps({
    count: Number,
    muted: Boolean,
})
</script>
