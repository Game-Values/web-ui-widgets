<script lang="ts">
import type { IGame } from "$schema/api"

import { AuthOnly } from "~/entities/auth"
import { GameInfoCard, GameSectionsList } from "~/entities/game"

import { LazyComponent } from "$ui/actions"

export let game: IGame
</script>

<GameInfoCard {game}>
    <svelte:fragment slot="gameLikeToggle">
        <AuthOnly>
            <LazyComponent
                props={{ class: "tooltip-left", game }}
                src="~/features/game/game-like-toggle/ui/game-like-toggle.svelte"
            />
        </AuthOnly>
    </svelte:fragment>

    <svelte:fragment slot="gameSections">
        <GameSectionsList {game} />
    </svelte:fragment>
</GameInfoCard>
