<template>
  <div :class="['flex-button', bgColor]">
    <div class="label">{{ label }}</div>
    <div class="count-container">
      <div class="count">{{ count }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    label: {
      type: String,
      required: true
    },
    count: {
      type: Number,
      default: 0
    },
    bgColor: {
      type: String,
      default: ''
    }
  }
});
</script>
