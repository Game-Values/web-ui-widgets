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
let { updateSession, user: sessionUser } = useSession()
let { addLikedGame, deleteLikedGame } = useUser($sessionUser)

async function gameLikeToggle(): Promise<void> {
    if ($gameLiked) {
        await dislikeGame()

        deleteLikedGame(game)
    } else {
        await likeGame()

        addLikedGame(game)
    }

    updateSession({ user: $sessionUser })
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
        {className}
    "
    data-tip={`${$gameLiked ? "Dislike" : "Like"} ${game.name}`}
>
    <input
        checked={$gameLiked}
        type="checkbox"
        on:change={gameLikeToggle}
    />

    <strong class="swap-on absolute flex items-center">
        <i class="icon text-negative-light">
            <IconHeartSolid />
        </i>
    </strong>

    <strong class="swap-off absolute flex items-center">
        <i class="icon text-info">
            <IconHeart />
        </i>
    </strong>
</label>
