<div class="flex flex-col items-center gap-3.5">
    <LotTable lots={$lots} />

    {#if $lots?.length === LOTS_LIMIT}
        <LotShowMoreButton />
    {/if}
</div>

<script lang="ts">
import { lots } from "~/entities/lot"
import { LotShowMoreButton } from "~/features/lot"
import { LOTS_LIMIT } from "~/shared/lib"
import { LotTable } from "~/widgets/lot"
</script>
