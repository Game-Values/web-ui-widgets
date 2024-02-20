<script lang="ts">
import type { IGame } from "$schema/api"

import { onDestroy, onMount } from "svelte"

import { useGame } from "~/entities/game"
import { LotNewListingInfoCard } from "~/entities/lot"
import { LotNewListingForm } from "~/features/lot"

import { useBackground } from "$model"
import { Grid, GridCol } from "$ui/layout"

interface $$Props {
    games: IGame[]
}

let { setBackground, unsetBackground } = useBackground({ src: "~/app/assets/images/bg/new-listing-bg.png" })

onMount(setBackground)

onDestroy(unsetBackground)

let game: IGame | undefined = undefined

let games: IGame[]

async function fetchGame(e: CustomEvent<IGame>): Promise<void> {
    if (!e.detail.gid || e.detail.gid === (game?.gid || game?.id))
        return

    game = await useGame(e.detail).fetchGame()
}

export {
    games,
}
</script>

<Grid>
    <GridCol>
        <LotNewListingInfoCard {game} />
    </GridCol>

    <GridCol span={9}>
        <LotNewListingForm
            {games}
            on:update={fetchGame}
        />
    </GridCol>

    <GridCol span={3}>
        // steps
    </GridCol>
</Grid>
