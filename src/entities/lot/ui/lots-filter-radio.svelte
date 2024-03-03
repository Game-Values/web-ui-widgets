<script lang="ts">
import type { ILotsFilter } from "~/entities/lot"

import { Empty, Radio } from "$ui/data"

import IconInformationCircle from "virtual:icons/heroicons/information-circle"

interface $$Props {
    group: string
    lotsFilter: ILotsFilter
}

export let group: string

export let lotsFilter: ILotsFilter
</script>

<form class="form">
    <h5 class="gap-x-2 flex items-center">
        {lotsFilter.name}

        {#if lotsFilter.info}
            <i
                class="tooltip tooltip-right icon text-secondary"
                data-tip={lotsFilter.info}
            >
                <IconInformationCircle />
            </i>
        {/if}
    </h5>

    {#if lotsFilter.buckets}
        <menu class="menu">
            {#each lotsFilter.buckets as bucket (bucket.label)}
                <li class="form-control form-control-row">
                    <Radio
                        name={lotsFilter.name}
                        inputClass="radio-xs radio-primary"
                        value={bucket.value}
                        bind:group
                    >
                        <small class="gap-x-2 flex items-center">
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
                    </Radio>
                </li>
            {/each}
        </menu>
    {:else}
        <Empty />
    {/if}
</form>
