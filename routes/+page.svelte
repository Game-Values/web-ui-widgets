<script lang="ts">
import type { IGamesListPageData } from "~/pages/games-list"

import { onDestroy, onMount } from "svelte"

import { GamesListPage } from "~/pages/games-list"

import { usePreview } from "$model/preview"
import { LazyPromise } from "$ui/effect"

let preview = usePreview("/images/common/preview.jpg")

onMount(preview.set)

onDestroy(preview.unset)

export let data: IGamesListPageData
</script>

<LazyPromise promise={data.gamesPromise}>
    <svelte:fragment
        slot="resolve"
        let:value
    >
        <GamesListPage games={value} />
    </svelte:fragment>
</LazyPromise>
