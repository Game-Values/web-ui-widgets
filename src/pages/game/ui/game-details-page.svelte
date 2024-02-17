<script lang="ts">
import type { IGame } from "$schema/api"

import { kebabCase } from "lodash-es"
import { onDestroy, onMount } from "svelte"

import { GameInfo } from "~/widgets/game"

import { useBackground } from "$model"
import { SearchInput, Toggle } from "$ui/data"
import { Container, Grid, GridCol } from "$ui/layout"

interface $$Props {
    game: IGame
}

export let game: IGame

let { setBackground, unsetBackground } = useBackground({
    height: "25rem",
    src: `/images/game/${kebabCase(game.name)}.png`,
})

onMount(setBackground)

onDestroy(unsetBackground)
</script>

<Container>
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
</Container>
