<script lang="ts">
import type { IGame } from "$schema/api"

import { GameSectionBadge, useGame } from "~/entities/game"

interface $$Props {
    game: IGame
}

let game: IGame

let { gameSections } = useGame(game)

export {
    game,
}
</script>

<ul class="flex flex-wrap gap-3">
    {#each Object.keys(gameSections) as gameSection (gameSection)}
        <li>
            <GameSectionBadge
                {game}
                {gameSection}
            />
        </li>
    {/each}
</ul>
