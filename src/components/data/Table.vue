<script lang="ts">
import type { PropType } from "vue"

export default defineComponent({
    computed: {
        headers(): string[] {
            if (this.data.length > 0)
        return Object.keys(this.data[0]).filter(key => key !== "Seller")

            return []
        },
        paginatedData(): Array<Record<string, any>> {
            const start = (this.currentPage - 1) * this.itemsPerPage
            const end = start + this.itemsPerPage
            return this.data.slice(start, end)
        },
        totalPages(): number {
            return Math.ceil(this.data.length / this.itemsPerPage)
        }
    },
    data() {
        return {
            currentPage: 1,
            itemsPerPage: 9,
    }
    },
    methods: {
        gotoPage(pageNumber: number) {
            this.currentPage = pageNumber
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++
            }
        },
        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage--
            }
        },
        truncate(str?: string, length: number = 5): string {
            if (!str) return ""

            if (str.length <= length)
                return str

            return str.substring(0, length) + "..."
        },
        updatePage(newPage: number) {
            this.currentPage = newPage
        },
    },
    props: {
        data: {
            required: true,
            type: Array as PropType<Array<Record<string, any>>>,
        },
        id: {
            required: false,
            type: String,
        },
    },
})
</script>

<template>
<div class="min-w-full divide-gray-200 divide-solid divide-y">
    <div class="min-w-full divide-solid divide-y divide-solarized-base1 bg-solarized-base03 p-6 rounded-lg shadow-lg">
        <table :id="id" class="min-w-full w-full table-fixed">
            <thead class="text-solarized-base0">
                <tr>
                    <!-- Seller Column Title -->
                    <th class="px-6 py-3 w-48 flex-none text-left font-medium text-gray-100 uppercase tracking-wider">
                        Seller
                    </th>
                    <!-- Other Columns Titles -->
                    <template v-for="header in headers">
                        <th
                        :key="header"
                        v-if="header !== 'Seller'"
                        class="px-6 py-3 flex-grow text-left font-medium text-gray-100 uppercase tracking-wider">
                            {{ header }}
                        </th>
                    </template>
                </tr>
            </thead>
            <tbody class="text-solarized-base1">
                <tr
                :key="JSON.stringify(item)"
                v-for="item in paginatedData"
                class="hover:bg-solarized-base02 hover:rounded-lg transition-colors duration-300">
                    <!-- Seller Column -->
                    <td class="px-6 py-4 w-48 flex-none whitespace-nowrap">
                        <div class="flex">
                            <!-- Left Column: Logo and Name -->
                            <div class="flex-shrink-0 flex flex-col items-center mr-4">
                                <nuxt-img :src="'/userlogo.jpg'" alt="User Image" class="h-11 w-11 rounded-full"/>
                                <!--                <span class="mt-2">{{ truncateName(item.Seller.name) }}</span>-->
                            </div>
                            <!-- Right Column: Deals, Likes, and Rating -->
                            <div class="flex-grow flex flex-col justify-between space-y-1">
                                <!-- This div displays the deals info -->
                                <div class="text-gray-100">
                                    {{ truncate(item.Seller.name, 16) }}
                                </div>
                                <div class="text-gray-500">
                                    {{ item.Seller.deals }} deals compl.
                                </div>
                                <!-- This flex container arranges its children in a row layout -->
                                <div class="flex space-x-2">
                                    <!-- HandThumbUpIcon + liked in green -->
                                    <div class="flex items-center text-green-500">
                                        <ui-icon-hand-thumb-up class="mr-1" />
                                        <span>{{ item.Seller.liked }}</span>
                                    </div>
                                    <!-- ArrowsUpDownIcon + rating in blue -->
                                    <div class="flex items-center text-primary">
                                        <ui-icon-arrow-small-up class="mr-1" />
                                        <span>{{ item.Seller.rating }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </td>
                    <!-- Other Columns -->
                    <template v-for="header in headers">
                        <td :key="header" class="px-6 py-4 flex-grow whitespace-nowrap" v-if="header !== 'Seller'">
                            <div v-if="typeof item[header] === 'object'">
                                <div v-for="(value, subKey) in item[header]" :key="subKey">
                                    <strong>{{ subKey }}:</strong> {{ value }}
                                </div>
                            </div>
                            <div v-else>
                                <div v-if="header === 'Description'" class="w-full whitespace-pre-line">
                                    <div class="text-gray-200">
                                        {{ item[header] }}
                                    </div>
                                    {{ truncate(item["Text"], 50) }}
                                </div>
                                <div v-else-if="header === 'Price'" class="flex items-center">
                                    <span class="mr-1 text-gray-100">{{ item[header] }}</span>
                                    <span>€</span>
                                </div>
                                <div v-else>
                                    {{ item[header] }}
                                </div>
                            </div>
                        </td>
                    </template>
                </tr>
            </tbody>
        </table>
    </div>

    <!-- Pagination Controls -->
    <nav-pag
    :current-page="currentPage"
    :total-pages="totalPages"
    @update:currentPage="updatePage"/>
</div>
</template>

<style>
@layer utilities {
  .text-neon-blue {
    color: #00d9ff;
  }

  .hover\:bg-neon-blue:hover {
    background-color: #00d9ff;
  }

  .text-solarized-base1 {
    color: #93a1a1;
  }

  .text-solarized-base0 {
    color: #839496;
  }

  .divide-solarized-base1 > :not(template) ~ :not(template) {
    border-color: #93a1a1;
  }
}

.text-neon-blue {
  color: #00d9ff;
}

.border-neon-blue {
  border-color: #262626;
}

.hover\:bg-neon-blue:hover {
  background-color: #262626;
}

table {
  display: flex;
  flex-direction: column;
}

thead, tbody {
  display: flex;
  flex-direction: column;
}

tr {
  display: flex;
}

th, td {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* Specific adjustment for the Description column */
th:nth-child(2), td:nth-child(2) {
  flex: 3;
}

tr:hover td:first-child {
  border-top-left-radius: 0.8rem; /* Increase for a more pronounced rounding */
  border-bottom-left-radius: 0.8rem;
}

tr:hover td:last-child {
  border-top-right-radius: 0.8rem;
  border-bottom-right-radius: 0.8rem;
}
</style>
