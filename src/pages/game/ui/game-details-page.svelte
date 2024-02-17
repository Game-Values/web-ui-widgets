<script lang="ts">
import type { IGame } from "$schema/api"

import { onDestroy, onMount } from "svelte"

import { useGame } from "~/entities/game"
import { GameInfo } from "~/widgets/game"

import { useBackground } from "$model"
import { SearchInput, Toggle } from "$ui/data"
import { Grid, GridCol } from "$ui/layout"

interface $$Props {
    game: IGame
}

let game: IGame

let { gameImage } = useGame(game)

let { setBackground, unsetBackground } = useBackground({
    height: "25rem",
    src: gameImage,
})

onMount(setBackground)

onDestroy(unsetBackground)

export {
    game,
}
</script>

<Grid>
    <GridCol>
        <GameInfo {game} />
    </GridCol>

    <GridCol
        align="center"
        span={6}
    >
        <SearchInput
            class="w-full text-base"
            placement="end"
        />
    </GridCol>

    <GridCol
        align="center"
        span={6}
    >
        <Toggle
            class="text-base"
            checked
            inputClass="toggle-success"
        >
            Online Players Only
        </Toggle>
    </GridCol>
</Grid>
