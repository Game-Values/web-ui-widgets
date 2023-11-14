<template>
<nav class="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0">
    <div class="-mt-px flex w-0 flex-1">
        <button
            :class="currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-500 hover:border-gray-300 hover:text-gray-700'"
            :disabled="currentPage === 1"
            @click="prevPage"
            class="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 font-medium"
        >
            <ui-icon-arrow-long-left
                :class="currentPage === totalPages ? 'text-gray-400' : 'text-gray-500'"
                class="mr-3"
                size="20"
            />

            Previous
        </button>
    </div>
    <div class="hidden md:-mt-px md:flex">
        <template v-for="page in totalPages">
            <a
                :key="'current-' + page"
                aria-current="page"
                @click="gotoPage(page)"
                class="inline-flex items-center border-t-2 border-indigo-500 px-4 pt-4 font-medium text-indigo-600"
                v-if="page === currentPage"
            >
                {{ page }}
            </a>
            <a
                :key="'other-' + page"
                class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                @click="gotoPage(page)"
                v-else
            >
                {{ page }}
            </a>
        </template>
    </div>
    <div class="-mt-px flex w-0 flex-1 justify-end">
        <button
            :class="currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-gray-500 hover:border-gray-300 hover:text-gray-700'"
            :disabled="currentPage === totalPages"
            @click="nextPage"
            class="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 font-medium"
        >
            Next

            <ui-icon-arrow-long-right
                :class="currentPage === totalPages ? 'text-gray-400' : 'text-gray-500'"
                class="ml-3"
                size="20"
            />
        </button>
    </div>
</nav>
</template>

<script lang="ts">
import type { PropType } from "vue"

import { defineComponent } from "vue"

export default defineComponent({
    methods: {
        prevPage() {
            if (this.currentPage > 1)
        this.$emit('update:currentPage', this.currentPage - 1);

        },
        nextPage() {
            if (this.currentPage < this.totalPages)
        this.$emit('update:currentPage', this.currentPage + 1);

        },
        gotoPage(page: number) {
            this.$emit("update:currentPage", page)
    }
    },
    props: {
        currentPage: {
            type: Number,
            required: true,
    },
        totalPages: {
            type: Number,
            required: true,
    }
    }
})
</script>
