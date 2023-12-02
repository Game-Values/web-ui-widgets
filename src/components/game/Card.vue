<script lang="ts" setup>
import type { Game } from "~/dto"

defineProps<{
    game: Game
    liked: boolean
}>()
</script>

<template>
<v-card
    :class="['group', {
        'liked': liked,
    }]"
    :id="game.id"
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

                <widget-wrapper-auth-only>
                    <widget-action-like-game
                        :game="game"
                        @click.prevent
                    />
                </widget-wrapper-auth-only>
            </v-space>
        </v-space>

        <v-tag
            v-if="game.attributes.lots"
            :color="useTheme('colors.secondary')"
            size="small"
            circle
            class="
                absolute!
                top-2.5
                right-2.5
                text-sm
            "
        >
            {{ game.attributes.lots }}
        </v-tag>
    </ui-link>
</v-card>
</template>
