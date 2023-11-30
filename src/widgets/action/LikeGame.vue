<script lang="ts" setup>
import type { Game } from "~/dto"

defineProps<{
    game: Game
}>()

let { userController } = useControllers()
</script>

<template>
<button-action
    v-bind="$attrs"
    :action="(
        () => userController.updateUser({
            liked_games: [
                game.id,
            ],
        })
    )"
    circle
    size="small"
    text
    type="info"
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
