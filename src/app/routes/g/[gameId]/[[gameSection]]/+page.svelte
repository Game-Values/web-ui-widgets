<script lang="ts">
import type { IGameDetailsPageData } from "~/pages/game"

import { GameDetailsPage } from "~/pages/game"

import { LazyPromise } from "$ui/actions"

export let data: IGameDetailsPageData
</script>

<LazyPromise
    promise={data.gamePromise}
    let:value
>
    <GameDetailsPage game={value} />
</LazyPromise>
