<script lang="ts" setup>
let { storeClient } = useClients()

let { game } = storeToRefs(storeClient.gameStore)
</script>

<template>
<ui-overlay
    :style="{
        position: 'absolute',
        top: '-7rem',
    }"
    height="500"
>
    <ui-image :src="game.image" />

    <template #overlay>
        <div
            class="
                fit
                bg-gradient-to-b
                from-black
                from-0%
            "
        />
    </template>
</ui-overlay>
</template>
