<script lang="ts">
import type { IGamePageData } from "~/pages/game"

import { GamePage } from "~/pages/game"

export let data: IGamePageData
</script>

<GamePage {data} />
