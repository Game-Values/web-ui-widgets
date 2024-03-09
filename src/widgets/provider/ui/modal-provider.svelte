<script lang="ts">
import { useState } from "$model"
import { LazyComponent } from "$ui/actions"

let { state } = useState()
</script>

{#if $state.modal}
    <LazyComponent
        src={`~/widgets/modal/ui/${$state.modal}-modal.svelte`}
    />
{/if}
