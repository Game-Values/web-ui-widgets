<script lang="ts">
import type { IGame } from "$schema/api"

import { useGame } from "~/entities/game"

import { useRoute } from "$model"
import { EnhancedImage } from "$ui/data"

interface $$Props {
    game: IGame
}

interface $$Slots {
    gameLikeToggle: NonNullable<unknown>
}

let game: IGame

let { gameIcon, gameLiked } = useGame(game)
let { route } = useRoute("/g/[gameId]", { gameId: game.id })

export {
    game,
}
</script>

<div class="card group">
    <a href={$route}>
        <figure
            class={`
                h-40
                border border-solid border-white/[0.15] rounded-xl
                group-hover:border-[rgba(52,95,246,0.65)]
                group-hover:shadow-[0_0.4rem_3.4rem_0_rgba(61,152,255,0.30)]

                ${$gameLiked ? "bg-primary" : "bg-white/[0.02]"}
            `}
            class:group-hover:bg-gradient-to-b={$gameLiked}
            class:group-hover:from-primary={$gameLiked}
            class:group-hover:to-accent-medium-light={$gameLiked}
        >
            <EnhancedImage src={gameIcon} />
        </figure>
    </a>

    <div
        class="
            card-body
            px-0 py-2
            flex-row items-center justify-between
        "
    >
        <h2 class="card-title">
            <a
                class="link link-hover"
                href={$route}
            >
                <b class="text-lg">
                    {game.name}
                </b>
            </a>
        </h2>

        <div class="relative left-2">
            <slot name="gameLikeToggle" />
        </div>
    </div>
</div>
