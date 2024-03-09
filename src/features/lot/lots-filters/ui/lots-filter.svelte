<script lang="ts">
import type { ILotsFilter } from "~/entities/lot"

import { findLotsFiltersDeep } from "~/entities/lot"

import { LazyComponent } from "$ui/actions"

interface $$Props {
    lotsFilter: ILotsFilter
    overflow?: number
}

let lotsFilter: ILotsFilter

let overflow: number = 4

let group: string | undefined = undefined

let overflowed: boolean = true

$: lotsFiltersDeep = (
    group
        ? findLotsFiltersDeep(lotsFilter, group)
        : []
)

export {
    lotsFilter,
    overflow,
}
</script>

<LazyComponent
    src="~/entities/lot/ui/lots-filter-{lotsFilter.type}.svelte"
    let:component
>
    <div class="flex flex-col gap-y-2 group/item">
        <svelte:component
            this={component}
            lotsFilter={
                {
                    ...lotsFilter,

                    buckets: (
                        overflowed
                            ? (lotsFilter.buckets || []).slice(0, overflow)
                            : lotsFilter.buckets
                    ),
                }
            }
            bind:group
        />

        {#if lotsFilter.buckets && lotsFilter.buckets.length > overflow}
            <button
                class="btn btn-link self-start"
                on:click={() => overflowed = !overflowed}
            >
                <small class="font-normal">
                    {#if overflowed}
                        Show more ({lotsFilter.buckets.length - overflow})
                    {:else}
                        Show less
                    {/if}
                </small>
            </button>
        {/if}
    </div>
</LazyComponent>

{#if group && lotsFiltersDeep.length}
    {#each lotsFiltersDeep as lotsFilterDeep (lotsFilterDeep.name)}
        <svelte:self lotsFilter={lotsFilterDeep} />
    {/each}
{/if}
