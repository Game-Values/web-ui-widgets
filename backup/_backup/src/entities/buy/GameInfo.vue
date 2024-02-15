<script lang="ts" setup>
let { storeClient } = useClients()

let { game } = storeToRefs(storeClient.gameStore)
</script>

<template>
<v-space vertical>
    <v-title :level="3">
        {{ game.name }}
    </v-title>

    <v-text>
        In-game currency is a special form of currency used within the game for purchases,
        trading, upgrades, and other in-game purposes.
    </v-text>
</v-space>
</template>
