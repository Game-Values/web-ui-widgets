<script lang="ts">
import type { ILotNewOrderPageContext } from "~/pages/lot"

import { useGame } from "~/entities/game"

import { useContext } from "$model"
import { EnhancedImage } from "$ui/data"

let { context } = useContext<ILotNewOrderPageContext>()
let { gameIcon } = useGame($context.game)
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
            Ordering #0001
        </h1>
    </figcaption>
</figure>
