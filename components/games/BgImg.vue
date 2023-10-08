<template>
  <div
    class="relative bg-no-repeat bg-cover h-[394px] bg-gradient-to-b from-black to-black"
    :style="backgroundImage"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  props: {
    imagePath: {
      type: String,
      default: '/game_cover.png'
    }
  },
  setup(props) {
    const backgroundImage = computed(() => ({
      backgroundImage: `url(${props.imagePath})`
    }));

    return { backgroundImage };
  }
});
</script>
