<script lang="ts" setup>
let { storeClient } = useClients()

// todo: model or collection
let { game } = storeToRefs(storeClient.gameStore)
</script>

<template>
<v-space>
    <ui-link-tag
        v-for="gameSection in game.attributes.sections"
        :key="gameSection.name"
        :type="(
            gameSection.isActive
                ? 'primary'
                : 'default'
        )"
        :to="gameSection.gameRoute"
        circle
    >
        <v-space>
            <v-text>
                {{ gameSection.name }}
            </v-text>

            <v-text
                class="
                    bg-secondary
                    px-2
                    rounded-12
                "
            >
                {{ gameSection.count }}
            </v-text>
        </v-space>
    </ui-link-tag>
</v-space>
</template>
