<script lang="ts">
import type { ILotsFilter } from "~/entities/lot"

import { Checkbox, Empty } from "$ui/data"

import IconInformationCircle from "virtual:icons/heroicons/information-circle"

interface $$Props {
    group: string[]
    lotsFilter: ILotsFilter
}

export let group: string[]

export let lotsFilter: ILotsFilter
</script>

<form class="form">
    <h5>
        {lotsFilter.name}
    </h5>

    {#if lotsFilter.buckets}
        <menu class="menu">
            {#each lotsFilter.buckets as bucket (bucket.label)}
                <li class="form-control">
                    <Checkbox
                        name={bucket.label}
                        inputClass="checkbox-xs checkbox-primary"
                        value={bucket.value}
                        bind:group
                    >
                        <small class="gap-x-3 flex items-center">
                            {bucket.label}

                            {#if bucket.tooltip}
                                <i
                                    class="tooltip tooltip-right icon text-secondary"
                                    data-tip={bucket.tooltip}
                                >
                                    <IconInformationCircle />
                                </i>
                            {/if}
                        </small>
                    </Checkbox>
                </li>
            {/each}
        </menu>
    {:else}
        <Empty />
    {/if}
</form>
