<script setup lang="ts">

interface Props {
  label: string
  value: string
}

const {
  label, value
} = defineProps<Props>()

</script>

<template>
  <li class="container text-white">
    <div role="presentation" class="icon text-blue-500">
      <slot name="icon" />
    </div>
    <span class="value text-lg font-medium">
      {{ value }}
    </span>
    <span class="label text-gray-500 text-sm">
      {{ label }}
    </span>
  </li>
</template>

<style scoped>
.container {
  display: grid;
  grid-template: "icon value" "icon label";
  grid-template-columns: 2.5rem auto;
  gap: .05rem .75rem;
}

.icon {
  grid-area: icon;
}

.icon > :global(svg) {
  width: 2.5rem;
  height: 2.5rem;
}

.value {
  grid-area: value;
  line-height: 1;
}

.label {
  grid-area: label;
}
</style>
