<script lang="ts">
import type { IGame } from "~/shared/model"

import { kebabCase } from "lodash-es"

import { Preview } from "~/shared/chat-send-hub-message"

export let game: IGame
</script>

<Preview
    alt={game.name}
    src="/images/game/{kebabCase(game.name)}.png"
/>
