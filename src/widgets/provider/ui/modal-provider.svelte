<script lang="ts">
import { page } from "$app/stores"
import { LazyComponent } from "$ui/actions"
</script>

{#if $page.state.modal}
    <LazyComponent
        src={`~/widgets/modal/ui/${$page.state.modal}-modal.svelte`}
    />
{/if}
