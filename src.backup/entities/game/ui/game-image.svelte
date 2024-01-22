<LazyImage
    alt={game.name}
    class="h-full object-cover"
    src="/images/games/{kebabCase(game.name)}.png"
/>

<script lang="ts">
import type { IGame } from "~/entities/game"

import { kebabCase } from "lodash-es"

import { LazyImage } from "~/shared/ui"

export let game: IGame
</script>
