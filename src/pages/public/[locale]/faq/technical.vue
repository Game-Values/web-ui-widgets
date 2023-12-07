<script lang="ts" setup>
definePageMeta({
    seo: {
        title: "Technical Information",
    },
})
</script>

<template>
<v-collapse>
    <v-collapse-panel title="What should I do if I encounter a technical problem?">
        <v-text disabled>
            Try refreshing the page or logging out and back into your account. If the problem persists,
            contact support through the feedback form on the site.
        </v-text>
    </v-collapse-panel>

    <v-collapse-panel title="Supported browsers and system requirements?">
        <v-text disabled>
            We recommend using the latest versions of Chrome, Firefox, Safari, or Edge browsers for
            optimal platform performance.
        </v-text>
    </v-collapse-panel>
</v-collapse>
</template>
