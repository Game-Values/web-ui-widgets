<script lang="ts">
import type { IGame } from "$schema/api"
import type { ILotNewListingPageContext } from "~/pages/lot"

import { useGame } from "~/entities/game"
import { HelpNewLotListingAccordion } from "~/entities/help"
import { LotNewListingInfoCard, LotNewListingSteps } from "~/entities/lot"
import { LotNewListingForm } from "~/features/lot"
import { HelpQuestions } from "~/widgets/help"

import { useBackground, useContext } from "$model"
import { Grid, GridCol } from "$ui/layout"

interface $$Props {
    games: IGame[]
}

let games: IGame[]

let { context, updateContext } = useContext<ILotNewListingPageContext>({ games, step: 1 })

useBackground({ src: "images/bg/new-listing-bg.png" })

function fetchGame(e: CustomEvent<IGame>): void {
    if (!e.detail.gid || e.detail.gid === ($context.game?.gid || $context.game?.id))
        return

    useGame(e.detail)
        .fetchGame()
        .then((game: IGame): void => updateContext({ game }))
}

export {
    games,
}
</script>

<Grid>
    <GridCol>
        <LotNewListingInfoCard />
    </GridCol>

    <GridCol span={10}>
        <LotNewListingForm on:update={fetchGame} />
    </GridCol>

    <GridCol
        justify="center"
        span={2}
    >
        <LotNewListingSteps />
    </GridCol>
</Grid>

<Grid>
    <GridCol span={7}>
        <HelpNewLotListingAccordion />
    </GridCol>

    <GridCol span={5}>
        <HelpQuestions vertical />
    </GridCol>
</Grid>
