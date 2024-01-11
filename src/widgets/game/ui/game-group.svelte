<script lang="ts">
import type { IGame } from "~/entities/game"

import LayoutGrid, { Cell, InnerGrid } from "@smui/layout-grid"

import { groupGames, GameCard } from "~/entities/game"

export let games: IGame[]
</script>

<LayoutGrid>
    {#each groupGames(games) as [firstChar, gamesGroup]}
        <Cell span={12}>
            <h3>
                {firstChar}
            </h3>
        </Cell>

        <Cell span={12}>
            <InnerGrid>
                {#each gamesGroup as game}
                    <Cell spanDevices={{ desktop: 3, tablet: 4, phone: 6 }}>
                        <GameCard {game} />
                    </Cell>
                {/each}
            </InnerGrid>
        </Cell>
    {/each}
</LayoutGrid>
