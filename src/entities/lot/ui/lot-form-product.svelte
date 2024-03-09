<script lang="ts">
import type { IItemCreate } from "$schema/api"
import type { ILotCreatePageContext } from "~/pages/lot"

import { useContext, useEventDispatcher } from "$model"
import { Collapse, Empty, Input, Select } from "$ui/data"
import { Grid, GridCol } from "$ui/layout"

interface $$Props {
    data: IItemCreate
}

interface $$Events {
    update: CustomEvent<Partial<IItemCreate>>
}

let { context, updateContext } = useContext<ILotCreatePageContext>()
let { dispatchEvent: dispatchUpdateEvent } = useEventDispatcher<Partial<IItemCreate>>("update")

export let data: IItemCreate
</script>

<Collapse
    title="Product"
    on:toggle={e => e.detail && updateContext({ step: 2 })}
>
    <Grid subgrid>
        {#if $context.lotsFilters.length}
            {#each $context.lotsFilters as lotsFilter (lotsFilter.name)}
                <GridCol span={6}>
                    <div class="form-control">
                        {#if lotsFilter.type === "checkbox"}
                            <Select
                                name="attributes.{lotsFilter.name}"
                                options={lotsFilter.buckets}
                                bind:value={data.attributes[lotsFilter.name]}
                                on:select={e => (
                                    dispatchUpdateEvent({ attributes: { [lotsFilter.name]: e.detail.value } })
                                )}
                            />
                        {:else if lotsFilter.type === "radio"}
                            <Select
                                name="attributes.{lotsFilter.name}"
                                options={lotsFilter.buckets}
                                bind:value={data.attributes[lotsFilter.name]}
                                on:select={e => (
                                    dispatchUpdateEvent({ attributes: { [lotsFilter.name]: e.detail.value } })
                                )}
                            />
                        {:else if lotsFilter.type === "range"}
                            <Input
                                name="attributes.{lotsFilter.name}"
                                placeholder={lotsFilter.name}
                                type="number"
                                bind:value={data.attributes[lotsFilter.name]}
                                on:input={e => (
                                    dispatchUpdateEvent({ attributes: { [lotsFilter.name]: e.detail } })
                                )}
                            />
                        {/if}
                    </div>
                </GridCol>
            {/each}
        {:else}
            <GridCol>
                <Empty />
            </GridCol>
        {/if}
    </Grid>
</Collapse>
