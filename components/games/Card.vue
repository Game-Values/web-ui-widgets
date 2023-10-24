<template>
  <div class="px-4 sm:px-6 lg:px-8 py-10 bg-white bg-opacity-0 rounded-xl border border-white border-opacity-10 backdrop-blur-md flex flex-col justify-start items-start gap-6 lg:gap-8 max-w-full">

    <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full">
      <div class="text-white text-3xl sm:text-4xl font-bold font-sans mb-2 lg:mb-0">ArcheAge: Unchained</div>
      <div class="flex items-center gap-2">
        <div class="text-white text-lg font-semibold font-sans">In Favorites</div>
        <div class="w-5 h-5 relative"></div>
      </div>
    </div>

    <div class="text-white font-normal font-sans leading-normal mt-2 mb-4 w-full sm:max-w-3xl">We offer to buy ArcheAge Unchained gold (EU and NA) on Game Values. Sellers are real players, and transactions are made without intermediaries and are protected by a security guarantee system (sellers are paid only after orders are completed).</div>

    <div class="flex flex-col lg:flex-row justify-between items-start w-full">
      <div class="h-20 flex gap-2 mb-4 lg:mb-0">
        <GamesActionBtn :buttons="buttons" />
      </div>

      <div class="flex flex-col lg:flex-row gap-2 w-full lg:w-auto">
        <div class="flex px-5 sm:px-7 py-3 bg-white bg-opacity-10 rounded-lg items-center gap-2 sm:gap-3 w-full sm:w-auto justify-center">
          <div class="text-white text-lg font-semibold font-sans">+Add Section</div>
        </div>
        <div class="flex px-5 sm:px-7 py-3 bg-blue-500 rounded-lg items-center gap-2 sm:gap-3 w-full sm:w-auto justify-center mt-2 lg:mt-0 lg:ml-2">
          <div class="text-white text-lg font-semibold font-sans">Sell</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'GameCard',
  props: {
    buttons: {
      type: Array,
      required: true,
    },
  },
});
</script>
