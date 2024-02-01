<script lang="ts">
import type { IGame } from "$api"
import type { IGameDetailPageData } from "~/pages/game-details"

import { kebabCase } from "lodash-es"
import { onDestroy, onMount } from "svelte"

import { GamesDetailsPage } from "~/pages/game-details"

import { setPreview, unsetPreview } from "$model/preview"
import { LazyPromise } from "$ui/effect"

onMount(() => (
    data.gamePromise.then((game: IGame) => (
        setPreview(`/images/game/${kebabCase(game.name)}.png`)
    ))
))

onDestroy(unsetPreview)

export let data: IGameDetailPageData
</script>

<LazyPromise promise={data.gamePromise}>
    <svelte:fragment
        slot="resolve"
        let:value
    >
        <GamesDetailsPage game={value} />
    </svelte:fragment>
</LazyPromise>
