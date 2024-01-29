<script lang="ts">
import type { PageData } from "$types"

import { onDestroy, onMount } from "svelte"

import { GamesListPage } from "~/pages/games-list"

import { usePreview } from "$model/preview"
import { LazyPromise } from "$ui/effect"

let preview = usePreview("/images/common/preview.jpg")

onMount(preview.set)

onDestroy(preview.unset)

export let data: PageData
</script>

<LazyPromise promise={data.gamesPromise}>
    <svelte:fragment
        slot="resolve"
        let:value={games}
    >
        <GamesListPage {games} />
    </svelte:fragment>
</LazyPromise>
