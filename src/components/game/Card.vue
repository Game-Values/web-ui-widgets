<script lang="ts" setup>
import type { Game } from "~/dto"

defineProps<{
    game: Game
}>()
</script>

<template>
<ui-form-card
    :id="game.id"
    :class="['group', {
        'liked': game.liked,
    }]"
>
    <ui-base-link
        :to="useGameRoute(game.slug).fullPath"
        class="relative fit"
    >
        <ui-layout-space
            :size="remToNumber(useThemeSpace(4))"
            class="flex-1"
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
                    group-[.liked]:(bg-gradient-to-b from-accent-medium from-0% to-accent-medium-light to-100%)
                    hover-group-[.liked]:(bg-accent-medium)!
                "
            >
                <ui-base-icon
                    :custom="game.icon"
                    :style="`
                        --vpx-icon-width: 100%;
                        --vpx-icon-height: 100%;
                    `"
                />
            </ui-effect-mouse-light>

            <ui-layout-space
                class="flex-1"
                justify="space-between"
                no-wrap
            >
                <ui-typography-title :level="4">
                    {{ game.name }}
                </ui-typography-title>

                <widget-action-like-game :game="game" />
            </ui-layout-space>
        </ui-layout-space>

        <ui-data-tag
            v-if="game.count"
            :color="useThemeColor('secondary')"
            size="small"
            class="
                absolute!
                top-2.5
                right-2.5
                text-sm
            "
            circle
        >
            {{ game.count }}
        </ui-data-tag>
    </ui-base-link>
</ui-form-card>
</template>
