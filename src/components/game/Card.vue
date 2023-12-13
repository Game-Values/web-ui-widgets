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
        :to="game.route"
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

                <widget-action-like-game
                    v-if="isAuthenticated()"
                    :game="game"
                    @click.prevent
                />
            </v-space>
        </v-space>

        <v-tag
            v-if="game.attributes.lots"
            class="
                absolute!
                top-2.5
                right-2.5
                text-sm
            "
            :color="useTheme('colors.secondary')"
            size="small"
            circle
        >
            {{ game.attributes.lots }}
        </v-tag>
    </ui-link>
</v-card>
</template>
