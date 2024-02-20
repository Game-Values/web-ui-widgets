<script lang="ts">
import type { ILotNewListingPageData } from "~/pages/lot"

import { LotNewListingPage } from "~/pages/lot"

import { LazyPromise } from "$ui/actions"

export let data: ILotNewListingPageData
</script>

<LazyPromise
    promise={data.pagePromise}
    let:value={[games]}
>
    <LotNewListingPage {games} />
</LazyPromise>
