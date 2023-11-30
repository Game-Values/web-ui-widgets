<script lang="ts" setup>
import type { Game } from "~/dto"

let props = defineProps<{
    game: Game
}>()

let { storeClient } = useClients()
let { userController } = useControllers()

let { user } = storeToRefs(storeClient.meStore)

let isGameLiked = computed((): boolean => (
    getRef(user).liked_games.includes(props.game.id)
))

async function handleLikeGame(): Promise<void> {
    if (getRef(isGameLiked))
        await userController.likeGame(props.game.id)
    else
        await userController.dislikeGame(props.game.id)
}
</script>

<template>
<button-action
    v-bind="$attrs"
    :action="handleLikeGame"
    circle
    size="small"
    text
    type="info"
>
    <template #icon>
        <ui-icon
            v-if="isGameLiked"
            heroicons="heart-solid"
            size="20"
        />

        <ui-icon
            v-else
            heroicons="heart"
            size="20"
        />
    </template>
</button-action>
</template>
