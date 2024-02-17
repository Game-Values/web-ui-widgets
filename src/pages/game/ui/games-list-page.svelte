<script lang="ts">
import type { IGame } from "$schema/api"

import { onDestroy, onMount } from "svelte"

import { GamesGroup } from "~/widgets/game"
import { MainSlider } from "~/widgets/slider"

import { useBackground } from "$model"
import { Container, Grid, GridCol } from "$ui/layout"

interface $$Props {
    games: IGame[]
}

let { setBackground, unsetBackground } = useBackground({ src: "images/bg/main-bg.png" })

onMount(setBackground)

onDestroy(unsetBackground)

export let games: IGame[]
</script>

<Container>
    <MainSlider />

    <Grid>
        <GridCol span={8}>
            <GamesGroup {games} />
        </GridCol>

        <GridCol span={4}>
            // chat
        </GridCol>
    </Grid>
</Container>
