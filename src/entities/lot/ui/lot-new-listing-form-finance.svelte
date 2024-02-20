<script lang="ts">
import type { IItemCreate } from "$schema/api"

import { useEventDispatcher } from "$model"
import { Currency, CurrencySign } from "$lib/enums"
import { Collapse, Input } from "$ui/data"

interface $$Props {
    formData: IItemCreate
}

interface $$Events {
    update: CustomEvent<Partial<IItemCreate>>
}

let { dispatchEvent: dispatchUpdateEvent } = useEventDispatcher<Partial<IItemCreate>>("update")

export let formData: IItemCreate
</script>

<Collapse title="Finance">
    <div class="form-control form-control-row">
        <Input
            name="attributes.amount"
            placeholder="Item amount"
            placement="end"
            required
            type="number"
            bind:value={formData.attributes.amount}
            on:input={e => dispatchUpdateEvent({ attributes: { amount: e.detail } })}
        />

        <Input
            name="attributes.price"
            placeholder="Item price"
            placement="end"
            required
            type="number"
            bind:value={formData.attributes.price}
            on:input={e => dispatchUpdateEvent({ attributes: { price: e.detail } })}
        >
            <svelte:fragment slot="icon">
                {CurrencySign[formData.attributes.currency || Currency.EUR]}
            </svelte:fragment>
        </Input>
    </div>
</Collapse>
