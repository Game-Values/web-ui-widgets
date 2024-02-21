<script lang="ts">
import type { IGame } from "$schema/api"

import { useGame } from "~/entities/game"
import { useUser } from "~/entities/user"

import { useSession } from "$model"

import IconHeart from "virtual:icons/heroicons/heart"
import IconHeartSolid from "virtual:icons/heroicons/heart-solid"

interface $$Props {
    class?: string
    game: IGame
}

let className: string = ""

let game: IGame

let { dislikeGame, gameLiked, likeGame } = useGame(game)
let { updateSession, user } = useSession()
let { addLikedGame, deleteLikedGame } = useUser($user)

async function gameLikeToggle(): Promise<void> {
    if ($gameLiked) {
        await dislikeGame()

        deleteLikedGame(game)
    } else {
        await likeGame()

        addLikedGame(game)
    }

    updateSession({ user: $user })
}

export {
    className as class,
    game,
}
</script>

<label
    class="
        btn btn-circle btn-ghost btn-sm
        swap swap-rotate
        tooltip
        text-lg
        {className}
    "
    data-tip={`${$gameLiked ? "Dislike" : "Like"} ${game.name}`}
>
    <input
        checked={$gameLiked}
        type="checkbox"
        on:change={gameLikeToggle}
    />

    <IconHeartSolid
        class="
            swap-on
            absolute
            text-negative-light
        "
    />

    <IconHeart
        class="
            swap-off
            absolute
            text-info
        "
    />
</label>
