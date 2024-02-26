<script lang="ts">
import type { IUserPurchaseDetailsPageData } from "~/pages/user"

import { UserPurchaseDetailsPage } from "~/pages/user"

import { LazyPromise } from "$ui/actions"

interface $$Props {
    data: IUserPurchaseDetailsPageData
}

export let data: IUserPurchaseDetailsPageData
</script>

<LazyPromise
    promise={data.pagePromise}
    let:value={[order]}
>
    <UserPurchaseDetailsPage {order} />
</LazyPromise>
