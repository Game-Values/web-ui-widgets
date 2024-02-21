<script lang="ts">
import type { IGameDetailsPageData } from "~/pages/game"

import { GameDetailsPage } from "~/pages/game"

import { LazyPromise } from "$ui/actions"

interface $$Props {
    data: IGameDetailsPageData
}

export let data: IGameDetailsPageData
</script>

<LazyPromise
    promise={data.pagePromise}
    let:value={[game]}
>
    <GameDetailsPage {game} />
</LazyPromise>
