<script lang="ts">
import type { IGameSections } from "~/entities/game"

import { GameSectionBadge } from "~/entities/game"

import { useRoute } from "$model"

interface $$Props {
    gameSections: IGameSections
}

interface $$Slots {
    default: { gameSection: string, gameSectionActive: string }
}

let gameSections: IGameSections

let { routeParams } = useRoute()

$: gameSectionActive = $routeParams.gameSection || Object.keys(gameSections)[0]

export {
    gameSections,
}
</script>

<ul class="flex flex-wrap gap-3">
    {#each Object.entries(gameSections) as [gameSection, gameSectionCount] (gameSection)}
        <li>
            <GameSectionBadge
                {gameSection}
                {gameSectionActive}
                {gameSectionCount}
            />
        </li>
    {/each}
</ul>
