<script lang="ts">
import type { IGame } from "$schema/api"

import { mapGamesIds } from "~/entities/game"
import { GamesGroup } from "~/widgets/game"

import { useSession } from "$model"
import { Empty } from "$ui/data"
import { Grid, GridCol } from "$ui/layout"

interface $$Props {
    games: IGame[]
}

let games: IGame[]

let { user } = useSession()

$: favoriteGames = (
    games.filter((game: IGame): boolean => (
        mapGamesIds($user.liked_games).includes(game.id!)
    ))
)

export {
    games,
}
</script>

<Grid subgrid>
    <GridCol>
        <h1>
            Favorites ({$user.liked_games.length})
        </h1>
    </GridCol>

    <GridCol>
        {#if $user.liked_games.length}
            <GamesGroup games={favoriteGames} />
        {:else}
            <Empty />
        {/if}
    </GridCol>
</Grid>
