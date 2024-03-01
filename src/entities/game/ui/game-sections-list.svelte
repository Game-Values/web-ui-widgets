<script lang="ts">
import type { IGameDetailsPageContext } from "~/pages/game"

import { GameSectionBadge } from "~/entities/game"

import { useContext } from "$model"

let { context } = useContext<IGameDetailsPageContext>()
</script>

<nav class="gap-3 flex flex-wrap">
    {#each Object.entries($context.gameSections) as [gameSection, gameSectionCount] (gameSection)}
        <GameSectionBadge
            {gameSection}
            {gameSectionCount}
        />
    {/each}
</nav>
