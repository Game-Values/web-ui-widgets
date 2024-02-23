<script lang="ts">
import type { ILotsFilter } from "~/entities/lot"

import { isString } from "lodash-es"

import { findLotsFiltersDeep } from "~/entities/lot"

import { LazyComponent } from "$ui/actions"

interface $$Props {
    lotsFilter: ILotsFilter
}

let lotsFilter: ILotsFilter

let group: string | undefined = undefined

export {
    lotsFilter,
}
</script>

<LazyComponent
    src="~/entities/lot/ui/lots-filter-{lotsFilter.type}.svelte"
    let:component
>
    <svelte:component
        this={component}
        {lotsFilter}
        bind:group
    />
</LazyComponent>

{#if group}
    {#if isString(group)}
        {#each findLotsFiltersDeep(lotsFilter, group) as lotsFilterDeep (lotsFilterDeep.name)}
            <svelte:self lotsFilter={lotsFilterDeep} />
        {/each}
    {/if}
{/if}
