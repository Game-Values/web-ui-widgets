<script lang="ts">
import type { IGame } from "$schema/api"
import type { IGamesListPageContext } from "~/pages/game"

import { GamesGroup } from "~/widgets/game"
import { MainSlider } from "~/widgets/slider"

import { useBackground, useContext } from "$model"
import { Grid, GridCol } from "$ui/layout"

interface $$Props {
    games: IGame[]
}

let games: IGame[]

useBackground({ src: "images/bg/main-bg.png" })

useContext<IGamesListPageContext>({ games })

export {
    games,
}
</script>

<Grid>
    <GridCol>
        <MainSlider />
    </GridCol>

    <GridCol span={8}>
        <GamesGroup />
    </GridCol>

    <GridCol span={4}>
        // chat
    </GridCol>
</Grid>
