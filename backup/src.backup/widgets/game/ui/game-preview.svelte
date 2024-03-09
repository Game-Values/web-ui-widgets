<div
    class="
        absolute top-0 left-0
        w-full h-full max-h-31.25rem
    "
>
    <div
        class="
            absolute top-0 left-0
            w-full h-28
            bg-gradient-to-b from-black
        "
    />

    <GameImage game={game} />
</div>

<script lang="ts">
import type { IGame } from "~/entities/game"

import { GameImage } from "~/entities/game"

export let game: IGame
</script>
