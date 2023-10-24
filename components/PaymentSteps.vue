<template>
  <div class="flex flex-col space-y-4 w-full items-center">
    <div class="flex items-center relative w-full">
      <!-- Connecting line for steps -->
      <div
        class="absolute h-[2px] bg-blue-500 z-0"
        :style="lineStyles"
        ref="circle"
        style="top: 50%; transform: translateY(calc(50% - 15px));">
      </div>

      <div
        v-for="step in steps"
        :key="step.number"
        class="flex flex-col items-center flex-grow z-10">
        <div
          :class="stepClass(step.number)"
          class="w-[38px] md:w-[48px] h-[38px] md:h-[48px] rounded-full shadow flex justify-center items-center">
          <!-- Check icon for previous steps -->
          <div v-if="step.number < currentStep" class="text-white text-xl md:text-2xl">
            <CheckIcon class="h-5 w-5 md:h-6 md:w-6" />
          </div>
          <!-- Step number for current and upcoming steps -->
          <div v-else :class="stepTextClass(step.number)" class="text-xs md:text-xl font-semibold">
            {{ step.number }}
          </div>
        </div>
        <div :class="descriptionTextClass(step.number)" class="mt-2 text-xs md:text-sm leading-tight text-center">
          {{ step.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { CheckIcon } from '@heroicons/vue/24/solid/esm';

interface Step {
  number: number;
  description: string;
}

export default defineComponent({
  components: {
    CheckIcon
  },
  props: {
    currentStep: {
      type: Number,
      required: true,
      validator: (value: number) => [1, 2, 3].includes(value),
    },
  },

  setup(props) {
    const steps: Step[] = [
      { number: 1, description: 'Choose deal parameters' },
      { number: 2, description: 'Confirm the order and make the payment' },
      { number: 3, description: 'Confirm receipt of the item' },
    ];

    const lineStyles = computed(() => {
      let percentage = 100 / (2 * steps.length);
      return {
        left: `${percentage - 1}%`,
        right: `${percentage}%`
      };
    });

    function stepClass(stepNumber: number): string {
      const baseClasses = ['w-[38px] h-[38px] rounded-full shadow flex justify-center items-center'];
      if (stepNumber < props.currentStep) {
        baseClasses.push('bg-blue-500', 'border-2', 'border-white', 'border-opacity-10');
      } else if (stepNumber === props.currentStep) {
        baseClasses.push('bg-blue-500', 'border-2', 'border-white', 'border-opacity-10');
      } else {
        baseClasses.push('bg-zinc-100', 'border-2', 'border-zinc-300', 'border-opacity-60');
      }
      return baseClasses.join(' ');
    }

    function stepTextClass(stepNumber: number): string {
      return stepNumber <= props.currentStep ? 'text-white' : 'text-zinc-900';
    }

    function descriptionTextClass(stepNumber: number): string {
      return stepNumber <= props.currentStep ? 'text-white font-semibold' : 'text-zinc-300 font-normal';
    }

    return {
      steps,
      lineStyles,
      stepClass,
      stepTextClass,
      descriptionTextClass,
    };
  },
});
</script>

