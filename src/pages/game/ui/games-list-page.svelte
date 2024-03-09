<script lang="ts">
import type { IGame } from "$schema/api"

import { ChatHub } from "~/widgets/chat"
import { GamesGroup } from "~/widgets/game"
import { HelpQuestions } from "~/widgets/help"
import { MainSlider } from "~/widgets/slider"

import { useBackground } from "$model"
import { Grid, GridCol } from "$ui/layout"

interface $$Props {
    games: IGame[]
}

let games: IGame[]

useBackground({ src: "images/bg/games-list-page-bg.png" })

export {
    games,
}
</script>

<Grid>
    <GridCol>
        <MainSlider />
    </GridCol>
</Grid>

<Grid>
    <GridCol span={8}>
        <GamesGroup {games} />
    </GridCol>

    <GridCol span={4}>
        <ChatHub />
    </GridCol>
</Grid>

<Grid>
    <GridCol>
        <HelpQuestions />
    </GridCol>
</Grid>
