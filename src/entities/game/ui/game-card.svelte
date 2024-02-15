<script lang="ts">
import type { IGame } from "$schema/api"

import { kebabCase } from "lodash-es"

import { useGame } from "~/entities/game"

import { route } from "$schema/routes"
import { EnhancedImage } from "$ui/data"

interface $$Props {
    game: IGame
}

interface $$Slots {
    likeToggle: NonNullable<unknown>
}

let game: IGame

let { liked } = useGame(game)

export {
    game,
}
</script>

<div class="card group">
    <a href={route("/g/[gameId]", { gameId: game.id })}>
        <figure
            class={`
                h-40
                border border-solid border-white/[0.15] rounded-xl
                group-hover:border-[rgba(52,95,246,0.65)]
                group-hover:shadow-[0_0.4rem_3.4rem_0_rgba(61,152,255,0.30)]

                ${$liked ? "bg-primary" : "bg-white/[0.02]"}
            `}
            class:group-hover:bg-gradient-to-b={$liked}
            class:group-hover:from-primary={$liked}
            class:group-hover:to-accent-medium-light={$liked}
        >
            <EnhancedImage src="icons/game/{kebabCase(game.name)}.svg" />
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
                href={route("/g/[gameId]", { gameId: game.id })}
            >
                <small>
                    {game.name}
                </small>
            </a>
        </h2>

        <div class="relative left-2">
            <slot name="likeToggle" />
        </div>
    </div>
</div>
