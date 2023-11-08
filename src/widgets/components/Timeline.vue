<script lang="ts" setup>
import type { Ref } from "vue"

let steps: string[] = [
  "Choose deal parameters",
  "Confirm the order and make the payment",
  "Confirm receipt of the item",
]

let currentStep: Ref<number> = ref(0)
</script>

<template>
<tr>
  <td colspan="2">
    <div class="px-4 py-6 flex flex-col gap-4">
      <div class="inline-flex items-center gap-2">
        <button
          :disabled="currentStep <= 0"
          :class="{
            'text-white': currentStep > 0,

            border: currentStep > 0,
          }"
          class="p-1"
          @click="currentStep -= 1"
        >
          Prev step
        </button>

        <button
          :disabled="currentStep >= steps.length"
          :class="{
            'text-white': currentStep < steps.length,

            border: currentStep < steps.length,
          }"
          class="p-1"
          @click="currentStep += 1"
        >
          Next step
        </button>

        <span class="text-white">
          Current step: {{ currentStep }}
        </span>
      </div>

      <DataTimeline
        v-model="currentStep"
      >
        <DataTimelineItem
          v-for="(step, i) in steps"
          :key="i"
        >
          {{ step }}
        </DataTimelineItem>
      </DataTimeline>
    </div>
  </td>
</tr>

<tr>
  <td colspan="2">
    <SystemCode>
      <pre>
&lt;script lang="ts" setup>
let steps: string[] = [
  "Choose deal parameters",
  "Confirm the order and make the payment",
  "Confirm receipt of the item",
]

let currentStep: Ref&lt;number> = ref(0)
&lt;/script>

&lt;template>
  &lt;DataTimeline
    v-model="currentStep"
  >
    &lt;DataTimelineItem
      v-for="(step, i) in steps"
      :key="i"
    >
      &#123;&#123; step }}
    &lt;/DataTimelineItem>
  &lt;/DataTimeline>
&lt;/template>
      </pre>
    </SystemCode>
  </td>
</tr>
</template>
