<script lang="ts">
import type { IGame } from "$schema/api"

import { kebabCase } from "lodash-es"

import { EnhancedImage } from "$ui/data"

interface $$Props {
    game: IGame
}

interface $$Slots {
    likeToggle: NonNullable<unknown>
}

export let game: IGame
</script>

<div class="card">
    <figure
        class="
            h-40
            bg-white/[0.02]
            border border-solid border-white/[0.15] rounded-xl
        "
    >
        <EnhancedImage src="icons/game/{kebabCase(game.name)}.svg" />
    </figure>

    <div
        class="
            card-body
            px-0 py-2
            flex-row items-center justify-between
        "
    >
        <h2 class="card-title">
            <small>
                {game.name}
            </small>
        </h2>

        <div class="relative left-2">
            <slot name="likeToggle" />
        </div>
    </div>
</div>
