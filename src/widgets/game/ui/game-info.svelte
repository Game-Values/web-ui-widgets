<script lang="ts">
import type { IGame } from "$schema/api"

import { GameDetailsInfo } from "~/entities/game"

export let game: IGame
</script>

<GameDetailsInfo {game} />
