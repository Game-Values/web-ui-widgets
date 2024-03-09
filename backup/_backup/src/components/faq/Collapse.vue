<script lang="ts" setup>
// todo: mv all faqs to json files & user this component

withDefaults(defineProps<{
    faq?: {
        answer: string
        question: string
    }[]
    title?: string
}>(), {
    title: "FAQ",
})
</script>

<template>
<v-collapse>
    <v-collapse-panel
        style="
            --vxp-collapse-content-v-padding: 0;
            --vxp-collapse-content-h-padding: 0;
            --vxp-collapse-header-bg-color: transparent;
        "
    >
        <template #title>
            <v-title :level="2">
                {{ title }}
            </v-title>
        </template>

        <slot>
            <v-collapse v-if="faq?.length">
                <v-collapse-panel
                    v-for="faqItem in faq"
                    :key="faqItem.question"
                    :title="faqItem.question"
                >
                    <v-text disabled>
                        {{ faqItem.answer }}
                    </v-text>
                </v-collapse-panel>
            </v-collapse>
        </slot>
    </v-collapse-panel>
</v-collapse>
</template>

<style lang="sass" scoped>
.vxp-collapse :deep(> .vxp-collapse__panel > .vxp-collapse__header)
    @apply pl-0
</style>
