<script lang="ts">
import { usePageState } from "$model"
import { LazyComponent } from "$ui/actions"

let { pageState } = usePageState()
</script>

{#if $pageState.modal}
    <LazyComponent
        src={`~/widgets/modal/ui/${$pageState.modal}-modal.svelte`}
    />
{/if}
