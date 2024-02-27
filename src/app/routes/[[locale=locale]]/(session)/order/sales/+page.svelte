<script lang="ts">
import type { IOrderPurchasesListPageData } from "~/pages/order"

import { OrdersSalesListPage } from "~/pages/order"

import { LazyPromise } from "$ui/actions"

interface $$Props {
    data: IOrderPurchasesListPageData
}

export let data: IOrderPurchasesListPageData
</script>

<LazyPromise
    promise={data.pagePromise}
    let:value={[orders]}
>
    <OrdersSalesListPage {orders} />
</LazyPromise>
