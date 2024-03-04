<script lang="ts">
import type { IOrderCreatePageData } from "~/pages/order"

import { OrderCreatePage } from "~/pages/order"

import { LazyPromise } from "$ui/actions"

interface $$Props {
    data: IOrderCreatePageData
}

export let data: IOrderCreatePageData
</script>

<LazyPromise
    promise={data.pagePromise}
    let:value={[lot, game]}
>
    <OrderCreatePage
        {game}
        {lot}
    />
</LazyPromise>
