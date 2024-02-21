<script lang="ts">
import type { IGameDetailsPageContext } from "~/pages/game"

import { GameSectionBadge } from "~/entities/game"

import { useContext } from "$model"

interface $$Slots {
    default: { gameSection: string, gameSectionActive: string }
}

let { context } = useContext<IGameDetailsPageContext>({ gameSections: Object.create(null) })
</script>

<ul class="flex flex-wrap gap-3">
    {#each Object.entries($context.gameSections) as [gameSection, gameSectionCount] (gameSection)}
        <li>
            <GameSectionBadge
                {gameSection}
                {gameSectionCount}
            />
        </li>
    {/each}
</ul>
