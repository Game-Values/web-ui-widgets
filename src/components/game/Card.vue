<script lang="ts" setup>
import type { Game } from "~/dto"

defineProps<{
    game: Game
}>()
</script>

<template>
<ui-form-card :id="game.id">
    <ui-base-link
        :href="game.url"
        class="group fit"
    >
        <ui-layout-space
            :size="remToNumber(useThemeSpace(4))"
            vertical
        >
            <ui-effect-mouse-light
                class="
                    h-13.6rem
                    w-full
                    border-solid-secondary
                    rounded-3
                    transition-colors
                    group-hover:(bg-secondary)
                "
            >
                <ui-base-icon :name="`custom:${game.icon}`" />
            </ui-effect-mouse-light>

            <ui-typography-title :level="4">
                {{ game.name }}
            </ui-typography-title>
        </ui-layout-space>
    </ui-base-link>
</ui-form-card>
</template>
