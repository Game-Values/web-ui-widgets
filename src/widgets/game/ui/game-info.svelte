<script lang="ts">
import type { IGame } from "$schema/api"

import { AuthOnly } from "~/entities/auth"
import { GameInfoCard } from "~/entities/game"

import { LazyComponent } from "$ui/actions"

interface $$Props {
    game: IGame
}

interface $$Slots {
    default: NonNullable<unknown>
}

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
            <button class="btn btn-error w-72">
                New Listing
            </button>
        </AuthOnly>
    </svelte:fragment>
</GameInfoCard>
