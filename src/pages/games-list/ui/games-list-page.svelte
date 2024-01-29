<script lang="ts">
import type { IGame } from "$api"

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
                options={
                    {
                        props: {
                            games,
                        },
                    }
                }
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
</Content>
