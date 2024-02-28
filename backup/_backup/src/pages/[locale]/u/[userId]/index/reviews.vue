<script lang="ts" setup>
definePageMeta({
    seo: {
        title: "Reviews",
    },
})

// let review1 = {
//     deal: "World of Warcraft, Gold, 13 038 $",
//     liked: true,
//     text: "Great seller! Quickly sent the Gold, responded promptly in chat.ts",
//     username: "Roman",
// }
//
// let review2 = {
//     deal: "Artifact, Gold, 150 $",
//     liked: false,
//     text: "Deal didn't happen, seller didn't respond",
//     username: "Roman",
// }
</script>

<template>
<v-space
    size="large"
    vertical
>
    <v-text>
        No reviews
    </v-text>
<!--    <review-card-->
<!--        v-for="n in 5"-->
<!--        :key="n"-->
<!--        :review="Boolean(n % 2) ? review1 : review2"-->
<!--    />-->
</v-space>
</template>
