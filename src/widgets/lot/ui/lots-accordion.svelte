<script lang="ts">
import type { IItem } from "$schema/api"

import { useGame } from "~/entities/game"
import { groupLotsByGameId } from "~/entities/lot"
import { LotsCollapse } from "~/widgets/lot"

import { LazyPromise } from "$ui/actions"
import { Accordion } from "$ui/data"

interface $$Props {
    lots: IItem[]
}

let lots: IItem[]

export {
    lots,
}
</script>

<Accordion>
    {#each [...groupLotsByGameId(lots)] as [key, val] (key)}
        <LazyPromise
            promise={useGame({ id: key }).fetchGame()}
            let:value={game}
        >
            <LotsCollapse
                {game}
                lots={val}
            />
        </LazyPromise>
    {/each}
</Accordion>
