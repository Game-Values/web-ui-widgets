<script lang="ts">
import type { IGame } from "$schema/api"

import { AuthOnly } from "~/entities/auth"
import { GameInfoCard } from "~/entities/game"

import { useRoute } from "$model"
import { LazyComponent } from "$ui/actions"

interface $$Props {
    game: IGame
}

interface $$Slots {
    default: NonNullable<unknown>
}

let game: IGame

let { routeParams } = useRoute()

$: lotsCreateRoute = (
    useRoute("/lots/new-listing", {
        gameId: game.id,
        gameSection: $routeParams.gameSection,
    }).route
)

export {
    game,
}
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
        <slot />
    </svelte:fragment>

    <svelte:fragment slot="gameAddSection">
        <AuthOnly>
            <button class="btn btn-secondary w-72">
                +Add Section
            </button>
        </AuthOnly>
    </svelte:fragment>

    <svelte:fragment slot="gameCreateLot">
        <AuthOnly>
            <a
                class="btn btn-ring w-72"
                href={$lotsCreateRoute}
            >
                New Listing
            </a>
        </AuthOnly>
    </svelte:fragment>
</GameInfoCard>
