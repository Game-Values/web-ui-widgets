<script lang="ts">
import type { IGame } from "$schema/api"

import { useGame } from "~/entities/game"

import IconHeart from "virtual:icons/heroicons/heart"
import IconHeartSolid from "virtual:icons/heroicons/heart-solid"

let game: IGame

let { dislikeGame, liked, likeGame } = useGame(game)

export {
    game,
}
</script>

<label
    class="btn btn-circle btn-ghost btn-sm swap swap-rotate"
    data-tip=""
>
    <input
        checked={$liked}
        type="checkbox"
        on:change={$liked ? dislikeGame : likeGame}
    />

    <IconHeartSolid class="swap-on text-negative-light" />

    <IconHeart class="swap-off text-info" />
</label>
