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
        <ui-base-icon size="20">
            <i
                :class="{
                    'i-heroicons:heart-solid': game.liked,
                    'i-heroicons:heart': !game.liked,
                }"
            />
        </ui-base-icon>
    </template>
</button-action>
</template>
