<script lang="ts">
import type { IItemCreate } from "$schema/api"
import type { ILotsFilter } from "~/entities/lot"

import { useEventDispatcher } from "$model"
import { Collapse, Input, Select } from "$ui/data"
import { Grid, GridCol } from "$ui/layout"

interface $$Props {
    formData: IItemCreate
    lostFilters: ILotsFilter[]
}

interface $$Events {
    update: CustomEvent<Partial<IItemCreate>>
}

let { dispatchEvent: dispatchUpdateEvent } = useEventDispatcher<Partial<IItemCreate>>("update")

export let formData: IItemCreate

export let lostFilters: ILotsFilter[]
</script>

<Collapse title="Product">
    <Grid subgrid>
        {#each lostFilters as lostFilter (lostFilter.name)}
            <GridCol span={6}>
                <div class="form-control">
                    {#if lostFilter.type === "checkbox"}
                        <Select
                            name="attributes.{lostFilter.name}"
                            options={lostFilter.buckets}
                            bind:value={formData.attributes[lostFilter.name]}
                            on:select={e => dispatchUpdateEvent({ attributes: { [lostFilter.name]: e.detail.value } })}
                        />
                    {:else if lostFilter.type === "radio"}
                        <Select
                            name="attributes.{lostFilter.name}"
                            options={lostFilter.buckets}
                            bind:value={formData.attributes[lostFilter.name]}
                            on:select={e => dispatchUpdateEvent({ attributes: { [lostFilter.name]: e.detail.value } })}
                        />
                    {:else if lostFilter.type === "range"}
                        <Input
                            name="attributes.{lostFilter.name}"
                            placeholder={lostFilter.name}
                            type="number"
                            bind:value={formData.attributes[lostFilter.name]}
                            on:input={e => dispatchUpdateEvent({ attributes: { [lostFilter.name]: e.detail } })}
                        />
                    {/if}
                </div>
            </GridCol>
        {/each}
    </Grid>
</Collapse>
