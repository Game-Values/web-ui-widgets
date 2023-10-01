<script setup lang="ts">

</script>

<template>
  <ul>
    <slot />
  </ul>
</template>

<style scoped>
ul {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(var(--info-list-columns, 1), 1fr);
  gap: 1rem;
}
</style>
