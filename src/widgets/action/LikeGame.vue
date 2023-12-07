<script lang="ts" setup>
import type { Game } from "~/dto"

let props = defineProps<{
    game: Game
}>()

let { storeClient } = useClients()
let { userController } = useControllers()

let { user } = storeToRefs(storeClient.userMeStore)

let isGameLiked = computed((): boolean => (
    getRef(user).liked_games.likedIds.includes(props.game.id)
))

async function handleLikeGameMe(): Promise<void> {
    if (getRef(isGameLiked))
        await userController.dislikeGameMe(props.game.id)
    else
        await userController.likeGameMe(props.game.id)
}
</script>

<template>
<button-action
    v-bind="$attrs"
    :action="handleLikeGameMe"
    size="small"
    type="info"
    circle
    text
>
    <template #icon>
        <ui-icon
            v-if="isGameLiked"
            heroicons="heart"
            size="20"
            solid
        />

        <ui-icon
            v-else
            heroicons="heart"
            size="20"
        />
    </template>
</button-action>
</template>
