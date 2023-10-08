<template>
  <div :class="['action-button', variant]">
    {{ label }}
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
    variant: {
      type: String,
      default: 'default'
    }
  }
});
</script>
