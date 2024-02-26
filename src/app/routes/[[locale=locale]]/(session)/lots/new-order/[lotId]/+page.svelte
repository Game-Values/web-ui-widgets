<script lang="ts">
import type { ILotNewOrderPageData } from "~/pages/lot"

import { LotNewOrderPage } from "~/pages/lot"

import { LazyPromise } from "$ui/actions"

interface $$Props {
    data: ILotNewOrderPageData
}

export let data: ILotNewOrderPageData
</script>

<LazyPromise
    promise={data.pagePromise}
    let:value={[lot, game]}
>
    <LotNewOrderPage
        {game}
        {lot}
    />
</LazyPromise>
