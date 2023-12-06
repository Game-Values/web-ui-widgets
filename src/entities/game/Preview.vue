<script lang="ts" setup>
let { storeClient } = useClients()

let { game } = storeToRefs(storeClient.gameStore)
</script>

<template>
<ui-image
    :src="game.image"
    height="500"
/>
</template>
