<script lang="ts">
import type { IGame, IItem } from "$schema/api"
import type { ILotsListPageContext } from "~/pages/lot"

import { useGame } from "~/entities/game"
import { LotsCollapse } from "~/widgets/lot"

import { useContext } from "$model"
import { LazyPromise } from "$ui/actions"
import { Accordion, Empty } from "$ui/data"

interface $$Slots {
    default: { game: IGame, gameLots: IItem[] }
}

let { context } = useContext<ILotsListPageContext>({
    gamesLots: new Map<IGame, IItem[]>(),
})

let gamesPromise: Promise<void[]> = Promise.all(
    Array
        .from(new Set($context.lots.map((lot: IItem): string => lot.gid!)))
        .map((gameId: string): Promise<void> => (
            useGame({ id: gameId })
                .fetchGame()
                .then((game: IGame): void => {
                    let gamesLots: IItem[] = (
                        $context.lots.filter((lot: IItem) => lot.gid === game.id)
                    )

                    $context.gamesLots.set(game, gamesLots)
                })
        )),
)
</script>

<Accordion>
    <LazyPromise promise={gamesPromise}>
        {#if $context.gamesLots.size}
            {#each [...$context.gamesLots] as [game, lots] (game.id)}
                {#if lots.length}
                    <LotsCollapse
                        {game}
                        {lots}
                    />
                {/if}
            {/each}
        {:else}
            <Empty />
        {/if}
    </LazyPromise>
</Accordion>
