<script lang="ts">
import type { IGame } from "$schema/api"

import { onDestroy, onMount } from "svelte"

import { GamesGroup } from "~/widgets/game"
import { MainSlider } from "~/widgets/slider"

import { useBackgroundImage } from "$model"
import { Container, Grid, GridCol } from "$ui/layout"

interface $$Props {
    games: IGame[]
}

let { setBackgroundImage, unsetBackgroundImage } = useBackgroundImage("images/bg/main-bg.png")

onMount(setBackgroundImage)

onDestroy(unsetBackgroundImage)

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
