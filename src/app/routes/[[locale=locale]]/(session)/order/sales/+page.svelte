<script lang="ts">
import type { IOrderSalesListPageData } from "~/pages/order"

import { OrderSalesListPage } from "~/pages/order"

import { LazyPromise } from "$ui/actions"

interface $$Props {
    data: IOrderSalesListPageData
}

export let data: IOrderSalesListPageData
</script>

<LazyPromise
    promise={data.pagePromise}
    let:value={[lots]}
>
    <OrderSalesListPage {lots} />
</LazyPromise>
