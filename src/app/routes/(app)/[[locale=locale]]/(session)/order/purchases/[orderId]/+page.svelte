<script lang="ts">
import type { IOrderPurchaseDetailsPageData } from "~/pages/order"

import { OrderPurchaseDetailsPage } from "~/pages/order"

import { LazyPromise } from "$ui/actions"

interface $$Props {
    data: IOrderPurchaseDetailsPageData
}

export let data: IOrderPurchaseDetailsPageData
</script>

<LazyPromise
    promise={data.pagePromise}
    let:value={[order]}
>
    <OrderPurchaseDetailsPage {order} />
</LazyPromise>
