<template>
  <div>
    <input
      v-model="searchQuery"
      @input="handleSearch"
      class="w-full sm:flex sm:items-center p-2 border rounded-md"
      placeholder="Search..."
    />
  </div>
</template>


<script>
import { ref, onMounted, watch } from 'vue';

export default {
  props: {
    htmlTableId: String,
  },
  setup(props) {
    const searchQuery = ref('');
    const targetTable = ref(null);

    onMounted(() => {
      targetTable.value = document.getElementById(props.htmlTableId);
    });

    // Watch for changes in searchQuery
    watch(searchQuery, (newVal) => {
      if (targetTable.value) {
        const trigrams = newVal.match(/.{1,3}/ig) || [];

        Array.from(targetTable.value.rows).forEach((row, rowIndex) => {
          // Exclude the header row from hiding
          if (rowIndex === 0) {
            row.style.display = '';
            return; // Skip the header row
          }

          const cells = Array.from(row.cells).map((cell) => cell.innerText);
          const match = trigrams.every((trigram) =>
            cells.some((cell) => cell.match(new RegExp(trigram, 'i')))
          );

          // Show or hide the row based on the matching result
          row.style.display = match ? '' : 'none';
        });
      }
    });

    return {
      searchQuery,
    };
  },
};
</script>
