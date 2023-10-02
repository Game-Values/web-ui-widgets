<script setup lang="ts">

</script>

<template>
  <div class="slide-container">
    <div>
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.slide-container {
  display: grid;
  grid-template-areas: "data image";
  grid-auto-columns: 1fr;
  grid-auto-rows: 1fr;
  padding: 69px 34px;

  border: 1px solid #FFFFFF1F;
  border-radius: 16px;

  background-color: #202020;

  @media (max-width: 960px) {
    grid-template-areas: "data" "image";
  }
}
</style>
