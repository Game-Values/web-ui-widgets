<script lang="ts">
import type { IGame } from "$schema/api"
import type { IGameSections } from "~/entities/game"
import type { IGameDetailsPageContext } from "~/pages/game"

import { useGame } from "~/entities/game"
import { HelpGameDetailsAccordion } from "~/entities/help"
import { LotsFilters } from "~/features/lot"
import { GameInfo } from "~/widgets/game"
import { HelpQuestions } from "~/widgets/help"
import { LotsTable } from "~/widgets/lot"

import { useBackground, useContext, useRoute, useWatch } from "$model"
import { LazyPromise } from "$ui/actions"
import { InputSearch, Toggle } from "$ui/data"
import { Grid, GridCol } from "$ui/layout"

interface $$Props {
    game: IGame
    gameSections: IGameSections
}

let game: IGame

let gameSections: IGameSections

let { gameImage } = useGame(game)
let { routeParams } = useRoute()

let { context, updateContext } = useContext<IGameDetailsPageContext>({
    game,
    gameSectionActive: $routeParams.gameSection || Object.keys(gameSections)[0],
    gameSections,
})

useBackground({ height: "25rem", src: gameImage })

useWatch(routeParams, (): void => {
    if ($context.gameSectionActive !== $routeParams.gameSection)
        updateContext({ gameSectionActive: $routeParams.gameSection })
})

export {
    game,
    gameSections,
}
</script>

<Grid>
    <GridCol>
        <GameInfo />
    </GridCol>

    <GridCol
        align="center"
        span={6}
    >
        <InputSearch
            class="w-full"
            placeholder="Search Lots"
            placement="end"
        />
    </GridCol>

    <GridCol
        align="center"
        span={6}
    >
        <Toggle
            checked
            inputClass="toggle-success"
        >
            Online Players Only
        </Toggle>
    </GridCol>

    <GridCol span={3}>
        <LotsFilters />
    </GridCol>

    <GridCol span={9}>
        <LotsTable />
    </GridCol>
</Grid>

<Grid>
    <GridCol span={7}>
        <HelpGameDetailsAccordion />
    </GridCol>

    <GridCol span={5}>
        <HelpQuestions vertical />
    </GridCol>
</Grid>
