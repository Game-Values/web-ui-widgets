<script lang="ts" setup>
definePageMeta({
    seo: {
        title: "Payment and Returns",
    },
})
</script>

<template>
<v-collapse>
    <v-collapse-panel title="What payment methods do you accept?">
        <v-text disabled>
            We accept most major credit cards, as well as payment systems such as WebMoney, VISA,
            and others.
        </v-text>
    </v-collapse-panel>

    <v-collapse-panel title="How does the refund process work?">
        <v-text disabled>
            If you are not satisfied with a purchase, contact the seller or support service to discuss return
            or replacement options.
        </v-text>
    </v-collapse-panel>
</v-collapse>
</template>
