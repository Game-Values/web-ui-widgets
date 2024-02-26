<script lang="ts">
import type { IGame, IOrderInDB } from "$schema/api"

import { useGame } from "~/entities/game"

import { EnhancedImage } from "$ui/data"

interface $$Props {
    game: IGame
    order?: IOrderInDB
}

let game: IGame

let order: IOrderInDB | undefined = undefined

let { gameIcon } = useGame(game)

export {
    game,
    order,
}
</script>

<figure class="hero flex">
    <EnhancedImage
        --height="6.25rem"
        --width="6.25rem"
        class="glass p-4 rounded-xl"
        src={gameIcon}
    />

    <figcaption class="hero-content justify-start">
        <h1>
            {order ? `Ordering #${order.id}` : "New order"}
        </h1>
    </figcaption>
</figure>
