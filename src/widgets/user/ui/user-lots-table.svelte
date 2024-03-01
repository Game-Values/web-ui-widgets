<script lang="ts">
import type { IItem } from "$schema/api"

import { Checkbox } from "$ui/data"

interface $$Props {
    lots: IItem[]
}

interface $$Slots {
    default: { lot: IItem }
}

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

            <th style:width="6rem">
                Status
            </th>

            <th style:width="12rem">
                Actions
            </th>
        </tr>
    </thead>

    <tbody>
        {#each lots as lot (lot.id)}
            <slot {lot} />
        {/each}
    </tbody>
</table>
