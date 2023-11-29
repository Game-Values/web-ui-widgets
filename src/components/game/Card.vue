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
        'liked': false,
    }]"
>
    <ui-link
        :to="useGameRoute(game.id)"
        class="relative fit"
    >
        <v-space vertical>
            <game-icon
                :game="game"
                height="136"
            />

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
            v-if="game.attributes.lots"
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
            {{ game.attributes.lots }}
        </v-tag>
    </ui-link>
</v-card>
</template>
