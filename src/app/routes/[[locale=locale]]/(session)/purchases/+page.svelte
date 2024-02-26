<script lang="ts">
import type { IUserPurchasesListPageData } from "~/pages/user"

import { UserPurchasesListPage } from "~/pages/user"

import { LazyPromise } from "$ui/actions"

interface $$Props {
    data: IUserPurchasesListPageData
}

export let data: IUserPurchasesListPageData
</script>

<LazyPromise
    promise={data.pagePromise}
    let:value={[orders]}
>
    <UserPurchasesListPage {orders} />
</LazyPromise>
