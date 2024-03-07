<script lang="ts">
import type { IGame } from "~/shared/lib"

import { Cell, InnerGrid } from "@smui/layout-grid"

import { AuthOnly } from "~/entities/auth"
import { GameCard } from "~/entities/game"
import { GameToggleLike } from "~/features/game"
import { groupGames } from "~/widgets/games-group"

export let games: IGame[]
</script>

<InnerGrid>
    {#each groupGames(games) as [firstChar, gamesGroup] (firstChar)}
        <Cell span={12}>
            <h3>
                {firstChar}
            </h3>
        </Cell>

        <Cell span={12}>
            <InnerGrid>
                {#each gamesGroup as game (game.id)}
                    <Cell spanDevices={{ desktop: 3, phone: 6, tablet: 4 }}>
                        <GameCard {game}>
                            <svelte:fragment slot="toggle-like">
                                <AuthOnly>
                                    <GameToggleLike {game} />
                                </AuthOnly>
                            </svelte:fragment>
                        </GameCard>
                    </Cell>
                {/each}
            </InnerGrid>
        </Cell>
    {/each}
</InnerGrid>
