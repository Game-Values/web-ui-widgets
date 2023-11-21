<script lang="ts" setup>
import type { Game } from "~/dto"

defineProps<{
    game: Game
}>()

let { gameController } = useControllers()
</script>

<template>
<button-action
    v-bind="$attrs"
    :action="() => gameController.likeGame(game)"
    type="info"
    size="small"
    circle
    text
    @click.prevent
>
    <template #icon>
        <ui-icon
            :heroicons="(
                game.liked
                    ? 'heart-solid'
                    : 'heart'
            )"
            size="20"
        />
    </template>
</button-action>
</template>
