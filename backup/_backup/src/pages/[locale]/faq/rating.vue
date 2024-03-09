<script lang="ts" setup>
definePageMeta({
    seo: {
        title: "Ratings and Reviews",
    },
})
</script>

<template>
<v-collapse>
    <v-collapse-panel title="How do I leave a review for a seller or item?">
        <v-text disabled>
            After completing a transaction, you will have the opportunity to rate the seller and leave a
            review about the item.
        </v-text>
    </v-collapse-panel>

    <v-collapse-panel title="Can I edit my review?">
        <v-text disabled>
            Yes, you can edit your review within 7 days after posting it.
        </v-text>
    </v-collapse-panel>
</v-collapse>
</template>
