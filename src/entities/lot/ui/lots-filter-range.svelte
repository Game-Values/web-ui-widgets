<script lang="ts">
import type { ILotsFilter } from "~/entities/lot"

import IconInformationCircle from "virtual:icons/heroicons/information-circle"

interface $$Props {
    lotsFilter: ILotsFilter
}

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

    <div class="form-control px-2">
        <input
            name={lotsFilter.name}
            class="range range-xs range-primary"
            max="1000"
            min="0"
            type="range"
            value="0"
        />
    </div>
</form>
