<script lang="ts">
import type { ILotsFilter } from "~/entities/lot"

import { Radio } from "$ui/data"

interface $$Props {
    lotsFilter: ILotsFilter
}

export let lotsFilter: ILotsFilter
</script>

<form class="form">
    <h6>
        {lotsFilter.name}
    </h6>

    <ul class="menu">
        {#each lotsFilter.buckets as bucket (bucket.label)}
            <li class="form-control">
                <Radio
                    name={lotsFilter.name}
                    inputClass="radio-xs radio-primary"
                    label={bucket.label}
                />
            </li>
        {/each}
    </ul>
</form>
