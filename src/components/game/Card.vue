<script lang="ts" setup>
import type { Game } from "~/dto"

defineProps<{
    game: Game
}>()
</script>

<template>
<v-card
    :id="game.id"
    :class="['group', {
        'liked': game.liked,
    }]"
>
    <ui-link
        :to="useGameRoute(game.slug).fullPath"
        class="relative fit"
    >
        <v-space vertical>
            <ui-mouse-light
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
                <ui-icon
                    :custom="game.icon"
                    :style="`
                        --vpx-icon-width: 100%;
                        --vpx-icon-height: 100%;
                    `"
                />
            </ui-mouse-light>

            <v-space
                justify="space-between"
                no-wrap
            >
                <v-title :level="4">
                    {{ game.name }}
                </v-title>

                <widget-action-like-game :game="game" />
            </v-space>
        </v-space>

        <v-tag
            v-if="game.count"
            :color="useTheme('colors.secondary')"
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
        </v-tag>
    </ui-link>
</v-card>
</template>
