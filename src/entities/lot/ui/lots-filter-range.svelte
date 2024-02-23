<script lang="ts">
import type { ILotsFilter } from "~/entities/lot"

interface $$Props {
    lotsFilter: ILotsFilter
}

export let lotsFilter: ILotsFilter
</script>

<form class="form">
    <h5>
        {lotsFilter.name}
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
