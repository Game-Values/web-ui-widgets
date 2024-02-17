<script lang="ts">
import type { IGame } from "$schema/api"

import { GameInfoCard, GameSectionsList } from "~/entities/game"

export let game: IGame
</script>

<GameInfoCard {game}>
    <svelte:fragment slot="gameSections">
        <GameSectionsList {game} />
    </svelte:fragment>
</GameInfoCard>
