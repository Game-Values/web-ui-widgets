<script lang="ts" setup>
definePageMeta({
    seo: {
        title: "Storefront",
    },
})

let { storeClient } = useClients()

let { games } = storeToRefs(storeClient.gamesStore)
let { items } = storeToRefs(storeClient.itemsStore)
</script>

<template>
<user-lots
    :games="games"
    :items="items"
/>
</template>
