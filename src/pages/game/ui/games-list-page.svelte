<script lang="ts">
import type { IGame } from "$schema/api"

import { GamesGroup } from "~/widgets/game"
import { MainSlider } from "~/widgets/slider"

import { EnhancedImage } from "$ui/data"
import { Container, Grid, GridCol } from "$ui/layout"

interface $$Props {
    games: IGame[]
}

export let games: IGame[]
</script>

<EnhancedImage
    class="absolute left-0 top-0"
    alt="bg-main"
    sizes="min(1920px, 100dvw)"
    src="images/bg/main-bg.png"
/>

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
