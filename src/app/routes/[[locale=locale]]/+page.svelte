<script lang="ts">
import type { IGamesListPageData } from "~/pages/game"

import { GamesListPage } from "~/pages/game"

import { LazyPromise } from "$ui/actions"

export let data: IGamesListPageData
</script>

<LazyPromise
    promise={data.pagePromise}
    let:value={[games]}
>
    <GamesListPage {games} />
</LazyPromise>
