<script setup lang="ts">
interface Props {
    label: string
    value: string
}

defineProps<Props>()
</script>

<template>
<li class="container text-white">
    <div class="icon text-primary" role="presentation">
        <slot name="icon"/>
    </div>
    <span class="value text-lg font-medium">
        {{ value }}
    </span>
    <span class="label text-gray-500">
        {{ label }}
    </span>
</li>
</template>

<style scoped>
.container {
  display: grid;
  grid-template: "icon value" "icon label";
  grid-template-columns: 4rem auto;
  gap: 0.08rem 1.2rem;
}

.icon {
  grid-area: icon;
}

.icon > :global(svg) {
  width: 4rem;
  height: 4rem;
}

.value {
  grid-area: value;
  line-height: 1;
}

.label {
  grid-area: label;
}
</style>
