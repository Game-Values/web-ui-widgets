<script lang="ts">
import type { IGamesListPageData } from "~/pages/game"

import { GamesListPage } from "~/pages/game"

import { LazyPromise } from "$ui/actions"

interface $$Props {
    data: IGamesListPageData
}

export let data: IGamesListPageData
</script>

<LazyPromise
    promise={data.pagePromise}
    let:value={[games]}
>
    <GamesListPage {games} />
</LazyPromise>
