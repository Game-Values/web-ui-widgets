<script lang="ts">
import type { IGame } from "~/shared/lib"

import { kebabCase } from "lodash-es"

import { Preview } from "~/shared/chat-send-hub-message-form"

export let game: IGame
</script>

<Preview
    alt={game.name}
    src="/images/game/{kebabCase(game.name)}.png"
/>
