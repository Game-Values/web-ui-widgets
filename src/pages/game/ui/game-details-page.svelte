<script lang="ts">
import type { IGame } from "$schema/api"
import type { IGameSections } from "~/entities/game"

import { onDestroy, onMount } from "svelte"

import { GameSectionsList, useGame } from "~/entities/game"
import { GameInfo } from "~/widgets/game"
import { LotsFilters, LotsTable } from "~/widgets/lot"

import { useBackground } from "$model"
import { LazyPromise } from "$ui/actions"
import { SearchInput, Toggle } from "$ui/data"
import { Grid, GridCol } from "$ui/layout"

interface $$Props {
    game: IGame
}

let game: IGame

let { fetchGameSections, gameImage } = useGame(game)
let { setBackground, unsetBackground } = useBackground({ height: "25rem", src: gameImage })

let gameSectionsPromise: Promise<IGameSections> = fetchGameSections()

onMount(setBackground)

onDestroy(unsetBackground)

export {
    game,
}
</script>

<Grid>
    <GridCol>
        <GameInfo {game}>
            <LazyPromise
                promise={gameSectionsPromise}
                let:value={gameSections}
            >
                <GameSectionsList {gameSections} />
            </LazyPromise>
        </GameInfo>
    </GridCol>

    <GridCol
        align="center"
        span={6}
    >
        <SearchInput
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
        <LazyPromise
            promise={gameSectionsPromise}
            let:value={gameSections}
        >
            <LotsTable
                {game}
                {gameSections}
            />
        </LazyPromise>
    </GridCol>
</Grid>
