<script lang="ts" setup>
// todo: mv all faqs to json files & use this component

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
<v-space vertical>
    <v-title :level="2">
        {{ title }}
    </v-title>

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
</v-space>
</template>
