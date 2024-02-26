<script lang="ts">
import type { ILotCreatePageData } from "~/pages/lot"

import { LotCreatePage } from "~/pages/lot"

import { LazyPromise } from "$ui/actions"

interface $$Props {
    data: ILotCreatePageData
}

export let data: ILotCreatePageData
</script>

<LazyPromise
    promise={data.pagePromise}
    let:value={[games]}
>
    <LotCreatePage {games} />
</LazyPromise>
