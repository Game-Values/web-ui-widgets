<template>
  <nav aria-label="Progress">
    <ol class="divide-y divide-blue-300 rounded-md border border-blue-300 md:flex md:divide-y-0" role="list">
      <li v-for="(step, stepIdx) in steps" :key="step.name" class="relative md:flex md:flex-1">
        <a v-if="step.status === 'complete'" :href="step.href" class="group flex w-full items-center">
          <span class="flex items-center px-6 py-4 text-sm font-medium">
            <span
              class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-600 group-hover:bg-indigo-800">
              <CheckIcon aria-hidden="true" class="h-6 w-6 text-white" />
            </span>
            <span class="ml-4 text-sm font-medium text-blue-900">{{ step.name }}</span>
          </span>
        </a>
        <a v-else-if="step.status === 'current'" :href="step.href"
           aria-current="step" class="flex items-center px-6 py-4 text-sm font-medium">
          <span
            class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-indigo-600">
            <span class="text-indigo-600">{{ step.id }}</span>
          </span>
          <span class="ml-4 text-sm font-medium text-indigo-600">{{ step.name }}</span>
        </a>
        <a v-else :href="step.href" class="group flex items-center">
          <span class="flex items-center px-6 py-4 text-sm font-medium">
            <span
              class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-blue-300 group-hover:border-blue-400">
              <span class="text-blue-500 group-hover:text-blue-900">{{ step.id }}</span>
            </span>
            <span class="ml-4 text-sm font-medium text-blue-500 group-hover:text-blue-900">{{ step.name }}</span>
          </span>
        </a>
        <template v-if="stepIdx !== steps.length - 1">
          <!-- Arrow separator for lg screens and up -->
          <div aria-hidden="true" class="absolute right-0 top-0 hidden h-full w-5 md:block">
            <svg class="h-full w-full text-blue-300" fill="none" preserveAspectRatio="none" viewBox="0 0 22 80">
              <path d="M0 -2L20 40L0 82" stroke="currentcolor" stroke-linejoin="round"
                    vector-effect="non-scaling-stroke" />
            </svg>
          </div>
        </template>
      </li>
    </ol>
  </nav>
</template>


<script lang="ts">
import { defineComponent } from "vue"
import { CheckIcon } from "@heroicons/vue/20/solid"

export default defineComponent({
  components: {
    CheckIcon,
  },
  props: {
    steps: {
      type: Array,
      required: true
    }
  }
})
</script>
