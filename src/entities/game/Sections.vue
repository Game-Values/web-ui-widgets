<script lang="ts" setup>
let { storeClient } = useClients()

let { game } = storeToRefs(storeClient.gameStore)
</script>

<template>
<v-space>
    <ui-tag-link
        v-for="section in game.attributes.sections"
        :key="section.name"
        :type="(
            section.isActive
                ? 'primary'
                : 'default'
        )"
        :to="section.gameRoute"
        circle
    >
        <v-space>
            <v-text>
                {{ section.name }}
            </v-text>

            <v-text
                class="
                    bg-secondary
                    px-2
                    rounded-12
                "
            >
                {{ section.count }}
            </v-text>
        </v-space>
    </ui-tag-link>
</v-space>
</template>
