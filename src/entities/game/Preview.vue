<script lang="ts" setup>
let { storeClient } = useClients()

let { game } = storeToRefs(storeClient.gameStore)
</script>

<template>
<ui-image
    :src="`/images/${useKebabCase(game.name)}.png`"
    height="500"
/>
</template>
