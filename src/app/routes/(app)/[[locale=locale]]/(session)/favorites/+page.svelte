<script lang="ts">
import type { IGamesFavoritesPageData } from "~/pages/game"

import { GamesFavoritesPage } from "~/pages/game"

import { LazyPromise } from "$ui/actions"

interface $$Props {
    data: IGamesFavoritesPageData
}

export let data: IGamesFavoritesPageData
</script>

<LazyPromise
    promise={data.pagePromise}
    let:value={[games]}
>
    <GamesFavoritesPage {games} />
</LazyPromise>
