<script lang="ts" setup>
let { storeClient } = useClients()

let { game } = storeToRefs(storeClient.gameStore)
</script>

<template>
<v-space>
    <v-tag
        v-for="section in game.attributes.sections.items"
        :key="section.name"
        circle
    >
        <v-space>
            <v-text>
                {{ section.name }}
            </v-text>

            <v-text
                class="
                    bg-secondary
                    px-3
                    rounded-12
                "
            >
                {{ section.count }}
            </v-text>
        </v-space>
    </v-tag>
</v-space>
</template>
