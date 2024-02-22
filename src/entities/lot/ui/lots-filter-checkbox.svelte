<script lang="ts">
import type { ILotsFilter } from "~/entities/lot"

import { Checkbox } from "$ui/data"

interface $$Props {
    lotsFilter: ILotsFilter
}

export let lotsFilter: ILotsFilter
</script>

<form class="form">
    <h6>
        {lotsFilter.name}
    </h6>

    <menu class="menu">
        {#each lotsFilter.buckets as bucket (bucket.label)}
            <li class="form-control">
                <Checkbox
                    name={bucket.label}
                    inputClass="checkbox-xs checkbox-primary"
                    label={bucket.label}
                />
            </li>
        {/each}
    </menu>
</form>
