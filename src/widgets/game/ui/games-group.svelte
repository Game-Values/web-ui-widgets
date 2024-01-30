<script lang="ts">
import type { IGame } from "$api"

import { GameCard, groupGames } from "~/entities/game"

import { Grid, GridCell } from "$ui/layout"

export let games: IGame[]
</script>

<div class="flex flex-col gap-y-6">
    {#each groupGames(games) as [firstChar, gamesGroup] (firstChar)}
        <h3>
            {firstChar}
        </h3>

        <Grid inner>
            {#each gamesGroup as game (game.id)}
                <GridCell
                    desktop={3}
                    mobile={6}
                    tablet={4}
                >
                    <GameCard {game} />
                </GridCell>
            {/each}
        </Grid>
    {/each}
</div>
