<template>
  <div class="bg-gray-800">
    <div class="mx-auto max-w-7xl px-6 py-24 sm:py-10 lg:px-8 lg:py-10">
      <div class="mx-auto max-w-4xl divide-y divide-blue-900/10">
        <h2 class="text-2xl font-bold leading-10 tracking-tight text-white text-opacity-60">Frequently asked questions</h2>
        <dl class="mt-10 space-y-6 divide-y divide-blue-900/10">
          <Disclosure v-for="qna in qnas" :key="qna.question" v-slot="{ open }" as="div" class="pt-6">
            <dt>
              <DisclosureButton class="flex w-full items-start justify-between text-left text-white text-opacity-60">
                <span class="text-base font-semibold leading-7">{{ qna.question }}</span>
                <span class="ml-6 flex h-7 items-center">
                  <PlusSmallIcon v-if="!open" aria-hidden="true" class="h-6 w-6" />
                  <MinusSmallIcon v-else aria-hidden="true" class="h-6 w-6" />
                </span>
              </DisclosureButton>
            </dt>
            <DisclosurePanel as="dd" class="mt-2 pr-12">
              <p class="text-base leading-7 text-blue-600">{{ qna.answer }}</p>
            </DisclosurePanel>
          </Disclosure>
        </dl>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/vue/20/solid"
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue"

export default defineComponent({
  components: {
    MinusSmallIcon,
    PlusSmallIcon,
    Disclosure,
    DisclosureButton,
    DisclosurePanel
  },
  props: {
    qnas: {
      type: Array,
      required: true
    }
  }
})
</script>
