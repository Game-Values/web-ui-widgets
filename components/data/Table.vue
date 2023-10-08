<script lang="ts">
import { defineComponent, PropType } from "vue"

export default defineComponent({
  props: {
    data: {
      type: Array as PropType<Array<Record<string, any>>>,
      required: true
    }
  },
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 9,
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
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--
      }
    }
  }
})
</script>

<template>
  <div class="min-w-full divide-y divide-gray-200">
    <div class="min-w-full divide-y divide-solarized-base1 bg-solarized-base03 p-6 rounded-lg shadow-lg">
      <table class="min-w-full w-full table-fixed">
        <thead class="text-solarized-base0">
        <tr>
          <!-- Seller Column Title -->
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Seller
          </th>
          <!-- Other Columns Titles -->
          <th v-for="key in headers" v-if="key !== 'Seller'" :key="key"
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            {{ key }}
          </th>
        </tr>
        </thead>
        <tbody class="text-solarized-base1">
        <tr v-for="item in paginatedData" :key="JSON.stringify(item)">
          <!-- Seller Column -->
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="flex">
              <!-- Left Column: Logo and Name -->
              <div class="flex-shrink-0 flex flex-col items-center mr-4">
                <img :src="'/userlogo.jpg'" class="h-8 w-8 rounded-full" alt="User Image" />
                <span class="mt-2">{{ item.Seller.name }}</span>
              </div>
              <!-- Right Column: Deals, Likes, and Rating -->
              <div class="flex-grow flex flex-col justify-between">
                <div>{{ item.Seller.deals }} deals</div>
                <div>{{ item.Seller.liked }} {{ item.Seller.rating }}</div>
              </div>
            </div>
          </td>
          <!-- Other Columns -->
          <td v-for="key in headers" v-if="key !== 'Seller'" :key="key" class="px-6 py-4 whitespace-nowrap">
            <div v-if="typeof item[key] === 'object'">
              <div v-for="(value, subKey) in item[key]" :key="subKey">
                <strong>{{ subKey }}:</strong> {{ value }}
              </div>
            </div>
            <div v-else>
              {{ item[key] }}
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>

    <!-- Pagination Controls -->
    <div class="mt-6 flex justify-center bg-solarized-base03 p-4 rounded-lg shadow-md">
      <div class="mt-4 flex justify-center bg-gray-800 p-4 rounded">
        <button
          @click="prevPage"
          :disabled="currentPage === 1"
          class="px-4 py-2 mr-2 bg-transparent text-neon-blue border-2 border-neon-blue hover:bg-neon-blue hover:text-gray-800 rounded transition duration-300"
          :class="{ 'opacity-50': currentPage === 1 }">Prev
        </button>
        <span class="self-center text-neon-blue mx-4">{{ currentPage }} / {{ totalPages }}</span>
        <button
          @click="nextPage"
          :disabled="currentPage === totalPages"
          class="px-4 py-2 ml-2 bg-transparent text-neon-blue border-2 border-neon-blue hover:bg-neon-blue hover:text-gray-800 rounded transition duration-300"
          :class="{ 'opacity-50': currentPage === totalPages }">Next
        </button>
      </div>
    </div>

  </div>
</template>

<style>
@layer utilities {
  .text-neon-blue {
    color: #00d9ff;
  }

  .border-neon-blue {
    border-color: #00d9ff;
  }

  .hover\:bg-neon-blue:hover {
    background-color: #00d9ff;
  }

  .bg-solarized-base03 {
    background-color: #002b36;
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
  border-color: #00d9ff;
}

.hover\:bg-neon-blue:hover {
  background-color: #00d9ff;
}

table {
  width: 100%;
  table-layout: fixed;
}

th, td {
  width: calc(100% / 6); /* I assumed 6 columns for this example. Adjust as needed. */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

html {
  overflow-y: scroll; /* This will always show the vertical scrollbar */
}
</style>
