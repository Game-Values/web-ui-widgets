<script lang="ts">
import type { ILotsListPageData } from "~/pages/lot"

import { LotsListPage } from "~/pages/lot"

import { LazyPromise } from "$ui/actions"

interface $$Props {
    data: ILotsListPageData
}

export let data: ILotsListPageData
</script>

<LazyPromise
    promise={data.pagePromise}
    let:value={[lots]}
>
    <LotsListPage {lots} />
</LazyPromise>
