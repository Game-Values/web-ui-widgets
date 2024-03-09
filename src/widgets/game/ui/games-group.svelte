<script lang="ts">
import type { IGame } from "$schema/api"

import { AuthOnly } from "~/entities/auth"
import { GameGridCard, groupGames } from "~/entities/game"
import { GameLikeToggle } from "~/features/game"

interface $$Props {
    games: IGame[]
}

export let games: IGame[]
</script>

<section class="flex flex-col gap-y-6">
    {#each groupGames(games) as [firstChar, gamesGroup] (firstChar)}
        <h3>
            {firstChar}
        </h3>

        <ul
            class="grid grid-cols-4 gap-6"
            role="list"
        >
            {#each gamesGroup as game (game.id)}
                <li>
                    <GameGridCard {game}>
                        <svelte:fragment slot="gameLikeToggle">
                            <AuthOnly>
                                <GameLikeToggle
                                    class="tooltip-bottom"
                                    {game}
                                />
                            </AuthOnly>
                        </svelte:fragment>
                    </GameGridCard>
                </li>
            {/each}
        </ul>
    {/each}
</section>
