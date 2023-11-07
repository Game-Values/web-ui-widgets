<template>
<div class="bg-gray-800">
    <div class="mx-auto max-w-7xl px-6 py-24 sm:py-10 lg:px-8 lg:py-10">
        <div class="mx-auto max-w-4xl divide-y divide-blue-900/10">
            <h2 class="text-2xl font-bold leading-10 tracking-tight text-white text-opacity-60">
                Frequently asked questions
            </h2>
            <dl class="mt-10 space-y-6 divide-y divide-blue-900/10">
                <disclosure :key="qna.question" as="div" class="pt-6" v-for="qna in qnas" v-slot="{ open }">
                    <dt>
                        <disclosure-button class="flex w-full items-start justify-between text-left text-white text-opacity-60">
                            <span class="text-base font-semibold leading-7">{{ qna.question }}</span>
                            <span class="ml-6 flex h-7 items-center">
                                <plus-small-icon aria-hidden="true" v-if="!open" class="h-6 w-6"/>
                                <minus-small-icon aria-hidden="true" v-else class="h-6 w-6"/>
                            </span>
                        </disclosure-button>
                    </dt>
                    <disclosure-panel as="dd" class="mt-2 pr-12">
                        <p class="text-base leading-7 text-blue-600">
                            {{ qna.answer }}
                        </p>
                    </disclosure-panel>
                </disclosure>
            </dl>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue"
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/vue/20/solid"
import { defineComponent } from "vue"

export default defineComponent({
    components: {
        Disclosure,
        DisclosureButton,
        DisclosurePanel,
        MinusSmallIcon,
        PlusSmallIcon,
    },
    props: {
        qnas: {
            required: true,
            type: Array,
        },
    },
})
</script>
