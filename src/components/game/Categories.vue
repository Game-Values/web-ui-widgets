<script lang="ts" setup>
// import type { Game } from "~/dto"

// todo: game dto
defineProps<{
    // game: Game
    categoriesMock: { count: number, label: string }[]
}>()
</script>

<template>
<ui-layout-space>
    <ui-data-tag
        v-for="category in categoriesMock"
        :key="category.label"
        circle
    >
        <ui-layout-space>
            <ui-typography-text>
                {{ category.label }}
            </ui-typography-text>

            <ui-typography-text
                class="
                    bg-secondary
                    px-3
                    rounded-12
                "
            >
                {{ category.count }}
            </ui-typography-text>
        </ui-layout-space>
    </ui-data-tag>
</ui-layout-space>
</template>

<style lang="sass" scoped>
// :deep(.vxp-badge-vars)
//     --vxp-badge-bg-color: theme("colors.secondary")
</style>
