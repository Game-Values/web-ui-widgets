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
        <ui-layout-space
            :size="remToPx(useThemeSpace(4), false)"
            vertical
        >
            <div class="w-full h-13.6rem border-solid-secondary rounded-3">
                <ui-base-icon :name="`custom:${game.icon}`" />
            </div>

            <ui-typography-title :level="4">
                {{ game.name }}
            </ui-typography-title>
        </ui-layout-space>

        <template
            #overlay
        >
            <ui-base-link
                :href="game.url"
                class="relative fit"
            >
                <div
                    v-show="game.count"
                    :class="`
                        absolute
                        top-2.5
                        left-[calc(100%-${useThemeSpace(2.5)})]
                        -translate-x-full
                        text-sm
                        -tracking-[0.012rem]
                    `"
                >
                    <ui-data-tag
                        :color="useThemeColor('secondary')"
                        circle
                    >
                        {{ game.count }}
                    </ui-data-tag>
                </div>
            </ui-base-link>
        </template>
    </ui-effect-overlay>
</ui-form-card>
</template>
