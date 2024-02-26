<script lang="ts">
import type { IGameDetailsPageContext } from "~/pages/game"

import { AuthOnly } from "~/entities/auth"
import { GameInfoCard, GameSectionsList } from "~/entities/game"
import { GameLikeToggle } from "~/features/game"

import { useContext, useRoute } from "$model"

interface $$Slots {
    default: NonNullable<unknown>
}

let { context } = useContext<IGameDetailsPageContext>()
let { routeParams } = useRoute()

$: lotsCreateRoute = (
    useRoute("/lots/create", {
        gameId: $context.game.id,
        gameSection: $routeParams.gameSection,
    }).route
)
</script>

<GameInfoCard>
    <svelte:fragment slot="gameLikeToggle">
        <AuthOnly>
            <GameLikeToggle
                class="tooltip-left"
                game={$context.game}
            />
        </AuthOnly>
    </svelte:fragment>

    <svelte:fragment slot="gameSections">
        <GameSectionsList />
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
                class="btn btn-ring w-full max-w-72"
                href={$lotsCreateRoute}
            >
                New Listing
            </a>
        </AuthOnly>
    </svelte:fragment>
</GameInfoCard>
