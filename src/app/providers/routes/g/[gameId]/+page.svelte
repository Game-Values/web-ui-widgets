<script lang="ts">
import type { IGameDetailsPageData } from "~/pages/game-details"

import { GameDetailsPage } from "~/pages/game-details"

export let data: IGameDetailsPageData
</script>

<GameDetailsPage pageData={data} />
