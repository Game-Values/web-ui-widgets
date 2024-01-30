<script lang="ts">
import type { IGame } from "$api"

import { GamesGroup } from "~/widgets/game"
import { LotsStats } from "~/widgets/lot"

import { asyncComponent } from "$lib/helpers"
import { LazyComponent } from "$ui/effect"
import { Content, Grid, GridCell } from "$ui/layout"

export let games: IGame[]
</script>

<Content>
    <Grid>
        <GridCell
            desktop={10}
            mobile={0}
            tablet={8}
        >
            <LazyComponent
                provider={asyncComponent("~/widgets/game/ui/games-slider.svelte")}
            />
        </GridCell>

        <GridCell
            align="middle"
            desktop={2}
            tablet={4}
        >
            <LotsStats />
        </GridCell>
    </Grid>

    <Grid>
        <GridCell
            desktop={8}
            mobile={0}
            tablet={8}
        >
            <GamesGroup {games} />
        </GridCell>

        <GridCell
            desktop={4}
            tablet={4}
        >
            // chat
        </GridCell>
    </Grid>
</Content>
