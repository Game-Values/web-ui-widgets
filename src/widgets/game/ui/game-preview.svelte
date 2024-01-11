<script lang="ts">
import type { IGame } from "~/entities/game"

import { GameImage } from "~/entities/game"

export let game: IGame
</script>

<div
    class="
        absolute top-0 left-0
        h-full max-h-31.25rem
    "
>
    <GameImage game={game} />
</div>
