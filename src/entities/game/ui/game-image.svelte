<Image
    alt={game.name}
    class="h-full object-cover"
    src="/images/games/{kebabCase(game.name)}.png"
/>

<script lang="ts">
import type { IGame } from "~/entities/game"

import { Image } from "@smui/image-list"
import { kebabCase } from "lodash-es"

export let game: IGame
</script>
