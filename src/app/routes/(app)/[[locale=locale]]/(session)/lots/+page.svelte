<script lang="ts">
import type { IContextUser } from "$types"
import type { ILotsListPageData } from "~/pages/lot"

import { LotsListPage } from "~/pages/lot"

import { page } from "$app/stores"
import { useContext } from "$model"
import { LazyPromise } from "$ui/actions"

interface $$Props {
    data: ILotsListPageData
}

useContext<IContextUser>({ user: $page.data.session.user })

export let data: ILotsListPageData
</script>

<LazyPromise
    promise={data.pagePromise}
    let:value={[lots]}
>
    <LotsListPage {lots} />
</LazyPromise>
