<script lang="ts" setup>
import type { Game } from "~/dto"

interface Props {
    game: Game
}

defineProps<Props>()
</script>

<template>
<ui-form-card
    :id="game.id"
>
    <ui-effect-overlay>
        <ui-base-link class="fit">
            <ui-layout-space
                class="w-full"
                vertical
            >
                <div class="w-full h-13.6rem border-solid-secondary rounded-3">
                    <ui-base-icon :name="`custom:${game.icon}`" />
                </div>

                <ui-typography-title :level="4">
                    {{ game.name }}
                </ui-typography-title>
            </ui-layout-space>
        </ui-base-link>

        <template
            #overlay
        >
            <!-- <ui-data-tag
                circle
                class="top-2.5 rigth-2.5"
            >
                {{ game.count }}
            </ui-data-tag> -->
        </template>
    </ui-effect-overlay>
</ui-form-card>
</template>
