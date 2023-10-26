<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/vue/24/solid/esm"
import { ArrowSmallUpIcon, HandThumbUpIcon } from "@heroicons/vue/24/solid/esm"
import { ArrowLongLeftIcon, ArrowLongRightIcon, ArrowUpIcon } from '@heroicons/vue/20/solid'
export default defineComponent({
  components: {
    HandThumbUpIcon,
    ArrowSmallUpIcon,
    ArrowLeftIcon,
    ArrowRightIcon,
    ArrowLongLeftIcon,
    ArrowLongRightIcon,
  },
  props: {
    data: {
      type: Array as PropType<Array<Record<string, any>>>,
      required: true
    },
    id: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 9
    }
  },
  computed: {
    headers(): string[] {
      if (this.data.length > 0) {
        return Object.keys(this.data[0]).filter(key => key !== "Seller")
      }
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
  methods: {
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++
      }
    },
    updatePage(newPage: number) {
      this.currentPage = newPage;
    },
    gotoPage(pageNumber: number) {
      this.currentPage = pageNumber;
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--
      }
    },
    truncate(str?: string, length: number = 5): string {
      if (!str) return ""

      if (str.length <= length) {
        return str
      }

      return str.substring(0, length) + "..."
    }
  }
})
</script>

<template>
  <div class="min-w-full divide-y divide-gray-200">
    <div class="min-w-full divide-y divide-solarized-base1 bg-solarized-base03 p-6 rounded-lg shadow-lg">
      <table class="min-w-full w-full table-fixed" :id="id">
        <thead class="text-solarized-base0">
        <tr>
          <!-- Seller Column Title -->
          <th class="px-6 py-3 w-48 flex-none text-left text-xs font-medium text-gray-100 uppercase tracking-wider">
            Seller
          </th>
          <!-- Other Columns Titles -->
          <template v-for="header in headers">
            <th v-if="header !== 'Seller'" :key="header"
                class="px-6 py-3 flex-grow text-left text-xs font-medium text-gray-100 uppercase tracking-wider">
              {{ header }}
            </th>
          </template>
        </tr>
        </thead>
        <tbody class="text-solarized-base1">
        <tr v-for="item in paginatedData" :key="JSON.stringify(item)"
            class="hover:bg-solarized-base02 hover:rounded-lg transition-colors duration-300">
          <!-- Seller Column -->
          <td class="px-6 py-4 w-48 flex-none whitespace-nowrap">
            <div class="flex">
              <!-- Left Column: Logo and Name -->
              <div class="flex-shrink-0 flex flex-col items-center mr-4">
                <NuxtImg :src="'/userlogo.jpg'" alt="User Image" class="h-11 w-11 rounded-full" />
                <!--                <span class="mt-2 text-xs">{{ truncateName(item.Seller.name) }}</span>-->
              </div>
              <!-- Right Column: Deals, Likes, and Rating -->
              <div class="flex-grow flex flex-col justify-between space-y-1">
                <!-- This div displays the deals info -->
                <div class="text-xs text-gray-100">{{ truncate(item.Seller.name, 16) }}</div>
                <div class="text-xs text-gray-500">{{ item.Seller.deals }} deals compl.</div>
                <!-- This flex container arranges its children in a row layout -->
                <div class="flex text-xs space-x-2">
                  <!-- HandThumbUpIcon + liked in green -->
                  <div class="flex items-center text-green-500">
                    <HandThumbUpIcon class="h-4 w-4 mr-1" />
                    <span>{{ item.Seller.liked }}</span>
                  </div>
                  <!-- ArrowsUpDownIcon + rating in blue -->
                  <div class="flex items-center text-blue-500">
                    <ArrowSmallUpIcon class="h-4 w-4 mr-1" />
                    <span>{{ item.Seller.rating }}</span>
                  </div>
                </div>
              </div>
            </div>
          </td>
          <!-- Other Columns -->
          <template v-for="header in headers">
            <td v-if="header !== 'Seller'" :key="header" class="px-6 py-4 flex-grow whitespace-nowrap">
              <div v-if="typeof item[header] === 'object'">
                <div v-for="(value, subKey) in item[header]" :key="subKey">
                  <strong>{{ subKey }}:</strong> {{ value }}
                </div>
              </div>
              <div v-else>
                <div v-if="header === 'Description'" class="text-sm w-full whitespace-pre-line">
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
    <NavPag
      :currentPage="currentPage"
      :totalPages="totalPages"
      @update:currentPage="updatePage"
    />
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

@tailwind utilities;

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
  border-top-left-radius: 0.5rem; /* Increase for a more pronounced rounding */
  border-bottom-left-radius: 0.5rem;
}

tr:hover td:last-child {
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}
</style>
