<script lang="ts">
import type { IGame } from "$schema/api"
import type { ILotNewListingPageContext } from "~/pages/lot"

import { onDestroy, onMount } from "svelte"

import { useGame } from "~/entities/game"
import { LotNewListingInfoCard, LotNewListingSteps } from "~/entities/lot"
import { LotNewListingForm } from "~/features/lot"

import { useBackground, useContext } from "$model"
import { Grid, GridCol } from "$ui/layout"

interface $$Props {
    games: IGame[]
}

let { setBackground, unsetBackground } = useBackground({ src: "images/bg/new-listing-bg.png" })

useContext<ILotNewListingPageContext>({ step: 1 })

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

    <GridCol span={10}>
        <LotNewListingForm
            {games}
            on:update={fetchGame}
        />
    </GridCol>

    <GridCol
        justify="center"
        span={2}
    >
        <LotNewListingSteps />
    </GridCol>
</Grid>
