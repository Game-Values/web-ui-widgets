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
      default: '/web-ui-widgets/game_cover.png'
    },
    shiftAmount: {
      type: String,
      default: '70%'
    }
  },
  setup(props) {
    const backgroundImage = computed(() => {
      console.log(`url(${props.imagePath})`);  // Log to ensure imagePath is correct
      console.log(`center ${props.shiftAmount}`);  // Log to see the shiftAmount
      return {
        backgroundImage: `url(${props.imagePath})`,
        backgroundPosition: `center ${props.shiftAmount}`
      };
    });


    return { backgroundImage };
  }
});
</script>
