<script lang="ts">
import type { PageData } from "$types"

import { onDestroy, onMount } from "svelte"

import { usePreview } from "$model/preview"
import { LazyPromise } from "$ui/effect"
import { Content } from "$ui/layout"

let preview = usePreview("/images/common/preview.jpg")

onMount(preview.set)

onDestroy(preview.unset)

export let data: PageData
</script>

<Content>
    <LazyPromise promise={data.games}>
        <svelte:fragment
            slot="resolve"
            let:value={games}
        >

        </svelte:fragment>
    </LazyPromise>
</Content>
