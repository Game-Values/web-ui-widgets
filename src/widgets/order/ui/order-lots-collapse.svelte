<script lang="ts">
import type { IGame, IItem } from "$schema/api"

import { useGame } from "~/entities/game"
import { OrderLotsTable } from "~/widgets/order"

import { Collapse, EnhancedImage } from "$ui/data"

interface $$Props {
    game: IGame
    lots: IItem[]
}

let game: IGame

let lots: IItem[]

let { gameIcon } = useGame(game)

export {
    game,
    lots,
}
</script>

<Collapse
    contentClass="mt-4 p-0"
    titleClass="bg-white/[0.02] text-lg"
>
    <svelte:fragment slot="title">
        <div class="gap-x-4 flex items-center">
            <EnhancedImage
                --height="5rem"
                --width="5rem"
                class="glass p-2 rounded-xl"
                src={gameIcon}
            />

            <p class="inline-flex flex-col">
                <span>
                    {game.name}
                </span>

                <small class="font-normal">
                    {lots.length} lots
                </small>
            </p>
        </div>
    </svelte:fragment>

    <OrderLotsTable {lots} />
</Collapse>
