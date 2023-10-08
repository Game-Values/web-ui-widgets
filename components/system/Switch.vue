<template>
  <button
    @click="toggle"
    class="relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-300 ease-in-out"
    :class="{ 'bg-green-600': isActive, 'bg-gray-700': !isActive }"
  >
    <span
      class="inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-300 ease-in-out"
      :class="{ 'translate-x-6': isActive, '-translate-x-0': !isActive }"
    ></span>
  </button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'SwitchToggle',
  props: {
    modelValue: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const isActive = ref(props.modelValue)

    const toggle = () => {
      isActive.value = !isActive.value
      // Emitting event so parent can capture the state change
      emit('update:modelValue', isActive.value)
    }

    return {
      isActive,
      toggle
    }
  }
})
</script>
