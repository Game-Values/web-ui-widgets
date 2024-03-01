<script lang="ts">
import type { IGame } from "$schema/api"
import type { ILotCreatePageContext } from "~/pages/lot"

import { useGame } from "~/entities/game"
import { HelpNewLotListingAccordion } from "~/entities/help"
import { LotCreateInfoCard, LotCreateSteps } from "~/entities/lot"
import { LotForm } from "~/features/lot"
import { HelpQuestions } from "~/widgets/help"

import { useBackground, useContext } from "$model"
import { Grid, GridCol } from "$ui/layout"

let { context, updateContext } = useContext<ILotCreatePageContext>({ step: 1 })

useBackground({ src: "images/bg/lot-create-page-bg.png" })

function fetchGame(e: CustomEvent<IGame>): void {
    if (!e.detail.gid || e.detail.gid === ($context.game?.gid || $context.game?.id))
        return

    useGame(e.detail)
        .fetchGame()
        .then((game: IGame): void => updateContext({ game }))
}
</script>

<Grid>
    <GridCol>
        <LotCreateInfoCard />
    </GridCol>

    <GridCol span={10}>
        <LotForm
            action="create"
            on:update={fetchGame}
        />
    </GridCol>

    <GridCol
        justify="center"
        span={2}
    >
        <LotCreateSteps />
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
