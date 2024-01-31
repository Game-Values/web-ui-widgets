<script lang="ts">
import type { IGame } from "$api"

import { useGame } from "~/entities/game"

import { resolveRoute } from "$lib/helpers"
import { Button } from "$ui/common"
import { Card, CardActions, CardContent, Image } from "$ui/data"
import { LazyPromise } from "$ui/effect"

export let game: IGame
</script>

<Card class="group">
    <CardContent
        class="
            border border-solid border-white/15
            group-hover:(border-[rgba(52,95,246,0.65)])
            group-hover:(shadow-[0_0.375rem_3.25rem_0_rgba(61,152,255,0.20)])
        "
        media
    >
        <LazyPromise promise={useGame(game).fetchIcon()}>
            <svelte:fragment
                slot="resolve"
                let:value
            >
                <Button
                    class="w-full h-auto bg-white/2!"
                    color="secondary"
                    href={resolveRoute("GAME", { gameId: game.id })}
                >
                    <Image
                        class="h-36"
                        src={value}
                    />
                </Button>
            </svelte:fragment>
        </LazyPromise>
    </CardContent>

    <CardActions>
        <h4>
            <Button
                color="secondary"
                href={resolveRoute("GAME", { gameId: game.id })}
                variant="text"
            >
                {game.name}
            </Button>
        </h4>
    </CardActions>
</Card>
