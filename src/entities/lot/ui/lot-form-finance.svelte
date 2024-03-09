<script lang="ts">
import type { IItemCreate } from "$schema/api"
import type { ILotCreatePageContext } from "~/pages/lot"

import { useContext, useEventDispatcher } from "$model"
import { Collapse, Input } from "$ui/data"

interface $$Props {
    data: IItemCreate
}

interface $$Events {
    update: CustomEvent<Partial<IItemCreate>>
}

let { updateContext } = useContext<ILotCreatePageContext>()
let { dispatchEvent: dispatchUpdateEvent } = useEventDispatcher<Partial<IItemCreate>>("update")

export let data: IItemCreate
</script>

<Collapse
    title="Finance"
    on:toggle={e => e.detail && updateContext({ step: 3 })}
>
    <div class="form-control form-control-row">
        <Input
            name="attributes.amount"
            min={0}
            placeholder="Item amount"
            placement="end"
            required
            type="number"
            bind:value={data.attributes.amount}
            on:input={e => dispatchUpdateEvent({ attributes: { amount: e.detail } })}
        />

        <Input
            name="attributes.price"
            min={0}
            placeholder="Item price"
            placement="end"
            required
            type="number"
            bind:value={data.attributes.price}
            on:input={e => dispatchUpdateEvent({ attributes: { price: e.detail } })}
        />
    </div>
</Collapse>
