<template>
<div class="bg-gray-800">
    <ui-layout-content class="mx-auto px-6 py-24 sm:py-10 lg:px-8 lg:py-10">
        <div class="mx-auto max-w-4xl divide-y divide-blue-900/10 divide-solid">
            <h2 class="text-level-3 font-bold leading-10 tracking-tight text-white text-opacity-60">
                Frequently asked questions
            </h2>
            <dl class="mt-10 space-y-6 divide-y divide-blue-900/10 divide-solid">
                <ui-headless-disclosure :key="qna.question" as="div" class="pt-6" v-for="qna in qnas" v-slot="{ open }">
                    <dt>
                        <ui-headless-disclosure-button class="flex w-full items-start justify-between text-left text-white text-opacity-60">
                            <span class="text-base font-semibold leading-7">{{ qna.question }}</span>
                            <span class="ml-6 flex h-7 items-center">
                                <ui-icon-minus-small
                                    v-if="open"
                                    size="24"
                                />

                                <ui-icon-plus-small
                                    v-else
                                    size="24"
                                />
                            </span>
                        </ui-headless-disclosure-button>
                    </dt>
                    <ui-headless-disclosure-panel as="dd" class="mt-2 pr-12">
                        <p class="text-base leading-7 text-blue-600">
                            {{ qna.answer }}
                        </p>
                    </ui-headless-disclosure-panel>
                </ui-headless-disclosure>
            </dl>
        </div>
    </ui-layout-content>
</div>
</template>

<script lang="ts">
export default defineComponent({
    props: {
        qnas: {
            required: true,
            type: Array,
        },
    },
})
</script>
