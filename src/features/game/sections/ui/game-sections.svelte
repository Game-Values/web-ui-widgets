<script lang="ts">
import type { IGame } from "$api"

import { first } from "lodash-es"

import { useGame } from "~/entities/game"

import { goto } from "$app/navigation"
import { page } from "$app/stores"
import { resolveRoute } from "$lib/helpers"
import { Chip, ChipSet, ChipText } from "$ui/data"
import { LazyPromise } from "$ui/effect"

let game: IGame

function selectGameSection(gameSection: string): void {
    let gameRoute: string = resolveRoute("GAME", {
        gameId: game.id,
        gameSection,
    })

    goto(gameRoute, {
        noScroll: true,
        replaceState: false,
        state: $page.state,
    })
}

export {
    game,
}
</script>

<LazyPromise promise={useGame(game).fetchCategories()}>
    <svelte:fragment
        slot="resolve"
        let:value
    >
        <ChipSet
            chips={value}
            choice
            selected={$page.params.gameSection || first(value)}
            on:select={e => selectGameSection(e.detail.chipId)}
            let:chip
        >
            <Chip {chip}>
                <ChipText>
                    {chip}
                </ChipText>
            </Chip>
        </ChipSet>
    </svelte:fragment>
</LazyPromise>
