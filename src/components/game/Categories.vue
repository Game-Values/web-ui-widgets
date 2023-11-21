<script lang="ts" setup>
// import type { Game } from "~/dto"

// todo: game dto
defineProps<{
    // game: Game
    categoriesMock: { count: number, label: string }[]
}>()
</script>

<template>
<v-space>
    <v-tag
        v-for="category in categoriesMock"
        :key="category.label"
        circle
    >
        <v-space>
            <v-text>
                {{ category.label }}
            </v-text>

            <v-text
                class="
                    bg-secondary
                    px-3
                    rounded-12
                "
            >
                {{ category.count }}
            </v-text>
        </v-space>
    </v-tag>
</v-space>
</template>

<style lang="sass" scoped>
// :deep(.vxp-badge-vars)
//     --vxp-badge-bg-color: theme("colors.secondary")
</style>
