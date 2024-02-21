<script lang="ts">
import type { IGame } from "$schema/api"
import type { IGameSections } from "~/entities/game"
import type { IGameDetailsPageContext } from "~/pages/game"

import { useGame } from "~/entities/game"
import { LotsFilters } from "~/features/lot"
import { GameInfo } from "~/widgets/game"
import { LotsTable } from "~/widgets/lot"

import { useBackground, useContext, useRoute, useWatch } from "$model"
import { LazyPromise } from "$ui/actions"
import { Input, Toggle } from "$ui/data"
import { Grid, GridCol } from "$ui/layout"

import IconMagnifyingGlass from "virtual:icons/heroicons/magnifying-glass"

interface $$Props {
    game: IGame
}

let game: IGame

let { context, updateContext } = useContext<IGameDetailsPageContext>({ game })
let { fetchGameSections, gameImage } = useGame(game)
let { routeParams } = useRoute()

let gameSectionsPromise: Promise<void> = (
    fetchGameSections()
        .then((gameSections: IGameSections): void => (
            updateContext({
                gameSectionActive: $routeParams.gameSection || Object.keys(gameSections)[0],
                gameSections,
            })
        ))
)

useBackground({ height: "25rem", src: gameImage })

useWatch(routeParams, (): void => {
    if ($context.gameSectionActive !== $routeParams.gameSection)
        updateContext({ gameSectionActive: $routeParams.gameSection })
})

export {
    game,
}
</script>

<LazyPromise promise={gameSectionsPromise}>
    <Grid>
        <GridCol>
            <GameInfo />
        </GridCol>

        <GridCol
            align="center"
            span={6}
        >
            <Input
                class="w-full"
                placeholder="Search Lots"
                placement="end"
                type="search"
            >
                <svelte:fragment slot="icon">
                    <IconMagnifyingGlass />
                </svelte:fragment>
            </Input>
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
</LazyPromise>
