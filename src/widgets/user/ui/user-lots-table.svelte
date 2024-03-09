<script lang="ts">
import type { IItem } from "$schema/api"
import type { IContextUser } from "$types"

import { SessionUserOnly } from "~/entities/session"

import { useContext } from "$model"
import { Checkbox } from "$ui/data"

interface $$Props {
    lots: IItem[]
}

interface $$Slots {
    default: { lot: IItem }
}

let { context } = useContext<IContextUser>()

export let lots: IItem[]
</script>

<table class="table table-sm table-zebra">
    <thead>
        <tr>
            <th style:width="3.5rem">
                <Checkbox inputClass="checkbox-xs checkbox-primary" />
            </th>

            <th style:width="8rem">
                Section
            </th>

            <th>
                Lot
            </th>

            <th style:width="6rem">
                Amount
            </th>

            <th style:width="6rem">
                Price
            </th>

            <SessionUserOnly user={$context.user}>
                <th style:width="6rem">
                    Status
                </th>

                <th style:width="12rem">
                    Actions
                </th>
            </SessionUserOnly>
        </tr>
    </thead>

    <tbody>
        {#each lots as lot (lot.id)}
            <slot {lot} />
        {/each}
    </tbody>
</table>
